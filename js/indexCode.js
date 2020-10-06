$(function () { // document on load
    /*// create background circles
        var bgDiv = document.getElementById("bg-div");
        var div, randomTop, randomLeft;
        for (var i = 0; i < 20; i++) {
            div = document.createElement("div");
            
            if(i % 2 == 0){
            randomTop = Math.floor(Math.random() * Math.random() * 45 + 10);
                
            }else{
            randomTop = Math.floor(Math.random() * Math.random() * 90 + 45);
                
            }
            div.style.top = (randomTop + (i*2)) + "vh";
            
            if(i % 2 == 0){
            randomLeft = Math.floor(Math.random() * 45 + 10);
            }else{
                randomLeft = Math.floor(Math.random() * 90 + 45);
            }
            div.style.left = (randomLeft + (i*2)) + "vw";

            if (i < 10) {
                div.className = "bg-circle1";
            } else {
                div.className = "bg-circle2";

            }
            console.log("hello" + i)
            console.log(bgDiv.style.width)
            bgDiv.appendChild(div);
        }
    */

    var originalLeft, leftWidth, originalRight, rightWidth;

    sfx_showRoad.play();
    originalLeft = $('#triangle-left').css('left');
    leftWidth = $('#triangle-left').css('width');
    $('#triangle-left').css('left', parseFloat(originalLeft) - parseFloat(leftWidth) + 'vw');
    $('#triangle-left').css('opacity', '1');
    $('#triangle-left').animate({
        left: originalLeft,
    }, 500);

    originalRight = $('#triangle-right').css('right');
    rightWidth = $('#triangle-right').css('width');
    $('#triangle-right').css('right', parseFloat(originalRight) - parseFloat(rightWidth) + 'vw');
    $('#triangle-right').css('opacity', '1');
    $('#triangle-right').animate({
        right: originalRight,
    }, 500);

    $('.bg-circle1, .bg-circle2, .bg-triangle').animate({
        opacity: '1',
    }, 1000, function () {
        $('#logo-container, #side-img').animate({
            opacity: '1',
        }, 1000, function () {
            $('#start-btn').animate({
                opacity: '1',
            }, 500);
        });
    });
});

$('#start-btn').mouseup(function () {
    clickSd.play();
    $(this).css('background-image', 'linear-gradient(#80c7ba, #1a8a6d)');
    console.log("up");
    setTimeout(function(){window.location.href = "game.html";}, 500);
});