// $("#more_com").click(function(){
     
    $.ajax({
       url : 'oclock.php', // La ressource ciblée
       type : 'GET', // Le type de la requête HTTP.
       dataType : 'php',
       data:"nom=" + toto,
       
    });
    
    console.log(data);
// });
