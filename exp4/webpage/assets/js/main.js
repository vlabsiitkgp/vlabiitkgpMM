
var count = 0;

(function ($) {

	var startMachine = true;
	var copyRightHTML = '<div class="copyright">&copy; Tatikonda Sree Lakshmi, Research Engineer, VLabs IITKGP.</div>';

	$("#footer").append(copyRightHTML);

	$(document).on("click", "#exp_start", function () {
		startMachine =  setInterval(function(){if(count == 0){$('.rotating_image').attr("src", "Images/Main1.JPG");count=1}else{$('.rotating_image').attr("src", "images/Main.JPG");count=0}}, 100);
	});

	$(document).on("click", "#exp_stop", function () {
		clearTimeout(startMachine);
	});

	$(document).on("click", "#exp_spectrum", function () {
		var ballsCount = $('#n_value').val();
		var contactAngle = $('#c_value').val();
		var pitchDia = $('#p_value').val();
		var ballDia = $('#b_value').val();
		var rpm = $('#r_value').val();

		if(ballsCount == "7" && contactAngle=="0" && pitchDia =="40" && ballDia=="4" && rpm=="1000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/1.jpg");
		}
		else if(ballsCount == "8" && contactAngle=="1" && pitchDia =="50" && ballDia=="5" && rpm=="3000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/2.jpg");
		}
		else if(ballsCount == "9" && contactAngle=="2" && pitchDia =="55" && ballDia=="6" && rpm=="4000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/3.jpg");
		}
		else if(ballsCount == "10" && contactAngle=="3" && pitchDia =="60" && ballDia=="7" && rpm=="5000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/4.jpg");
		}
		else if(ballsCount == "11" && contactAngle=="4" && pitchDia =="70" && ballDia=="8" && rpm=="6000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/5.jpg");
		}
		else if(ballsCount == "12" && contactAngle=="5" && pitchDia =="75" && ballDia=="9" && rpm=="7000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/6.jpg");
		}
		else if(ballsCount == "13" && contactAngle=="6" && pitchDia =="80" && ballDia=="10" && rpm=="8000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/7.jpg");
		}
		else if(ballsCount == "14" && contactAngle=="7" && pitchDia =="90" && ballDia=="11" && rpm=="9000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/8.jpg");
		}
		else if(ballsCount == "15" && contactAngle=="10" && pitchDia =="100" && ballDia=="4" && rpm=="10000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/9.jpg");
		}
		else{
			alert("invalid inputs");
		}
	});

	$(document).on("click", "#exp_detail_spectrum", function () {
		var ballsCount = $('#n_value').val();
		var contactAngle = $('#c_value').val();
		var pitchDia = $('#p_value').val();
		var ballDia = $('#b_value').val();
		var rpm = $('#r_value').val();

		if(ballsCount == "7" && contactAngle=="0" && pitchDia =="40" && ballDia=="4" && rpm=="1000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/1_detailed.jpg");
		}
		else if(ballsCount == "8" && contactAngle=="1" && pitchDia =="50" && ballDia=="5" && rpm=="3000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/2_detailed.jpg");
		}
		else if(ballsCount == "9" && contactAngle=="2" && pitchDia =="55" && ballDia=="6" && rpm=="4000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/3_detailed.jpg");
		}
		else if(ballsCount == "10" && contactAngle=="3" && pitchDia =="60" && ballDia=="7" && rpm=="5000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/4_detailed.jpg");
		}
		else if(ballsCount == "11" && contactAngle=="4" && pitchDia =="70" && ballDia=="8" && rpm=="6000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/5_detailed.jpg");
		}
		else if(ballsCount == "12" && contactAngle=="5" && pitchDia =="75" && ballDia=="9" && rpm=="7000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/6_detailed.jpg");
		}
		else if(ballsCount == "13" && contactAngle=="6" && pitchDia =="80" && ballDia=="10" && rpm=="8000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/7_detailed.jpg");
		}
		else if(ballsCount == "14" && contactAngle=="7" && pitchDia =="90" && ballDia=="11" && rpm=="9000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/8_detailed.jpg");
		}
		else if(ballsCount == "15" && contactAngle=="10" && pitchDia =="100" && ballDia=="4" && rpm=="10000") {
			$('#spectrum_modal').modal('show');
			$('#spectrum_modal .spectrum_image').attr("src", "images/9_detailed.jpg");
		}
		else{
			alert("invalid inputs");
		}
	});

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
