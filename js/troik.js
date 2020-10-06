var soundsArr;
var clickSd;
clickSd = new Howl({
    src: ['sounds/click.mp3']
});
var error;
error = new Howl({
    src: ['sounds/error.mp3']
});

var good;
good = new Howl({
    src: ['sounds/good.mp3']
});

var sfx_showRoad;
sfx_showRoad = new Howl({
    src: ['sounds/sfx_showRoad.mp3']
});

var sfx_popUp;
sfx_popUp = new Howl({
    src: ['sounds/sfx_popUp.mp3']
});
var sfx_popDown;
sfx_popDown = new Howl({
    src: ['sounds/sfx_popDown.mp3']
});
$(function () {

    soundsArr = [clickSd, good, error,
                sfx_showRoad,
                 sfx_popUp, sfx_popDown
    ]
    stopAllSounds();

    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
});


function stopAllSounds() {
    for (var s = 0; s < soundsArr.length; s++) {
        soundsArr[s].stop();
    }
}


function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
    touch.screenX, touch.screenY,
    touch.clientX, touch.clientY, false,
    false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    //event.preventDefault();
    $('.BTN').mouseup(function () {
        //stopAllSounds();
        clickSd.play();

    });
}
$('#Play_BTN').click(function (e) {
    e.preventDefault();

    // Code goes here
});
$('#Close_Game_Desc').mouseup(function (e) {
    e.preventDefault();
    clickSd.play();
    sfx_popDown.play();
    $(this).css('-webkit-transform', 'scale(0.8)');
    $(this).css('-moz-transform', 'scale(0.8)');
    $(this).css('transform', 'scale(0.8)');
    setTimeout(function () { window.location.href = "index.html" }

       , sfx_popDown._duration * 1000);
});

$('#click').click(function (e) {
    e.preventDefault();
    clickSd.play();
    //Code goes here
});
 
$('#instruction').click(function (e) {
    e.preventDefault();

    clickSd.play();
    //sfx_popUp.play();
    // Code goes here
});
$('#Close_Instruc_modal').click(function (e) {
    e.preventDefault();
    clickSd.play();
    //sfx_popDown.play();
    
});
$('#Game_Desc_BTN').click(function (e) {
    e.preventDefault();
    clickSd.play();
    setTimeout(sfx_popUp.play(), 500);
    $(this).css('-webkit-transform', 'scale(1)');
    $(this).css('-moz-transform', 'scale(1)');
    $(this).css('transform', 'scale(1)');
   
});


function myfunction() {
    stopAllSounds();
   
    $('#Play_BTN').click(function (e) {
        e.preventDefault();

        // _popUp.play();
    });
     

}
$("#Play_BTN").on("click", function (e) {
    
});
$(document).ready(function () {

     

});


