$(document).ready(function(){

document.body.style.cursor = 'none';
  //
	// var button = document.getElementById("count"),
	// count=0;
	// button.onmouseenter = function(){
	// 	count+=1;
	// 	button.innerHTML = "Cursors Found  /15: " + count;
	// }


	// if (n > 15) {
	// 	$('#end').click()
	// 			(function(){
	// 						document.body.style.background = "#f3f3f3 url('gif/end1.gif') center";
	// });

	var n = 0;

	$('.hover').mouseenter(function(){
		$(this).removeClass('hover');
		n = n+1;
		$('.number').html(n);
		// button.innerHTML = "Cursors Found  /15: " + n;
	});

	$('#img1').hover(
	    function() {
	        $('#btn').show();
					    document.body.style.background = "#f3f3f3 url('gif/blue.gif') repeat right top";
							$('.position').html('<img src="img/1.png" />');

			}
			,function() {
	        $(this).css("background", "none");
	    }
	);

	$('#img2').hover(
			function() {
					$('#btn2').show();
					 document.body.style.background = "#f3f3f3 url('gif/2.gif') repeat right top";
					 $('.position').html('<img src="img/2.png" />');
			}
			,function() {
					 $(this).css("background", "none");
			}
	);

	$('#img3').hover(
			function() {
					$('#btn3').show();
					document.body.style.background = "#f3f3f3 url('gif/3.gif') repeat right top";
					$('.position').html('<img src="img/hand3.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img4').hover(
			function() {
					$('#btn4').show();
					document.body.style.background = "#f3f3f3 url('gif/222.gif') repeat right top";
					$('.position').html('<img src="img/5.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img5').hover(
			function() {
					$('#btn5').show();
					document.body.style.background = "#f3f3f3 url('gif/666.gif') repeat right top";
					$('.position').html('<img src="img/hand4.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img6').hover(
			function() {
					$('#btn6').show();
					document.body.style.background = "#f3f3f3 url('gif/77.gif') repeat right top";
					$('.position').html('<img src="img/77.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img7').hover(
			function() {
					$('#btn7').show();
					document.body.style.background = "#f3f3f3 url('gif/66.gif') repeat right top";
					$('.position').html('<img src="img/222.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img8').hover(
			function() {
					$('#btn8').show();
					document.body.style.background = "#f3f3f3 url('gif/11.gif') repeat right top";
					$('.position').html('<img src="img/444.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img9').hover(
			function() {
					$('#btn9').show();
					document.body.style.background = "#f3f3f3 url('gif/movedots.gif') repeat right top";
					$('.position').html('<img src="img/66.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img10').hover(
			function() {
					$('#btn10').show();
					document.body.style.background = "#f3f3f3 url('gif/12.gif') repeat right top";
					$('.position').html('<img src="img/hand.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img11').hover(
			function() {
					$('#btn11').show();
					document.body.style.background = "#f3f3f3 url('gif/345.gif') repeat right top";
					$('.position').html('<img src="img/hand2.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img12').hover(
			function() {
					$('#btn12').show();
					document.body.style.background = "#f3f3f3 url('gif/red.gif') repeat right top";
					$('.position').html('<img src="img/3.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img13').hover(
			function() {
					$('#btn13').show();
					document.body.style.background = "#f3f3f3 url('gif/13.gif') repeat right top";
					$('.position').html('<img src="img/11.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img14').hover(
			function() {
					$('#btn14').show();
					document.body.style.background = "#f3f3f3 url('gif/15.gif') repeat right top";
					$('.position').html('<img src="img/16.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }
 );

	$('#img15').hover(
			function() {
					$('#btn15').show();
					document.body.style.background = "#f3f3f3 url('gif/14.gif') repeat right top";
					$('.position').html('<img src="img/666.png" />');
		 }
		 ,function() {
					$(this).css("background", "none");
		 }

 );

 	$('body').mousemove(function(e){
 		//$('.position').html('Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
 		// try switching the 'top' and 'left' values
 		$('.position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
 	});

	// $(document).ready(function(){
	// 	$('body').mousemove(function(e){
	// 		$('.position').html('Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
	// 		// try switching the 'top' and 'left' values
	// 		$('.position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
	// 	});
	// });

	// try uncommenting (deleting the // before a line) to see its effects

	//$('.item').addClass('shrink');

	//$('body').click(function() {
	//	$(this).toggleClass('colorful');
	//});

	/* round corners on click */

	// $('body').click(function() {
	// 	$('.item').toggleClass('round');
	// });

	/* hover to rotate */

	// $('.item').hover(function() {
	// 	$(this).toggleClass('rotate');
	// });

	/* clone an element */

	// $('.item').click(function() {
	// 	var item = $(this).clone();
	// 	$('#grid').append(item);
	// });

	/* remove an element */

	// $('.item').click(function() {
	// 	$(this).remove();
	// });

	/* random backgrounds over time */

	// setInterval(function(){
	// 	$redValue = Math.floor(Math.random()*255);
	// 	$greenValue = Math.floor(Math.random()*255);
	// 	$blueValue = Math.floor(Math.random()*255);
	// 	$('.item').css(
	// 		'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);
	// },500);

});
