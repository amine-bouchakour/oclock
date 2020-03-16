function appel(){
    
    var today =new Date();
    var h=today.getHours();
    var mn=today.getMinutes();
    var s=today.getSeconds();
    
    h=(h>9? h:"0" + h);
    mn=(mn>9? mn:"0" + mn);
    s=(s>9? s:"0" + s);

    var heure = h + ':' + mn + ":" + s;

    document.getElementById('Hour').innerHTML = heure;
    reload = setTimeout("appel()",1000);
}

appel();
