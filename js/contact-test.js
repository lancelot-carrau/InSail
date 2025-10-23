// Test simple pour le dropdown de contact
console.log('=== SCRIPT CONTACT-TEST CHARGÉ ===');

document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM READY ===');
    
    const select = document.getElementById('contactReason');
    console.log('Select element trouvé:', select);
    
    if (select) {
        // Test 1: Click
        select.addEventListener('click', function() {
            console.log('CLICK sur le select!');
        });
        
        // Test 2: Focus
        select.addEventListener('focus', function() {
            console.log('FOCUS sur le select!');
        });
        
        // Test 3: Change
        select.addEventListener('change', function(e) {
            console.log('CHANGE détecté! Valeur:', e.target.value);
            alert('Vous avez sélectionné: ' + e.target.value);
            
            // Afficher les champs spécifiques
            const specificFields = document.getElementById('specificFields');
            if (specificFields) {
                specificFields.innerHTML = '<div style="padding: 20px; background: #e0f7f4; border-radius: 8px; margin: 10px 0;"><strong>✓ Dropdown fonctionne!</strong><br>Profil sélectionné: ' + e.target.value + '</div>';
            }
        });
        
        console.log('Event listeners ajoutés avec succès!');
    } else {
        console.error('ERREUR: Select element non trouvé!');
    }
    
    // Lister tous les selects de la page
    const allSelects = document.querySelectorAll('select');
    console.log('Nombre total de selects sur la page:', allSelects.length);
    allSelects.forEach((sel, index) => {
        console.log(`Select ${index}:`, sel.id, sel.name);
    });
});
