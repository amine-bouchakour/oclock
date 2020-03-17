
$('button[id=ajout_reveil]').click(function(){

    info();

});



function info(){

    var titre =document.getElementById("titre_reveil").value;
    var heure =document.getElementById("heure_reveil").value;

    var titre_heure=titre + " " + heure;
    console.log(titre_heure);

    var div=document.querySelectorAll('article');
    console.log(div);

    var contenu_reveil=document.createElement('article');
    contenu_reveil_value=contenu_reveil.value="rototo";
    console.log(contenu_reveil + " " + contenu_reveil_value);


    var section_liste=document.getElementById('liste_alarme');
    console.log(section_liste);

    contenu_reveil.innerHTML="<div id=titre>" + titre + "</div>" + "<div id=heure>" + "<article id=slideOn>" + "<div id=slider></div>" + "</article>" + "<article id=heure>" + heure  + "</article></div>";

    document.body.appendChild(section_liste);
    section_liste.appendChild(contenu_reveil);

    




    }
