

/**
   * Back to top button
   */
 $(window).on("scroll", function() {
	if($(window).scrollTop() > 100) {
		$(".back-to-top").addClass("active");
	} else {
		
	   $(".back-to-top").removeClass("active");
	}
});

$(window).on("scroll", function() {
	if($(window).scrollTop() > 100) {
		$(".header").addClass("header-sticky");
        $(".header__top").addClass("header__top-sticky");
        $(".navbar").addClass("navbar-sticky");
		$(".logo").addClass("logo-sticky");
		$(".social-icons").addClass("social-icons-sticky");

	} else {
	   $(".header").removeClass("header-sticky");
       $(".header__top").removeClass("header__top-sticky");
       $(".navbar").removeClass("navbar-sticky");
	   $(".logo").removeClass("logo-sticky");
	   $(".social-icons").removeClass("social-icons-sticky");
	}
});