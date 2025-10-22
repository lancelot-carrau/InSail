// Animation de particules connectées pour les sections
(function() {
    'use strict';

    // Polyfill pour requestAnimationFrame
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || 
                window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    class ParticleAnimation {
        constructor(container) {
            this.container = container;
            this.width = container.offsetWidth;
            this.height = container.offsetHeight;
            this.target = {x: this.width/2, y: this.height/2};
            this.points = [];
            this.animateHeader = true;
            
            this.init();
        }

        init() {
            // Créer le canvas
            this.canvas = document.createElement('canvas');
            this.canvas.className = 'particles-canvas';
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx = this.canvas.getContext('2d');
            this.container.appendChild(this.canvas);

            // Créer les points
            var pointsCount = 15; // Moins de points pour de meilleures performances
            for(var x = 0; x < this.width; x = x + this.width/pointsCount) {
                for(var y = 0; y < this.height; y = y + this.height/pointsCount) {
                    var px = x + Math.random()*this.width/pointsCount;
                    var py = y + Math.random()*this.height/pointsCount;
                    var p = {x: px, originX: px, y: py, originY: py };
                    this.points.push(p);
                }
            }

            // Trouver les 5 points les plus proches pour chaque point
            for(var i = 0; i < this.points.length; i++) {
                var closest = [];
                var p1 = this.points[i];
                for(var j = 0; j < this.points.length; j++) {
                    var p2 = this.points[j]
                    if(!(p1 == p2)) {
                        var placed = false;
                        for(var k = 0; k < 5; k++) {
                            if(!placed) {
                                if(closest[k] == undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for(var k = 0; k < 5; k++) {
                            if(!placed) {
                                if(this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            // Assigner un cercle à chaque point
            for(var i in this.points) {
                var c = new Circle(this.points[i], 2+Math.random()*2, 'rgba(77, 182, 172, 0.8)');
                this.points[i].circle = c;
            }

            this.addListeners();
            this.animate();
            this.shiftPoints();
        }

        addListeners() {
            if(!('ontouchstart' in window)) {
                this.container.addEventListener('mousemove', (e) => this.mouseMove(e));
            }
            window.addEventListener('resize', () => this.resize());
        }

        mouseMove(e) {
            var rect = this.container.getBoundingClientRect();
            this.target.x = e.clientX - rect.left;
            this.target.y = e.clientY - rect.top;
        }

        resize() {
            this.width = this.container.offsetWidth;
            this.height = this.container.offsetHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }

        animate() {
            if(this.animateHeader) {
                this.ctx.clearRect(0, 0, this.width, this.height);
                for(var i in this.points) {
                    var distance = Math.abs(this.getDistance(this.target, this.points[i]));
                    
                    if(distance < 4000) {
                        this.points[i].active = 0.3;
                        this.points[i].circle.active = 0.6;
                    } else if(distance < 20000) {
                        this.points[i].active = 0.1;
                        this.points[i].circle.active = 0.3;
                    } else if(distance < 40000) {
                        this.points[i].active = 0.02;
                        this.points[i].circle.active = 0.1;
                    } else {
                        this.points[i].active = 0;
                        this.points[i].circle.active = 0;
                    }

                    this.drawLines(this.points[i]);
                    this.points[i].circle.draw(this.ctx);
                }
            }
            requestAnimationFrame(() => this.animate());
        }

        shiftPoints() {
            for(var i in this.points) {
                this.shiftPoint(this.points[i]);
            }
        }

        shiftPoint(p) {
            var duration = 1 + 1*Math.random();
            var targetX = p.originX - 50 + Math.random()*100;
            var targetY = p.originY - 50 + Math.random()*100;
            
            this.animatePoint(p, targetX, targetY, duration * 1000, () => {
                this.shiftPoint(p);
            });
        }

        animatePoint(p, targetX, targetY, duration, callback) {
            var startX = p.x;
            var startY = p.y;
            var startTime = Date.now();
            
            var animate = () => {
                var elapsed = Date.now() - startTime;
                var progress = Math.min(elapsed / duration, 1);
                
                // Easing function (easeInOutCirc)
                var eased = progress < 0.5
                    ? (1 - Math.sqrt(1 - Math.pow(2 * progress, 2))) / 2
                    : (Math.sqrt(1 - Math.pow(-2 * progress + 2, 2)) + 1) / 2;
                
                p.x = startX + (targetX - startX) * eased;
                p.y = startY + (targetY - startY) * eased;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else if (callback) {
                    callback();
                }
            };
            
            animate();
        }

        drawLines(p) {
            if(!p.active) return;
            for(var i in p.closest) {
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
                this.ctx.strokeStyle = 'rgba(77, 182, 172, '+ p.active+')';
                this.ctx.stroke();
            }
        }

        getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
    }

    function Circle(pos, rad, color) {
        this.pos = pos || null;
        this.radius = rad || null;
        this.color = color || null;
        this.active = 0;

        this.draw = function(ctx) {
            if(!this.active) return;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(77, 182, 172, '+ this.active+')';
            ctx.fill();
        };
    }

    // Initialiser les animations sur les sections avec la classe 'particles-section'
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.particles-section');
        sections.forEach(section => {
            // Ajouter un wrapper pour le canvas
            section.style.position = 'relative';
            section.style.overflow = 'hidden';
            
            new ParticleAnimation(section);
        });
    });

})();
