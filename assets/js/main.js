$('.nav-link').on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 600);
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $("#transparent").addClass("scrolled");
        
    } else {
        $("#transparent").removeClass("scrolled");
    }
});