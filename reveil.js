var compte =0;
var player = document.querySelector('#audioPlayer');

$('button[id=ajout_reveil]').click(function(){

    info();

});

var listeReveil = [];
var titreReveil = [];


function info(){
    
    var titre =document.getElementById("titre_reveil").value;
    var heure =document.getElementById("heure_reveil").value;

    if(heure!==''){

    // var titre_heure=titre + " " + heure;
    // console.log(titre_heure);

    // var div=document.querySelectorAll('article');
    // console.log(div);

    var contenu_reveil=document.createElement('article');

    var section_liste=document.getElementById('liste_alarme');
    // console.log(section_liste);

    contenu_reveil.innerHTML="<div id=titre><div id=realtitre>" + titre + "</div></div>" + "<div id=heure>" + "<article id=slideOn>" + "<div id=On></div>" + "</article>" + "<article id=heure><div id=realheure>" + heure  + "</div></article></div>";


    document.body.appendChild(section_liste);
    section_liste.appendChild(contenu_reveil);

    listeReveil.push(heure);
    if(titre===""){
        titre="Alarme";
    }
    titreReveil.push(titre);
    compte++;
    console.log(compte);



    for(i=0; i<compte; i++){
    var slider = $('div[id^=O]')[i];
    console.log(slider);
    console.log(slider.id);
    };
    
    var compte2=0;
    
    slider.addEventListener("click",function(){
        compte2++;

        // var slide = $('div[id=stop]');
        // console.log(slide.id);

            if(compte2%2==0){
                var ajoutid=document.createAttribute('id');
                ajoutid.value="On";
                slider.setAttributeNode(ajoutid);
                // console.log(slider);
                compte2++;

            }
            else{
                var ajoutid=document.createAttribute('id');
                ajoutid.value="Off";
                slider.setAttributeNode(ajoutid);
                // console.log(slider);
        };

    });


    // console.log(titreReveil);
    // console.log(listeReveil);
}
else{
    alert("Merci de préciser l'heure du réveil");
};

};






// compte++;
// // console.log(compte);


// for(i=0; i<compte; i++){
//     var slider = $('div[id^=O]')[i];
//     var slider_value=slider.id;
//     console.log(slider_value);
//     console.log(slider);
// };





    






var rebours =0;

function alarme(){

    var today =new Date();
    var h=today.getHours();
    var mn=today.getMinutes();
    var s=today.getSeconds();

    h=(h>9?h:"0" + h);
    mn=(mn>9?mn:"0" + mn);
    s=(s>9?s:"0" + s);
    var heureActuelle=h + ":" + mn + ":" + s;
    

    var titre =document.getElementById("titre_reveil").value;
    var nb_reveil=$("div[id=titre]").length;
    console.log(nb_reveil);

    for(i=0; i<nb_reveil; i++){
        // console.log(listeReveil[i]);
        
        var H=listeReveil[i]+":00";
        var T=titreReveil[i];
        var slider = $('div[id^=O]')[0];
            console.log(slider);

        console.log(T);
        console.log(H);

        if(H===heureActuelle){

            




            if(slider.id=="On"){
             
            let nopopup=document.createElement('div');
            let nopopup_id=document.createAttribute('id');
            nopopup_id.value="Yes";
            nopopup.setAttributeNode(nopopup_id);
            nopopup.innerHTML=T + "<br/><button type=button id=arreter >Arreter</button>";

            document.body.append(nopopup);
            

            var ajoutid=document.createAttribute('id');
            ajoutid.value="stop";
            slider.setAttributeNode(ajoutid);




            

            // Lancement sonore du réveil
            player.play();
        };
        

        $('button[id=arreter]').click(function(){
            player.pause();
            var divyes=$('div[id=Yes]')[0];
            var divyes1=document.createAttribute('id');
            divyes1.value="No";
            divyes.setAttributeNode(divyes1);
        });

        };

    };
    rebours++;
    // console.log(rebours);
    // console.log(heureActuelle);
    

    reload = setTimeout("alarme()",1000);
    

}

alarme();

