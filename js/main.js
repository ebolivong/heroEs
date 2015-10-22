$(document).ready(function(){

var $firsthero = $('img:first');
var $lasthero = $('img:last');

	$firsthero.addClass('shown');
	$('.name').text('BUTMAN');
	// $('.name').text$firsthero.attr("alt");


	$('.next').on('click', function() {
		$firsthero.removeClass('shown');
		// $.addClass('shown');
		$('.name').text('CAPTAIN MURICA');
	});
}); 



 