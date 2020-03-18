var compte =0;
var player = document.querySelector('#audioPlayer');

$('button[id=ajout_reveil]').click(function(){

    info();

});

let listeReveil = [];

function info(){

    var titre =document.getElementById("titre_reveil").value;
    var heure =document.getElementById("heure_reveil").value;

    var titre_heure=titre + " " + heure;
    console.log(titre_heure);

    var div=document.querySelectorAll('article');
    console.log(div);

    var contenu_reveil=document.createElement('article');


    var section_liste=document.getElementById('liste_alarme');
    console.log(section_liste);

    contenu_reveil.innerHTML="<div id=titre><div id=realtitre>" + titre + "</div></div>" + "<div id=heure>" + "<article id=slideOn>" + "<div id=On></div>" + "</article>" + "<article id=heure><div id=realheure>" + heure  + "</div></article></div>";

    document.body.appendChild(section_liste);
    section_liste.appendChild(contenu_reveil);

    listeReveil.push(heure);


    compte++;
    console.log(compte);

    for(i=0; i<compte; i++){
        var slider = $('div[id^=O]')[i];
        console.log(slider);

    }
    
    var compte2=0;
    
    slider.addEventListener("click",function(){
        compte2++;

        if(compte2%2==0){
            var ajoutid=document.createAttribute('id');
            ajoutid.value="On";
            slider.setAttributeNode(ajoutid);
            console.log(slider);
        }
        else{
            var ajoutid=document.createAttribute('id');
            ajoutid.value="Off";
            slider.setAttributeNode(ajoutid);
            console.log(slider);
        }
    });

    console.log(listeReveil);

}


var rebours =0;

function verif(){

    var today =new Date();
    var h=today.getHours();
    var mn=today.getMinutes();
    var s=today.getSeconds();

    h=(h>9?h:"0" + h);
    mn=(mn>9?mn:"0" + mn);
    s=(s>9?s:"0" + s);
    var heureActuelle=h + ":" + mn + ":" + s;
    
    for(i=0; i<compte; i++){
        console.log(listeReveil[i]);

        var H=listeReveil[i]+":00";
        console.log(H);

        if(H===heureActuelle ){


            var slider = $('div[id^=O]')[i];
            console.log(slider.value);

            var ajoutid=document.createAttribute('id');
            ajoutid.value="Off";
            slider.setAttributeNode(ajoutid);
            console.log(slider);

            player.play();

        }
    
    }
    rebours++;
    console.log(rebours);
    console.log(heureActuelle);
    

    reload = setTimeout("verif()",1000);
    
}
verif();
