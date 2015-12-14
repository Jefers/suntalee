$(document).ready(function() {
    // Expand toggle the room boxes
    $(".more").click(function() {
        $more = $(this);
        //getting the next element
        $cellbody = $more.next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $cellbody.slideToggle(500, function() {
            //execute this after slideToggle is done
            //change text of more based on visibility of content div
            $more.text(function() {
                //change text based on condition
                return $cellbody.is(":visible") ? "-" : "+";
            });
        });
    });

    // Next and Prev Arrows scroll
    $('section.section').first();

    $('a.display').on('click', function(e) {
        e.preventDefault();

        var t = $(this).text().trim(),
            that = $(this);

        if (t === 'next' && $('.current').next('section.section').length > 0) {
            var $next = $('.current').next('.section');
            var top = $next.offset().top;

            $('.current').removeClass('current');

            $('body').animate({
                scrollTop: top
            }, function() {
                $next.addClass('current');
            });
        } else if (t === 'prev' && $('.current').prev('section.section').length > 0) {
            var $prev = $('.current').prev('.section');
            var top = $prev.offset().top;

            $('.current').removeClass('current');

            $('body').animate({
                scrollTop: top
            }, function() {
                $prev.addClass('current');
            });
        }
    });

    // END Next and Prev Arrows scroll

    // Google map overlay to stop scrolling issue
    $("#toggle").click(function() {
        $(this).text(function(i, v) {
            return v === 'enable map controls' ? 'disable map controls' : 'enable map controls';
        });
        $("#overlay").toggle();
    });
    // Google map overlay to stop scrolling issue



});
