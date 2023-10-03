/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(window).scrollTop(0);
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


$(window).scroll(function() {
	if ($(window).scrollTop() > 500) {
		$('.back-to-top').addClass('show');
	} else {
		$('.back-to-top').removeClass('show');
	}
	if ($(window).scrollTop() > 50) {
		$('.navbar').css("background","#fff");
	}else{
		$('.navbar').css("background","url('../imgs/background-body.jpg')");
	} 
  });