"use strict";

let students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", moyenne: 14.5, credits: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", moyenne: 7.0, credits: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", moyenne: 13.0, credits: 3 }
];

// fonction B qui prend comme paramatère un float (la moyenne) et retourne true si la moyenne est supérieure ou égale à 10.0 et false sinon
//vu dans le slide 50
function B(moyenne) {
    if (moyenne >= 10.0) { // Structure conditionnelle (vu dans le slide 35)
        return true;
    } else {
        return false;
    }
}

// meme chose vu en slide 50
function A() {
    //boucle pour parcourir le tableau des étudiants (vu dans le slide 45 pour les boucles)
    for (let i = 0; i < students.length; i++) {
        let etudiant = students[i];
        
        //appel de la fonction B en lui passant la moyenne 
        let estAdmis = B(etudiant.moyenne);
        
        //affichage du résultat 
        if (estAdmis) {
            console.log(etudiant.id + ": ADMIS");
        } else {
            console.log(etudiant.id + ": AJOURNÉ");
        }
    }
}

document.getElementById("Delib").onclick = A;