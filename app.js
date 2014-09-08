$(window).scroll(function(){

	var posizione = $(window).scrollTop();
	$("html").toggleClass("logo-visible",posizione > 195);
	console.log(posizione)

});
