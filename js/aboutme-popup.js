$(document).ready(function() {
    $("#openModalPop").click(function() {
        $("#banner_online").fadeIn();
        $("#modal").fadeIn();
    });

    $("#close_button").click(function(){
        $("#banner_online").fadeOut();
        $("#modal").fadeOut();
    });
});