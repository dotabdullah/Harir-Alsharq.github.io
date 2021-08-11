$(document).ready(function (){
	
	// Carousel Speed Time
	$('.carousel').carousel({
	  interval: 3000
	})
	
	// Language Switcher
	$('ul.lang_btn li').on('click', 'a', function() {
		$('ul.lang_btn li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// Navbar Item Active link
	$('ul.navbar-nav li').on('click', 'a', function() {
		$('ul.navbar-nav li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// Smoth Scrolling
	$('#up_arrow').click(function (){
		window.scrollTo({top: 0, behavior: 'smooth'}, 'slow');
	})
	
	// About Menu Active link
	$('ul.about_menu_links li').on('click', 'a', function() {
		$('ul.about_menu_links li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// Services Menu Active link
	$('ul.services_menu_links li').on('click', 'a', function() {
		$('ul.services_menu_links li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// News Menu Active link
	$('ul.news_menu_links li').on('click', 'a', function() {
		$('ul.news_menu_links li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// News Detail Menu Active link
	$('ul.nd_menu_links li').on('click', 'a', function() {
		$('ul.nd_menu_links li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// Owl Carousel Script
	$('.owl-services').owlCarousel({
			items: 4,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			merge: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 2
				},
				678: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		});
	$('.owl-projects').owlCarousel({
			items: 6,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 4000,
			merge: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				678: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	$('.owl-clients').owlCarousel({
			items: 6,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 2000,
			merge: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 3
				},
				678: {
					items: 3
				},
				1000: {
					items: 6
				}
			}
		});
});
