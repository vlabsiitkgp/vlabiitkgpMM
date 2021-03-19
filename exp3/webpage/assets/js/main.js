
(function ($) {

	var copyRightHTML = '<div class="copyright">&copy; Tatikonda Sree Lakshmi, Research Engineer, VLabs IITKGP.</div>';
	$("#footer").append(copyRightHTML);

	$(document).on("click", "#submit_values", function () {
		$('.air-pump').prop("disabled", false);
		$('#submit_values').prop("disabled", true);
	});

	$(document).on("click", ".air-pump", function () {
		$('.abrasive-inlet').prop("disabled", false);
		$('.air-pump').prop("disabled", true);
		$('#slideshow > div:first')
					.hide()
					.next()
					.show()
					.end()
					.appendTo('#slideshow') ;
	});

	$(document).on("click", ".abrasive-inlet", function () {
		$('.start-machining').prop("disabled", false);
		$('.abrasive-inlet').prop("disabled", true);
		$('#slideshow > div:first')
					.hide()
					.next()
					.show()
					.end()
					.appendTo('#slideshow') ;
	});

	$(document).on("click", ".start-machining", function () {
		$('.start-machining').prop("disabled", true);


		var a_value = parseInt($('#a_value').val());
		var v_value = parseInt($('#v_value').val());
		var type = $('#Workpiece').val();
		var mrr = 0;
		var H = (Math.random() + 3).toFixed(2);

		if(type == "brittle"){
			mrr = ((a_value * Math.pow(v_value,3/2))/ (3^1/4*H^3/4)) * 0.00316;
		}
		else{
			mrr = ((a_value * Math.pow(v_value,2))/H) * (Math.pow(10,-4)/120);
		}

		var timesRun = 0;
		var interval =	setInterval(function () {
				$('#slideshow > div:first')
					.hide()
					.next()
					.show()
					.end()
					.appendTo('#slideshow') ;
				timesRun += 1;
				if(timesRun === 22){
					clearInterval(interval);
					$('.mt_value').html(mrr.toFixed(2) + " gm/min");
					$('#submit_values').prop("disabled", false);
					//$(".mrr_value b").html("(Wb - Wa)/T gm/min");
					//$(".ewr_value b").html("(Eb - Ea)/T gm/min");
				}
			}, 600);

	});

	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}

	var $window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			target: $body,
			visibleClass: 'is-menu-visible',
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right'
		});

	$("#slideshow > div:gt(0)").hide();
	$("#slideshowReverse").hide();

	$('input[type="range"]').on('input', function() {

		var control = $(this),
		  controlMin = control.attr('min'),
		  controlMax = control.attr('max'),
		  controlVal = control.val(),
		  controlThumbWidth = control.data('thumbwidth');

		var range = controlMax - controlMin;

		var position = ((controlVal - controlMin) / range) * 100;
		var positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2);
		var output = control.next('output');

		output
		  .css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
		  .text(controlVal);

	});




})(jQuery);
