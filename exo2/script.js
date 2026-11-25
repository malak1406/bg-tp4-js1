"use strict";


//fonction pour afficher le tableau d'étudiants
function F1(){  
    let tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    //utilisation de boucle vu dans le slide 45
    for (let i = 0; i < tableauEtudiants.length; i++) {
        console.log(tableauEtudiants[i]);
    }
}

//fonction pour afficher l'objet étudiant
function F2(){
    let etudiant = {
        nom: 'John',
        prenom: 'DOE',
        age: 30
    };
    
    console.log(etudiant);
}

//fonction pour afficher le tableau d'objets étudiants slide 46
function F3(){
    let etudiantsObjets = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    for (let i = 0; i < etudiantsObjets.length; i++) {
        console.log(etudiantsObjets[i].nom + "-" + etudiantsObjets[i].prenom + "-" + etudiantsObjets[i].age);
    }
}

document.getElementById("tableau").onclick = F1;
document.getElementById("objet").onclick = F2;
document.getElementById("tableau-objets").onclick = F3;