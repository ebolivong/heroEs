$(document).ready(function(){
// MY ATTEMPT
// var $firsthero = $('img:first');
// var $lasthero = $('img:last');

// 	$firsthero.addClass('shown');
// 	$('.name').text('BUTMAN');
// 	// $('.name').text$firsthero.attr("alt");


// 	$('.next').on('click', function() {
// 		$firsthero.removeClass('shown');
// 		// $.addClass('shown');
// 		$('.name').text('CAPTAIN MURICA');
// 	});
// }); 

// IN CLASS TAKE UP
	$('.gallery :first').addClass('shown');

	$('button.next').on('click', function() {

		if ($('.shown').is(':last-child')) {
			$('.shown').removeClass('shown');
			$('.gallery :first').addClass('shown');
		}

		else {
			$('.shown').removeClass('shown').next().addClass('shown')
		}

		var caption = $('.shown').attr('title');
		$('.name').text(caption).show().fadeOut(1000);

	});

	$('button.prev').on('click', function() {

		if ($('.shown').is(':first-child')) {
			$('.shown').removeClass('shown');
			$('.gallery :last').addClass('shown');
		}

		else {
			$('.shown').removeClass('shown').prev().addClass('shown')
		}

		var caption = $('.shown').attr('title');
		$('.name').text(caption).show().fadeOut(1000);

	});

});