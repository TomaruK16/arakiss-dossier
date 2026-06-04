function ouvrirDossier(){

    document.getElementById("ecranDemarrage").style.display = "none";

    document.getElementById("dossier").style.display = "block";

    document.getElementById("infos").style.display = "block";
}

function ouvrirOnglet(id, bouton){

    let onglets =
        document.querySelectorAll(".onglet");

    onglets.forEach(function(onglet){

        onglet.style.display = "none";

    });

    document.getElementById(id)
        .style.display = "block";

    let boutons =
        document.querySelectorAll(".menu button");

    boutons.forEach(function(btn){

        btn.classList.remove("actif");

    });

    bouton.classList.add("actif");
}