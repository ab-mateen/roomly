// TAke Quiz section
$(document).ready(function() {
    $('#quizStep1,#quizStep2').hide();
    // On Input Select
    $('.quiz-content input').click(function() {
        var stepTarget = $(this).data('target');
        var stepHide = $(this).data('dismiss');
        $(stepHide).fadeOut('8000');
        $(stepTarget).fadeIn('8000');
    });
    // Back to previous Step
    $('.quiz-back').click(function() {
        var stepTarget = $(this).data('target');
        var stepHide = $(this).data('dismiss');
        $(stepHide).fadeOut('8000');
        $(stepTarget).fadeIn('8000');
    });
});

// Latest Article Slider

$('.article-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    smartSpeed: 500,
    navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})