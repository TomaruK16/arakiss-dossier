/* ===================================== */
/* CONFIGURATION */
/* ===================================== */

const PASSWORD_LENGTH = 7;

/* ===================================== */
/* MOT DE PASSE AUTOMATIQUE */
/* ===================================== */

function lancerAnimationMotDePasse() {

    const display = document.getElementById("passwordDisplay");
    const btnEnter = document.getElementById("btnEnter");

    let index = 0;

    const interval = setInterval(() => {

        index++;

        display.textContent = "*".repeat(index);

        if (index >= PASSWORD_LENGTH) {

            clearInterval(interval);

            btnEnter.style.display = "inline-block";
        }

    }, 600);
}

/* ===================================== */
/* CHARGEMENT CYBERTRONIEN */
/* ===================================== */

function lancerChargement() {

    document.getElementById("passwordHub").style.display = "none";

    document.getElementById("loadingHub").style.display = "flex";

    const barre = document.getElementById("progressionBar");
    const texte = document.getElementById("loadingText");

    const messages = [

        "Initialisation Cybertron Core...",
        "Chargement du noyau principal...",
        "Connexion aux archives...",
        "Vérification des protocoles...",
        "Analyse du système...",
        "Synchronisation impériale...",
        "Connexion au réseau Imperarcon...",
        "Lecture des données sécurisées...",
        "Décryptage des accès...",
        "Analyse des signatures énergétiques...",
        "Chargement des modules tactiques...",
        "Validation de l'identité...",
        "Scan des archives galactiques...",
        "Chargement des bases de données...",
        "Lecture des protocoles Omega...",
        "Connexion aux systèmes anciens...",
        "Analyse des fichiers classifiés...",
        "Détection des archives Nova Prime...",
        "Déverrouillage des accès...",
        "Synchronisation des données...",
        "Analyse des systèmes militaires...",
        "Chargement du dossier ARAKISS...",
        "Lecture du profil stratégique...",
        "Compilation des informations...",
        "Analyse psychologique...",
        "Analyse physique...",
        "Analyse des capacités...",
        "Analyse de l'armement...",
        "Analyse des l'Alt Mods...",
        "Analyse des faiblesses...",
        "Connexion aux archives impériales...",
        "Validation des données...",
        "Mise à jour des registres...",
        "Contrôle de l'intégrité...",
        "Préparation du terminal...",
        "Chargement des historiques...",
        "Connexion sécurisée...",
        "Lecture des rapports anciens...",
        "Analyse des campagnes militaires...",
        "Chargement du statut impérial...",
        "Préparation de l'interface...",
        "Ouverture des archives...",
        "Validation finale..."
    ];

    let progression = 0;

    const interval = setInterval(() => {

        progression++;

        barre.style.width = progression + "%";

        const messageIndex = Math.floor(
            (progression / 100) * messages.length
        );

        if (messages[messageIndex]) {

            texte.textContent =
                messages[messageIndex];
        }

        if (progression >= 100) {

            clearInterval(interval);

            texte.textContent =
                "ACCÈS AUTORISÉ";

            setTimeout(() => {

                document.getElementById("loadingHub")
                    .style.display = "none";

                document.getElementById("dossier")
                    .style.display = "block";

            }, 1500);
        }

    }, 180);
}

/* ===================================== */
/* OUVERTURE DES ONGLETS */
/* ===================================== */

function ouvrirOnglet(id) {

    document
        .querySelectorAll(".onglet")
        .forEach(onglet => {

            onglet.classList.remove("actif");

        });

    document
        .getElementById(id)
        .classList.add("actif");
}

/* ===================================== */
/* DÉMARRAGE */
/* ===================================== */

window.onload = () => {

    document.getElementById("passwordHub")
        .style.display = "flex";

    document.getElementById("loadingHub")
        .style.display = "none";

    document.getElementById("dossier")
        .style.display = "none";

    lancerAnimationMotDePasse();

    document
        .getElementById("btnEnter")
        .addEventListener(
            "click",
            lancerChargement
        );
};