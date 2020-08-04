$(function(){
	$('html, body').animate({
		scrollTop: 0
	});

	$(window).scroll(function(){
		if(window.pageYOffset > 400){
			$(".btn_top").addClass("active");
		} else {
			$(".btn_top").removeClass("active");
		}
	});


	$('.btn_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 500);
	});

	$(window).scroll(function(){
		if($(window).width() < 680){
			$('header').css({
				top: '0',
				left: '0',
				zIndex: '999',
				position: 'fixed'
			});
		}	
	});


	$(".btn_nav").on("click", function (e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".block_nav").toggleClass("nav_active");
	});
	
	
	$('.menu_btn').click(function(){
		var id = $(this).attr('href');
		var elem = $(id).offset().top;
		$('html, body').animate({
			scrollTop: elem
		}, 700);
	
		if($(window).width() <= 680){
			$('.block_nav').removeClass('nav_active');
			$('.btn_nav').removeClass('active');
		}
	
	});

	if($(window).width() <= 680){
		var height = $(window).innerHeight();
		var width = $(window).innerWidth();
		var header = $('header').height() - $('header').offset().top;
		$('#block_nav').css({
			top: header,
			height: height + 60, 
			width: width,
			zindex: 999,
			position: "fixed",
			padding: "0px",
			left: 0 - width + "px"
		});
	}




		var width = $(window).width();
		var clients = $('.siema div').length;
		var next = $('.next');
		var prev = $('.prev');

		if(width < 1500){
			var index = Math.floor(clients/2);
		} else {
			index = 0;
		}


		if(width < 680){
			clients = 1;
		} if(width > 680 && width < 910){
			clients = 3;
		}if(width > 910 && width < 1200){
			clients = 4;
		}if(width > 1200 && width < 1350){
			clients = 5;
		}if(width > 1350 && width < 1500){
			clients = 6;
		}if(width > 1500){
			clients = clients;
			next.css({
				display: 'none',
			});
			prev.css({
				display: 'none',
			})
		}
		var mySiema = new Siema({
			selector: '.siema',
			duration: 200,
			easing: 'ease-out',
			perPage: clients,
			startIndex: index,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: false,
		});
		document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
		document.querySelector('.next').addEventListener('click', () => mySiema.next());
});








