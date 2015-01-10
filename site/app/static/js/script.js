$(document).ready(function(){

        $('.main-slide-wrapper').each(function() {

            var BV = new $.BigVideo({container: $(this), useFlashForFirefox: false});
            BV.init();

            if (!Modernizr.touch && $(this).data('type') == 'video') {

                $(this).append('<i class="fa fa-pause fa-2x video-control"></i>');
                BV.show([
                    {type: 'video/mp4', src: $(this).data('video-mp4')},
                    {type: 'video/webm', src: $(this).data('video-webm')},
                    {type: 'video/ogg', src: $(this).data('video-ogg')},
                    ], {doLoop:false});
    
                $('.video-control').click(function() {
                    var player = $(this).closest('.main-slide-wrapper').find('video').get(0);
                    if (player.paused) {
                        $(this).removeClass('fa-play').addClass('fa-pause');
                        player.play();
                    }
                    else {
                        $(this).removeClass('fa-pause').addClass('fa-play');
                        player.pause();
                    }
                });
            }
            else {
                BV.show($(this).data('image'));
            }
            
        });






});

$(window).load(function() {

    $('.js-fouc').animate({'opacity': 1}, 100);

});
