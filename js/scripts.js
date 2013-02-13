(function($){

	var scanSuccessful;

	$(document).ready(function(){
		var touchtimer;

		$('#scanarea').on('mousedown touchstart', function(evt){
			evt.preventDefault();
			touchtimer = setTimeout(Scan, 1400);
		});

		$('#scanarea').on('mouseup touchend', function(evt){
			evt.preventDefault();
			clearTimeout(touchtimer);
			if (scanSuccessful) {
				enterSearch();
			}
		});

		$('.match').on('click', function(){
			$('body').removeClass('searching');
			$('body').removeClass('matchfound');
		});
	});

	function Scan() {
		scanSuccessful = true;
	}

	function enterSearch() {
		scanSuccessful = false;
		$('body').toggleClass('searching');
		setTimeout(function(){
			$('body').toggleClass('matchfound');
		}, 2000);
	}

	function ShowMatch() {
		$('.match').addClass('visible');
	}

})(jQuery);