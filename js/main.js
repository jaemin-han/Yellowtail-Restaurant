$(function(){

	// initalizing the first image to class 'top'
	$('.slides img:first').addClass('top');
	//function to alter the image index by changing the class
    var change = function (){
     		var curr = $('.slides img.top');
			var next = curr.next();

			// if the next image is not available then
			// set the class-top to the first image
			// then vanish the current image to
			// show the previous next image
			if(!next.length){

				next = $('.slides img:first');
				next.addClass('top');

		        curr.animate({opacity: 0.0},1700, function() {
		            curr.removeClass('top');
		            curr.css({opacity: 1.0});
		        });

			} else {

				// pick the next image
				// set the opacity to 0
				// den use animation to make it appear
				// above the top image
				next.css({opacity: 0.0})
		        .addClass('top')
		        .animate({opacity: 1.0}, 1700, function() {
		            curr.removeClass('top');
		        });
		    }
     }

    // repeat the function execution for every 3 secs
    setInterval(change, 4000 );


//https://www.youtube.com/watch?v=_EGO-d9H184
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		//Scroll and show hash
		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function () {
			window.location.hash = target;
		});
	});
});


//Mobile hamburger navigation//
document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});

//gallery switch -- http://katiecullinan.github.io/Cville-Coffee/
$(document).ready(function(){
	$(".switch").hover(function() {
		$(this).attr("src","images/food1.1.jpg");
			}, function() {
		$(this).attr("src","images/food1.jpg");
		//photoshop needed with description but it works!!!
	});
});

$(document).ready(function(){
	$(".switch2").hover(function() {
		$(this).attr("src","images/food2.2.jpg");
			}, function() {
		$(this).attr("src","images/food2.jpg");
	});
});

$(document).ready(function(){
	$(".switch3").hover(function() {
		$(this).attr("src","images/food3.3.jpg");
			}, function() {
		$(this).attr("src","images/food3.jpg");
	});
});

$(document).ready(function(){
	$(".switch4").hover(function() {
		$(this).attr("src","images/asahi4.4.jpg");
			}, function() {
		$(this).attr("src","images/asahi.jpg");
	});
});

$(document).ready(function(){
	$(".switch5").hover(function() {
		$(this).attr("src","images/katsu5.5.jpg");
			}, function() {
		$(this).attr("src","images/katsu.jpg");
	});
});

$(document).ready(function(){
	$(".switch6").hover(function() {
		$(this).attr("src","images/katsurice6.6.jpg");
			}, function() {
		$(this).attr("src","images/katsurice.jpg");
	});
});


//menu bars//
$(document).ready(function(){
    $('.example2').hide().before('<a href="#" id="toggle-example2" class="button">Open/Close</a>');
	$('a#toggle-example2').click(function() {
		$('.example2').slideToggle(1000);
		return false;
	});
});

// Menu toggle
$("#food-title").click(function() {
  $(".food-menu").toggle();
});

$("#drink-title").click(function() {
  $(".drink-menu").toggle();
});

$("#other-title").click(function() {
  $(".other-menu").toggle();
});


});
