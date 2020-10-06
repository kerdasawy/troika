// var soundsArr;
// var clickSd, goodSd, errorSd
//    ;
   
// $(function () {
//     clickSd = new Howl({
//         src: ['sounds/click.mp3']
//     });
//     goodSd = new Howl({
//         src: ['sounds/good.mp3']
//     });
//     errorSd = new Howl({
//         src: ['sounds/error.mp3']
//     });
    
//     soundsArr = [clickSd, goodSd, errorSd
//                 ]
//     stopAllSounds();

//     document.addEventListener("touchstart", touchHandler, true);
//     document.addEventListener("touchmove", touchHandler, true);
//     document.addEventListener("touchend", touchHandler, true);
//     document.addEventListener("touchcancel", touchHandler, true);
// });

// function stopAllSounds() {
//     for (var s = 0; s < soundsArr.length; s++) {
//         soundsArr[s].stop();
//     }
// }

$('.green-btn').mousedown( function () {
    $(this).css('background-image', 'linear-gradient(#1a8a6d, #80c7ba)');
    console.log("down")
});

 