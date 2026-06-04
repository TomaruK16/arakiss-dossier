function ouvrirDossier(){
    document.getElementById("ecranDemarrage").style.display = "none";
    document.getElementById("dossier").style.display = "block";

    const firstBtn = document.querySelector(".menu button");
    ouvrirOnglet("infos", firstBtn);
}

function ouvrirOnglet(id, bouton){

    document.querySelectorAll(".onglet").forEach(o => {
        o.style.display = "none";
    });

    const target = document.getElementById(id);
    if(target) target.style.display = "block";

    document.querySelectorAll(".menu button").forEach(b => {
        b.classList.remove("actif");
    });

    if(bouton) bouton.classList.add("actif");
}

window.onload = () => {

    const texte = document.getElementById("texteIntro");
    const bouton = document.querySelector("#ecranDemarrage button");

    bouton.style.display = "none";

    setTimeout(() => texte.innerText = "Connexion au réseau Cybertron...", 2000);
    setTimeout(() => texte.innerText = "Analyse des systèmes sécurisés...", 5000);
    setTimeout(() => texte.innerText = "Décryptage des archives classifiées...", 8000);
    setTimeout(() => texte.innerText = "⚠ DOSSIER HAUTEMENT CLASSIFIÉ ⚠", 11000);

    setTimeout(() => {
        texte.innerText = "Êtes-vous certain de vouloir ouvrir ce fichier ?";
    }, 14000);

    setTimeout(() => {
        bouton.style.display = "inline-block";
        bouton.innerText = "OUI - ACCÉDER AU DOSSIER";
    }, 16000);
};