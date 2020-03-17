var compte =0;

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


    var section_liste=document.getElementById('liste_alarme');
    console.log(section_liste);

    contenu_reveil.innerHTML="<div id=titre><div id=realtitre>" + titre + "</div></div>" + "<div id=heure>" + "<article id=slideOn>" + "<div id=On></div>" + "</article>" + "<article id=heure><div id=realheure>" + heure  + "</div></article></div>";

    document.body.appendChild(section_liste);
    section_liste.appendChild(contenu_reveil);

    compte++;
    console.log(compte);



    for(i=0; i<compte; i++){
        var slider = $('div[id^=O]')[i];
        console.log(slider)

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

    }
