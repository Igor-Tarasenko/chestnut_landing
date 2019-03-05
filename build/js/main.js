$(document).ready(function () {
    $(function () {
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-days').text('días');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc20-days').text('días');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc200-days').text('días');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-hours').text('en punto');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc200-hours').text('en punto');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc20-hours').text('en punto');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-minutes').text('minutos');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc20-minutes').text('minutos');
        $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc200-minutes').text('minutos');
    });
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
function replaceText() {
    var days = $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-days');
   /* var hours = $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-hours');
    var minutes = $('#timer-text-2f3c04bf9684bc0ba46883b86395ffc2-minutes');*/
    var text = days.html();
    /*var text2 = hours.html();
    var text3 = minutes.html();*/
    text = text.replace('дней','días');
    /*text2 = text2.replace('часов','en punto');
    text3 = text3.replace('минут','minutos');*/
    days.html(text);
    /*hours.html(text2);
    minutes.html(text3);*/
}