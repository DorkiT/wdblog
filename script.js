$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:8
	});
	if($(window).width() < 420){
		$(".owl-carousel").owlCarousel({
			items:2
		});
	 }
 });
