$.scrollDir = function(options) {
    var settings = $.extend({
        down: function() {},
        up: function() {}
    }, options);

    var scrollPosition = 0;
    $(window).scroll(function () {
        var cursorPosition = $(this).scrollTop();
        if (cursorPosition > scrollPosition) {
            settings.down();
        }
        else if (cursorPosition < scrollPosition) {
            settings.up();
        }
        scrollPosition = cursorPosition;
    });
};
$(document).ready(function () {
    $.scrollDir({
        down: function(){
            $('.navbar:not(.navbar-vertical)').addClass('d-none fadeOutDown').removeClass('d-block').one();
        },
        up: function(){
            var currPos = $(window).scrollTop();
            if (currPos > 0) {
                $('.navbar:not(.navbar-vertical)').addClass('d-block fadeInUp').removeClass('d-none');
            } else {
                $('.navbar:not(.navbar-vertical)').addClass('d-none fadeOutDown').removeClass('d-block');
            }
        },
    });

});