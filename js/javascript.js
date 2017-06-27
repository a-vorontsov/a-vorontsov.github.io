$(document).on('click', '.navLink', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetOffset = $(target).offset();
    $('html,body').animate({
        scrollTop: (targetOffset.top)
    }, 500)
});

$(document).on('click', '.scrollTop', function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: (0)
    }, 500
    );
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.upArrow').fadeIn();
    } else {
        $('.upArrow').fadeOut();
    }
});
