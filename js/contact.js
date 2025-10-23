// Formulaire de contact - Version simple et efficace

// Gestion du scroll pour la navbar transparente
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Appeler au chargement et à chaque scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Navigation mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-item a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Event listener pour le dropdown de profil
    const contactReasonSelect = document.getElementById('contactReason');
    console.log('contactReason element:', contactReasonSelect);
    
    if (contactReasonSelect) {
        console.log('Event listener ajouté au dropdown');
        contactReasonSelect.addEventListener('change', function(e) {
            console.log('Dropdown changé! Valeur:', e.target.value);
            handleFormChange(e.target.value);
        });
    } else {
        console.error('Élément contactReason non trouvé!');
    }
    
    // Gestionnaire du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulaire soumis');
            document.getElementById('confirmationMessage').style.display = 'block';
            contactForm.reset();
        });
    }
});

function handleFormChange(selectedValue) {
    console.log('handleFormChange appelée avec:', selectedValue);
    
    // Éléments du formulaire
    const messageLabel = document.getElementById('messageLabel');
    const messageField = document.getElementById('message');
    const specificFields = document.getElementById('specificFields');
    
    // Reset des champs spécifiques
    if (specificFields) {
        specificFields.innerHTML = '';
        specificFields.style.display = 'none';
    }
    
    // Personnalisation selon le profil sélectionné
    switch(selectedValue) {
        case 'investisseur':
            messageLabel.textContent = 'Parlez-nous de votre intérêt d\'investissement * :';
            messageField.placeholder = 'Montant d\'investissement envisagé, horizon temporel, secteurs d\'intérêt, questions spécifiques...';
            
            specificFields.innerHTML = `
                <div class="form-group">
                    <label for="investType" class="form-label">Type d'investissement :</label>
                    <select id="investType" name="investType" class="form-select">
                        <option value="">Sélectionnez</option>
                        <option value="seed">Seed / Amorçage</option>
                        <option value="seriesA">Série A</option>
                        <option value="seriesB">Série B+</option>
                        <option value="strategique">Investissement stratégique</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            `;
            specificFields.style.display = 'block';
            break;
            
        case 'operateur':
            messageLabel.textContent = 'Décrivez votre activité maritime * :';
            messageField.placeholder = 'Type d\'opération (ferry, navettes, tourisme...), flotte actuelle, routes exploitées, défis environnementaux...';
            
            specificFields.innerHTML = `
                <div class="form-group">
                    <label for="operationType" class="form-label">Type d'opération :</label>
                    <select id="operationType" name="operationType" class="form-select">
                        <option value="">Sélectionnez</option>
                        <option value="ferry">Liaisons ferry</option>
                        <option value="navettes">Navettes touristiques</option>
                        <option value="excursions">Excursions maritimes</option>
                        <option value="workboat">Navires de service</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="fleetSize" class="form-label">Taille de flotte :</label>
                    <input type="text" id="fleetSize" name="fleetSize" class="form-input" placeholder="Nombre et types de navires">
                </div>
            `;
            specificFields.style.display = 'block';
            break;
            
        case 'journaliste':
            messageLabel.textContent = 'Votre demande média * :';
            messageField.placeholder = 'Sujet de l\'article/reportage, délai, type de média, besoins spécifiques (interviews, photos, vidéos)...';
            
            specificFields.innerHTML = `
                <div class="form-group">
                    <label for="mediaType" class="form-label">Type de média :</label>
                    <select id="mediaType" name="mediaType" class="form-select">
                        <option value="">Sélectionnez</option>
                        <option value="presse">Presse écrite</option>
                        <option value="web">Média web</option>
                        <option value="tv">Télévision</option>
                        <option value="radio">Radio</option>
                        <option value="podcast">Podcast</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="deadline" class="form-label">Délai de publication :</label>
                    <input type="text" id="deadline" name="deadline" class="form-input" placeholder="ex: fin mars 2025">
                </div>
            `;
            specificFields.style.display = 'block';
            break;
            
        case 'collaboration':
            messageLabel.textContent = 'Votre proposition de collaboration * :';
            messageField.placeholder = 'Domaine de collaboration, expertise apportée, projets envisagés, objectifs communs...';
            
            specificFields.innerHTML = `
                <div class="form-group">
                    <label for="collabType" class="form-label">Type de collaboration :</label>
                    <select id="collabType" name="collabType" class="form-select">
                        <option value="">Sélectionnez</option>
                        <option value="recherche">Recherche & Développement</option>
                        <option value="territorial">Développement territorial</option>
                        <option value="commercial">Partenariat commercial</option>
                        <option value="technique">Expertise technique</option>
                        <option value="formation">Formation / Éducation</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
            `;
            specificFields.style.display = 'block';
            break;
            
        default:
            messageLabel.textContent = 'Votre message * :';
            messageField.placeholder = 'Décrivez votre intérêt pour InSail, vos questions ou vos propositions de collaboration...';
    }
}