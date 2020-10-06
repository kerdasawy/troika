var keyNum = 20,
    currentKeyNum = 0,
    cl = console.log;
 
 


var mySwiper;

$(function () {
    lockerLayoutFn();
   

    activateDragFn();

    $(".droppable").droppable({
        accept: ".draggable",
        drop: dropElement,
        hoverClass: 'drop-hover',
        tolerance: "touch",
        /*activate: function () {
            $('drop-key-inner').show();
            console.log("active")
        },
        deactivate: function () {
            $('drop-key-inner').hide();
            console.log("deactive")
        }*/
    });

    $('#drop-key-inner').show();

    mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

});

$(window).resize(lockerLayoutFn);

$('#start-btn').mouseup(function () {
    document.getElementById('clickSound').play()
    $(this).css('background-image', 'linear-gradient(#80c7ba, #1a8a6d)');
    console.log("up");
    $("#info-container").hide();
    $(".popup-win-container").hide();
});
$('.continue-btn').mouseup(function () {
    document.getElementById('clickSound').play()
    // $(this).css('background-image', 'linear-gradient(#80c7ba, #1a8a6d)');
    setTimeout(function () {
        window.location.href = "IKnow.html";
    }, 500);
});
$('#close-btn').mousedown(function () {
     document.getElementById('clickSound').play();
    $(this).css('background-image', 'linear-gradient(#bd262a, #cf6063)');
    console.log("down")
});

$('#close-btn').mouseup(function () {
    
    
    clickSd.play();
    $(this).css('background-image', 'linear-gradient(#cf6063, #bd262a)');
    console.log("up");
    $("#instruct-container").hide();
    $(".popup-win-container").hide();
});

function activateDragFn() {
    $(".draggable").draggable({
        //axis: "x",
        /*containment: "#game-container",*/
        revert: true,
        drag: onDragFn,
        stop: stopDragFn
    });

}
 ///////////////////////reham
function lockerLayoutFn() {
    if (window.innerHeight > window.innerWidth &&
        window.innerWidth <= 400) {
        //$('.alert-win-container').show();
        $('.flag_container').each(function (i, obj) {
             $(".draggable").css('z-index', '1000');
            //$(".empty_drag_square span img").css('width', '50px');
            
        });
    } else {
        //$('.alert-win-container').hide();
        $('.flag_container').each(function (i, obj) {
            $(".draggable").css('z-index', '999999');

            //$(".empty_drag_square span img").css('width', 'inherit');
        });
    }
    //////////////////reham
    

    $("#locker-keys-img, #lockerHandel-img, #lockerFront-img").hide();

    $("#lockerHandel-img").css('top', "-" + $("#lockerBack-img").height() + "px");

    $("#locker-keys-img").css('top', "-" + $("#lockerBack-img").height() * 2 + "px");

    $("#lockerFront-img").css('top', "-" + $("#lockerBack-img").height() * 3 + "px");

    $("#lockerOpen-img").css('top', "-" + $("#lockerBack-img").height() * 4 + "px");
    $("#lockerOpen-img").css('left', $("#lockerBack-img").width() - $("#lockerBack-img").width() / 4 + "px");

    $("#locker-keys-img, #lockerHandel-img, #lockerFront-img").show();

    $('#word-holder-div').css('width', $("#lockerBack-img").css('width'));
    $('#word-holder-div').css('height', $("#lockerBack-img").css('height'));
    $("#word-holder-div").css('top', "-" + $("#lockerBack-img").height() * 5 + "px");

    for (var i = 1, m = 6; i <= keyNum; i++, m++) {
        $("#k" + i + '-ok').css('top', "-" + $("#lockerBack-img").height() * m + "px");
    }

    $('#drop-key-div').css('width', $("#lockerBack-img").css('width'));
    $('#drop-key-div').css('height', $("#lockerBack-img").css('height'));
    $("#drop-key-div").css('top', "-" + $("#lockerBack-img").height() * (6 + keyNum) + "px");

    $("#finalTxt-div").css('top', "-" + $("#lockerBack-img").height() * (6 + keyNum) + "px");
}

$('#instruct-btn').mousedown(function () {
     stopAllSounds();
     clickSd.play();
    $(this).css('-webkit-transform', 'scale(0.8)');
    $(this).css('-moz-transform', 'scale(0.8)');
    $(this).css('transform', 'scale(0.8)');
});
$('#instruct-btn').mouseup(function () {
    //$('#instruct-btn').css('width', parseFloat($('#instruct-btn').css('width')) + 20 + "px");
    //setTimeout(function () {
    $("#instruct-container").show();
    $(".popup-win-container").show();
    $(this).css('-webkit-transform', 'scale(1)');
    $(this).css('-moz-transform', 'scale(1)');
    $(this).css('transform', 'scale(1)');
    //}, 100);
});



function onDragFn(event, ui) {

    
    var keyId = $(this).attr('id').replace(/^\D+/g, '');
    
    $(this).css('cursor', 'grabbing');
       if (window.innerHeight > window.innerWidth &&
        window.innerWidth <= 400) {
          
           //$('.flag_container').css('overflow', '');
     
       } else {
           //$('.flag_container').css('overflow', 'visible');
        
    }
    
    /*$(document).on('swipeleft swiperight swipedown swipeup',function(event, data){
        event.stopImmediatePropagation();
        console.log('(document).Stop prop: You just ' + event.type + 'ed!');
    });*/
    //mySwiper = null;
  
}

function stopDragFn(event, ui) {

    /*ui.position.left = Math.min( ui.position.left,  ui.helper.next().offset().left + ui.helper.next().width()-dragDistance); 
    ui.position.left = Math.max(ui.position.left, ui.helper.prev().offset().left + dragDistance);*/
    if (window.innerHeight > window.innerWidth &&
    window.innerWidth <= 400) {
 
         
    } else {
      
      
      
    }
    /*resize();*/
   
    $(this).css('-webkit-transform', 'scale(1)');
    $(this).css('-moz-transform', 'scale(1)');
    $(this).css('transform', 'scale(1)');
    $(this).css('cursor', 'grab')
    
    /*$(document).on('swipeleft swiperight swipedown swipeup',function(event, data){
        event.stopImmediatePropagation();
        console.log('(document).Stop prop: You just ' + event.type + 'ed!');
    });*/
}

function dropElement(event, ui) {
    // var keyCor = ui.draggable.attr('cor');
    var keyId = ui.draggable.attr('id').replace(/^\D+/g, '');
    var dropId = $(this).attr('id').replace(/^\D+/g, '');
    // var dropDeg = rotateKeys * (keyId - 1);
    // cl("deg  " + dropDeg)

    if (dropId == keyId) { 
        stopAllSounds();
        good.play();
        currentKeyNum++;
        $(".draggable").draggable("destroy");
        //$(".draggable").css('opacity', '0.5');
        ui.draggable.removeClass('draggable');
        $(this).droppable("destroy");
        if ($(ui.draggable).parent().hasClass('swiper-slide')) {
            $(ui.draggable).parent().remove();
        }
        $(ui.draggable).css('opacity', '0');
        $('#letter' + keyId ).show();
        //$('#locker-keys-img').attr('src', 'img/game/lockerBack-' + currentKeyNum + '.png');
        $('#img' + keyId ).css('opacity', '1');
        //$('#h' + keyId ).css('opacity', '1');
        $(".drag_box  span img").css('width', '100px');
        //$(".droppable").css('width', 'auto');

        setTimeout(function () {
            if (currentKeyNum ==3) {
                sfx_showRoad.play();
                
                     $("#beforeDone").hide();
                $(".final_step_message").show();;
                  // $("#click").show();;
       //            if (window.innerHeight > window.innerWidth &&
       //window.innerWidth <= 400) {
       //                $('.alert-win-container').show();
       //                $('.flag_selected_box').each(function (i, obj) {
                           
       //                    $(".empty_drag_square span img").css('width', '50px');

       //                });
       //            } else {
       //                $('.alert-win-container').hide();
       //                $('.flag_selected_box').each(function (i, obj) {
                            
       //                    $(".empty_drag_square span img").css('width', 'inherit');
       //                });
       //            }
                    // finalFbFn();
               
                finalFbFn();
            } else {
                /*$('#locker-keys-img').removeClass('rotate' + -1 * (rotateKeys));
                // rotateKeys += plusRotate;
                // $('#locker-keys-img').addClass('rotate' + -1 * (rotateKeys));
                $('#drop-key-inner').show();*/
               
                activateDragFn();
            } 
        }, 500);  
    } else { 
       
        stopAllSounds();
        error.play();
    }
}

////////////reham
$('.modal').on('shown.bs.modal', function (e) {

    setTimeout(sfx_popUp.play(), 500);
});
$(".modal").on("hidden.bs.modal", function () {
    sfx_popDown.play();

});
$('#staticBackdrop').on('shown.bs.modal', function (e) {
    $('.flag_container').each(function (i, obj) {
        $(".draggable").css('z-index', '1000');
        $(this).css('z-index', '1000');
    });
   
 
});
$("#staticBackdrop").on("hidden.bs.modal", function () {
    $('.flag_container').each(function (i, obj) {
        $(".draggable").css('z-index', '999999');
        $(this).css('z-index', '999999');
    });

});

$("#click").mouseup(function (e) {
    e.preventDefault();
    clickSd.play();
    window.location.href = "Iknow.html";
});


$("#repeat").on("click", function (e) {
    e.preventDefault();
    clickSd.play();
    window.location.href = "index.html";
});

/////////////reham



//Close_Instruc_modal
function finalFbFn() {
    
    // stopAllSounds();
    //  sfx_safe_2.play();
    // $('#lockerFront-img').animate({
    //     borderSpacing: 360
    // }, {
    //     step: function (now, fx) {
    //         $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
    //         $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
    //         $(this).css('transform', 'rotate(' + now + 'deg)');
    //     },
    //     duration: 500
    // }, 'linear');
    // setTimeout(function () {
    //     $('#lockerFront-img').css('-webkit-transform', 'rotate(0deg)');
    //     $('#lockerFront-img').css('-moz-transform', 'rotate(0deg)');
    //     $('#lockerFront-img').css('transform', 'rotate(0deg)');

    //     $('#lockerFront-img').animate({
    //         borderSpacing: 360
    //     }, {
    //         step: function (now, fx) {
    //             $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
    //             $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
    //             $(this).css('transform', 'rotate(' + now + 'deg)');
    //         },
    //         duration: 500
    //     }, 'linear');
    //     setTimeout(function () {
    //         // stopAllSounds();
    //         // sfx_showRoad.play();
    //         $('#lockerFront-img, #locker-keys-img').css('opacity', '0');
    //         $("#logo-div img").addClass('logo-img-smaller');
    //         $('#lockerOpen-img').css('opacity', '1');
    //         $('#word-holder-div img').animate({
    //             width: '100%',
    //             height: '100%',
    //             margin: '0px'
    //         });

    //         /*if (window.innerHeight > 417 ||
    //             (window.innerHeight > 417 && window.innerWidth <= 750) ||
    //             (window.innerHeight > 417 && window.innerWidth <= 750)) {
    //             setTimeout(function () {
    //                 $('#finalTxt-div').show();
    //             }, 500);

    //         } else {*/
    //             setTimeout(function () {
    //                 $("#final-container").show();
    //                 $(".popup-win-container").show();
    //             }, sfx_showRoad._duration * 1000);
    //         //}
    //     }, 1000 + 1);

    // }, 500 + 1);

    /*$('.word-div-holder h2').animate({
                                   opacity: '1'
                               }, 1000,
                               function () {
                                   window.location.href = "final.html";
                               });*/
}
