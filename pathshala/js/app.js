$(document).ready( function(){
	var $root = $('html, body');
	$('a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top - 72
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});


	var $masthead, $showAt, $header;

	$showRef = $('#btn_request_demo');
	$showAt = $showRef.position().top + $showRef.height();
	$header= $('#site_header');

	$document = $(this);

	$(window).resize( function( e){
		$showAt = $showRef.position().top + $showRef.height();			
	});

	$document.scroll( function(e){
		if( $document.scrollTop() > $showAt ){
			$header.addClass( 'show');
		} else {
			$header.removeClass( 'show');
		}
	})
});	