$(document).on('click', '.navLink', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetOffset = $(target).offset();
    $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
    $('html,body').animate({
        scrollTop: (targetOffset.top)
    }, 500, function() {
        $('#device-dummy').remove();
    });
});

$(document).on('click', '.scrollTop', function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: (0)
    }, 500
    );
});
