$(document).ready(function(){
    $(function() {
        var BV = new $.BigVideo({container: $('.video-wrapper'), useFlashForFirefox: false});
        BV.init();
        if (Modernizr.touch) {
            BV.show('/static/img/camera.jpg');
        } else {
            BV.show([
                {type: "video/mp4", src: "/static/vid/camera.mp4" },
                {type: "video/ogg", src: "/static/vid/camera.ogv"},
                {type: "video/webm", src: "/static/vid/camera.webm"}
            ], {doLoop:false});
        }
    });
});

$(window).load(function() {

    $('.js-fouc').animate({'opacity': 1}, 100);

});
