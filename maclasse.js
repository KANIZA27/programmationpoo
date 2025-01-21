//classe. Crée la classe document grâce au not-clé
class Document {

// La je définissons le constroncteur de la classe grâce au mot-clé constructor
constructor(titre, nombePage, auteur ) {
    this.titre = titre;
    this.nombePage = nombePage;
    this.auteur = auteur;
}

// Les méthodes description de la classe grâce Document
description() {
console.log("Le titre du document est", this.titre);
console.log("L'auteur est", this.auteur);
console.log("Le document contient", this.nombePage, "pages");
}
}


// Création de plusieurs documents similaires au modèle de Document
let documentHtml = new Document("Introduction au HTML", 36, "Ali Abou");
let documentCss = new Document("Guide de CSS", 50, "Marie Ali");
let documentJavascript = new Document("JavaScript pour les Débutants", 120, "Abdou Ali");
let documentProgrammation = new Document("Programmation Orientée Objet", 90, "Nadia Bakir");
let documentMysql = new Document("Bases de données MySQL", 75, "Omar Ben Ali");

// Affichage des documents
console.log(documentHtml);
console.log(documentCss);
console.log(documentJavascript);
console.log(documentProgrammation);
console.log(documentMysql);
