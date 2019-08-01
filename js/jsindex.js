$(document).ready(function(){ 		 
    $(window).scroll(function(){
        if($(this).scrollTop() >= 240 )
        {
             $("#box1 .colorLayer").animate({left:"0px"},300);
             $("#box1 .colorLayer").delay(400).animate({left:"450px"},300);
             $("#box1 .colorLayer").delay(400).animate({width:"0px"},300);
             $("#box1 .title").animate({left:"0px"});

    
             $("#box2 .colorLayer").delay(300).animate({left:"0px"},300);
             $("#box2 .colorLayer").delay(400).animate({left:"450px"},300);
             $("#box2 .colorLayer").delay(400).animate({width:"0px"},300);
             $("#box2 .title").delay(300).animate({left:"0px"});

             $("#box3 .colorLayer3").delay(300).animate({left:"0px"},300);
             $("#box3 .colorLayer3").delay(400).animate({left:"450px"},300);
             $("#box3 .colorLayer3").delay(400).animate({width:"0px"},300);
             $("#box3 .title3").delay(300).animate({left:"0px"});

             $("#box4 .colorLayer4").delay(300).animate({left:"0px"},300);
             $("#box4 .colorLayer4").delay(400).animate({left:"450px"},300);
             $("#box4 .colorLayer4").delay(400).animate({width:"0px"},300);
             $("#box4 .title4").delay(300).animate({left:"0px"});

             $("#box5 .colorLayer5").delay(300).animate({left:"0px"},300);
             $("#box5 .colorLayer5").delay(400).animate({left:"450px"},300);
             $("#box5 .colorLayer5").delay(400).animate({width:"0px"},300);
             $("#box5 .title5").delay(300).animate({left:"0px"});

             $("#box6 .colorLayer6").delay(300).animate({left:"0px"},300);
             $("#box6 .colorLayer6").delay(400).animate({left:"650px"},300);
             $("#box6 .colorLayer6").delay(400).animate({width:"0px"},300);
             $("#box6 .title6").delay(300).animate({left:"0px"});

             $(".konten1").addClass('key-right1');
             $(".h1sa").addClass('key-right');
             $(".bg1").addClass('bg1-nimate');
        } 
    });
});

$(document).ready(function(){
		  $('.int-art1').show();
		  
		  $('.img-fix').click(function(){
		  	    $('.fixed-a a').toggleClass('itshide');
		  		$('.main').toggleClass('itsok');
		  		$('.fixed-bar').toggleClass('itschange');
		  });


		  $('.tech-tt h4').mouseover(function(){
		  	   	$('.arrow').css({left:'30%'});
		  		$('.arrow h3').addClass('red');
		  		$('.arrow-up a').addClass('red');
		  });

		  $('.tech-tt h4').mouseout(function(){
		  		$('.arrow').css({left:'36%'});
		  		$('.arrow h3').removeClass('red');
		  		$('.arrow-up a').removeClass('red');
		  });

		  $('.sm1').hover(function(){
		  		$('.subm2, .subm3').hide();
		  		$('.subm1').show();
		  });

		   $('.sm2').hover(function(){
		  		$('.subm1, .subm3').hide();
		  		$('.subm2').show();
		  });

		    $('.sm3').hover(function(){
		  		$('.subm1, .subm2').hide();
		  		$('.subm3').show();
		  });

		  $('.aaz, .aax').show();
			$('.btn1').hover(function(){
				$('.menu-s').show();
				$('.menu-s1, .menu-s2, .menu-s3').hide();
			});
			$('.btn2').hover(function(){
				$('.menu-s, .menu-s2, .menu-s3').hide();
				$('.menu-s1').show();
			});
			$('.btn3').hover(function(){
				$('.menu-s,.menu-s3,.menu-s1').hide();
				$('.menu-s2').show();
			});
			$('.btn4').hover(function(){
				$('.menu-s, .menu-s1, .menu-s2').hide();
				$('.menu-s3').show();
			});
			
			$('.first').click(function(){
				$('.int-art1').show();
				$('.int-art2,.int-art3, .amd-art').hide();
				$(this).addClass('ac-ae-on');
				$('.second, .third').removeClass('ac-ae-on');
			});
			$('.second').click(function(){
				$('.int-art1,.int-art3, .amd-art').hide();
				$('.int-art2').show();
				$(this).addClass('ac-ae-on');
				$('.first, .third').removeClass('ac-ae-on');
			});
			$('.third').click(function(){
				$('.int-art1,.int-art2, .amd-art').hide();
				$('.int-art3').show();
				$(this).addClass('ac-ae-on');
				$('.first, .second').removeClass('ac-ae-on');
			});
			$('.menu-rev1').hover(function(){
				$('.aax, .aaz').show();
				$('.aac, .aav, .aab, .aan').hide();
			});

			$('.menu-rev2').hover(function(){
				$('.aac, .aav').show();
				$('.aax, .aaz, .aab, .aan').hide();
			});

			$('.menu-rev3').hover(function(){
				$('.aab, .aan').show();
				$('.aac, .aav, .aax, .aaz ').hide();
			});

			$('.over-h').hover(function(){
				$('.over-h h3').addClass('h3-over');
			});

		});

