/* ===================================== */
/* CONFIGURATION */
/* ===================================== */

const PASSWORD = "ARAKISS";

/* ===================================== */
/* HUB 1 : MOT DE PASSE AUTO */
/* ===================================== */

function lancerAnimationMotDePasse() {

    const display =
        document.getElementById("passwordDisplay");

    const bouton =
        document.getElementById("btnEnter");

    let index = 0;

    const interval = setInterval(() => {

        index++;

        display.innerHTML +=
            "*".repeat(index) + "<br>";

        if (index >= PASSWORD.length) {

            clearInterval(interval);

            bouton.style.display = "block";
        }

    }, 400);

}

/* ===================================== */
/* HUB 2 : CHARGEMENT */
/* ===================================== */

function lancerChargement() {

    document.getElementById("passwordHub")
        .style.display = "none";

    document.getElementById("loadingHub")
        .style.display = "flex";

    const barre =
        document.getElementById("progressionBar");

    const texte =
        document.getElementById("loadingText");

    let progression = 0;

    const interval = setInterval(() => {

        progression += 1;

        barre.style.width =
            progression + "%";

        /* Messages */

        if (progression === 10)
            texte.innerText =
            "Analyse du noyau impérial...";

        if (progression === 20)
            texte.innerText =
            "Vérification des accès...";

        if (progression === 30)
            texte.innerText =
            "Décryptage des archives...";

        if (progression === 40)
            texte.innerText =
            "Connexion au Cybertron Core...";

        if (progression === 50)
            texte.innerText =
            "Chargement des données ARAKISS...";

        if (progression === 60)
            texte.innerText =
            "Synchronisation des protocoles...";

        if (progression === 70)
            texte.innerText =
            "Ouverture des bases impériales...";

        if (progression === 80)
            texte.innerText =
            "Accès aux fichiers classifiés...";

        if (progression === 90)
            texte.innerText =
            "Validation finale...";

        if (progression >= 100) {

            clearInterval(interval);

            texte.innerText =
            "ACCÈS AUTORISÉ";

            setTimeout(() => {

                document.getElementById("loadingHub")
                    .style.display = "none";

                document.getElementById("dossier")
                    .style.display = "block";

            }, 1200);
        }

    }, 50);
}

/* ===================================== */
/* ONGLETS */
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