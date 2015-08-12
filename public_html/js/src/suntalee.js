$(document).ready(function () {

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

});
