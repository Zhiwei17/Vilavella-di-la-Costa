// Documento JavaScript
$(document).ready(function () {
    
    
    $("#kmten").click(function(){
        $("#kmten").css("background-color", "#064e8c");
        $("#kmmas").css("background-color", "transparent");
    })
    
    $("#kmmas").click(function(){
        $("#kmmas").css("background-color", "#064e8c");
        $("#kmten").css("background-color", "transparent");
    })
})
