$(document).ready(function(){



	var button = document.getElementById("count"),
	count=0;
	button.onmouseenter = function(){
		count+=1;
		button.innerHTML = "Cursors Found /15: " + count;
	}



	$('#img1').hover(
	    function() {
	        $('#btn').show();
					    document.body.style.background = "#f3f3f3 url('gif/1.gif') repeat right top";
	    }
			,function() {
	        $(this).css("background", "none");
	    }
	);

	$('#img2').hover(
			function() {
					$('#btn2').show();
					 document.body.style.background = "#f3f3f3 url('gif/2.gif') repeat right top";
			}
			,function() {
					 $(this).css("background", "none");
			}
	);

	$('#img3').hover(
			function() {
					$('#btn3').show();
			}
			// ,function() {
			// 		$('#btn3').hide();
			// }
	);

	$('#img4').hover(
			function() {
					$('#btn4').show();
			}
			// ,function() {
			// 		$('#btn4').hide();
			// }
	);

	$('#img5').hover(
			function() {
					$('#btn5').show();
			}
			// ,function() {
			// 		$('#btn5').hide();
			// }
	);

	$('#img6').hover(
			function() {
					$('#btn6').show();
			}
			// ,function() {
			// 		$('#btn6').hide();
			// }
	);

	$('#img7').hover(
			function() {
					$('#btn7').show();
			}
			// ,function() {
			// 		$('#btn7').hide();
			// }
	);

	$('#img8').hover(
			function() {
					$('#btn8').show();
			}
			// ,function() {
			// 		$('#btn8').hide();
			// }
	);

	$('#img9').hover(
			function() {
					$('#btn9').show();
			}
			// ,function() {
			// 		$('#btn9').hide();
			// }
	);

	$('#img10').hover(
			function() {
					$('#btn10').show();
			}
			// ,function() {
			// 		$('#btn10').hide();
			// }
	);

	$('#img11').hover(
			function() {
					$('#btn11').show();
			}
			// ,function() {
			// 		$('#btn11').hide();
			// }
	);

	$('#img12').hover(
			function() {
					$('#btn12').show();
			}
			// ,function() {
			// 		$('#btn12').hide();
			// }
	);

	$('#img13').hover(
			function() {
					$('#btn13').show();
			}
			// ,function() {
			// 		$('#btn13').hide();
			// }
	);

	$('#img14').hover(
			function() {
					$('#btn14').show();
			}
			// ,function() {
			// 		$('#btn14').hide();
			// }
	);

	$('#img15').hover(
			function() {
					$('#btn15').show();
			}
			// ,function() {
			// 		$('#btn15').hide();
			// }
	);

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
