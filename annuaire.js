var etudiants = [
    { nom: "Dioum", prenom: "Fatou Thiam", telephone: 9656685667, email: "fatouthiammdioum6@gmail.com", niveau: "SN2" },
    { nom: "Dioum", prenom: "Fatou Thiam", telephone: 9656685667, email: "fatouthiammdioum6@gmail.com", niveau: "SN1" },
    { nom: "Dioum", prenom: "Fatou Thiam", telephone: 9656685667, email: "fatouthiammdioum6@gmail.com", niveau: "SN3" }
];

document.addEventListener('DOMContentLoaded', afficherAnnuaire);

function afficherAnnuaire() {
    var table = document.getElementById('etudiantsTable');
    table.innerHTML = '';

    var enteteTableau = table.createTHead().insertRow(0);
    Object.keys(etudiants[0]).forEach(cle => {
        enteteTableau.insertCell().textContent = cle.charAt(0).toUpperCase() + cle.slice(1);
    });

    etudiants.forEach(etudiant => {
        var row = table.insertRow();
        Object.values(etudiant).forEach(value => {
            row.insertCell().textContent = value;
        });

        row.cells[row.cells.length - 1].style.backgroundColor = getCouleurFond(etudiant.niveau);
    });
}

function afficherFormulaire() {
    document.querySelector('.annuaire').style.display = 'block';
}

function ajouterEtudiant() {
    var form = document.forms['ajoutEtudiantForm'];

    var champsObligatoires = ['nom', 'prenom', 'telephone', 'email', 'niveau'];
    var champsValides = champsObligatoires.every(champ => form[champ].value.trim() !== '');

    if (champsValides) {
        var nouvelEtudiant = {};
        champsObligatoires.forEach(champ => nouvelEtudiant[champ] = form[champ].value.trim());

        etudiants.push(nouvelEtudiant);
        afficherAnnuaire();
        fermerFormulaire();

        form.reset();
    } 
}

function fermerFormulaire() {
    document.querySelector('.annuaire').style.display = 'none';
}

function getCouleurFond(niveau) {
    switch (niveau) {
        case 'SN2':
            return 'green';
        case 'SN1':
            return 'yellow';
        default:
            return 'pink';
    }
}



