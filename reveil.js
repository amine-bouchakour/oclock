function info(){
    var titre =document.getElementById("titre_reveil").value;
    console.log(titre);
    var heure =document.getElementById("heure_reveil").value;
    console.log(heure);

    return titre,heure;

    // alert("Vous avez saisi : "+ titre+ " " + heure);
    }



$('input[id=ajout_reveil]').click(function(){

    info();

});