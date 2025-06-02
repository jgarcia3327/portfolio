setTimeout(
    function(){
        $('#portfolio figcaption').css({'display':'none'});
        // $('#portfolio figcaption > div').css({'display':'none'});
    }, 1000);

$(document).ready(function() {
    const d = new Date();
    $('#year-here').html(d.getFullYear());
});