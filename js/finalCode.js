$('#retry-btn').mousedown(function(){
    $('#retry-btn').css('width', parseFloat($('#retry-btn').css('width')) - 10 + "px");
});

$('#retry-btn').mouseup(function(){
    $('#retry-btn').css('width', parseFloat($('#retry-btn').css('width')) + 10 + "px");
    //setTimeout(function(){
        window.location.href = "game.html";
    //}, 200);
});