// Définition d'un objet voiture avec des propriétés et des méthodes
let voiture = {
  couleur: "rouge", // Propriété couleur de la voiture
  taille: "petite", // Propriété taille de la voiture
  forme: "sportive", // Propriété forme de la voiture

  // Méthodes de la voiture
  demarrer: function() {
      console.log("La voiture a démarré.");
  },
  avancer: function() {
      console.log("La voiture avance.");
  },
  reculer: function() {
      console.log("La voiture recule.");
  },
};

// Affiche la couleur de la voiture
console.log(voiture.couleur);

// Change la taille de la voiture
voiture.taille = "petite"; // Cette ligne n'a pas d'effet car la valeur est déjà "petite"

// Ajout d'une nouvelle propriété
voiture.nombreRoue = 2;
console.log("Nombre de roues : " + voiture.nombreRoue);

// Fonction constructeur pour créer des objets voiture
function Voiture(c, f, t) {
  this.couleur = c; // Propriété couleur
  this.forme = f;   // Propriété forme
  this.taille = t;  // Propriété taille

  // Méthode spécifique à chaque objet
  this.demarrer = function() {
      console.log("La voiture de couleur " + this.couleur + " démarre.");
  };
}

// Création d'une voiture avec le constructeur
let voiture1 = new Voiture("bleu", "ronde", "petite");
let voiture2 = new Voiture("rouge", "carré", "grande");
let voiture3 = new Voiture("noir", "ronde", "moyen");
let voiture4 = new Voiture("verte", "carré", "grande");
let voiture5 = new Voiture("jaune", "rectangle", "petite");


// Affichage de la couleur de voiture1
console.log("Couleur de voiture1 : " + voiture1.couleur);

// Appel de la méthode demarrer sur voiture1
voiture1.demarrer();


// Définition d'une fonction constructeur pour les utilisateurs
function Utilisateur(nom1, prenom1, dateNaissance1, ville1, age1) {
  this.nom = nom1; // Nom
  this.prenom = prenom1; // Prénom
  this.dateNaissance = dateNaissance1; // Date de naissance
  this.ville = ville1; // Ville de résidence
  this.age = age1; // Âge

  // Méthodes
  this.courir = function() {
      console.log(this.prenom + " est en train de courir.");
  };
  this.marcher = function() {
      console.log(this.prenom + " est en train de marcher.");
  };
  this.sauter = function() {
      console.log(this.prenom + " saute.");
  };
  this.lire = function() {
      console.log(this.prenom + " est en train de lire.");
  };
  this.ecrire = function() {
      console.log(this.prenom + " écrit.");
  };
  this.reciter = function() {
      console.log(this.prenom + " récite un poème.");
  };
}

// Création de 5 utilisateurs
let utilisateur1 = new Utilisateur("Assani", "Marie", "1995-06-12", "Chirongui", 28);
let utilisateur2 = new Utilisateur("Ali", "Abdou", "1988-03-22", "Boueni", 35);
let utilisateur3 = new Utilisateur("Abdou", "Lucie", "2000-11-05", "Mzouazia", 23);
let utilisateur4 = new Utilisateur("Moussa", "Abou", "1992-02-17", "Boueni", 31);
let utilisateur5 = new Utilisateur("Ali", "Emma", "1998-09-30", "Chirongui", 25);

// Exemple d'utilisation des méthodes
utilisateur1.courir(); // Marie est en train de courir
utilisateur2.lire(); // Abdou est en train de lire

// Affiche tous les utilisateurs dans un tableau
console.log([utilisateur1, utilisateur2, utilisateur3, utilisateur4, utilisateur5]);
