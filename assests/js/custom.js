(function($) {
'use strict';
var hunter = $(window);
    /*-- jqury video popup -- */
    jQuery("a.bla-1").YouTubePopUp();
    /*-- jqury video popup -- */
    jQuery("a.video_2").YouTubePopUp();
    /*--------------------------
	counter active
	---------------------------- */
    $('.count_number').counterUp({
	  delay: 10,
	  time: 3000
	})
    /*--------------------------
	 galary active
	---------------------------- */
    $('#work').imagesLoaded( function() {
    $(".galary_item").isotope({
        itemSelector: '.singal_item',
        layoutMode: 'fitRows',
    });
    // Add isotope click function
    $('.portfolio-filter li').on('click', function(){
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".galary_item").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: 1,
            }
        });
        return false;
    });
    })
    /*--------------------------
	 fast food slide left active
	---------------------------- */
    $('.testmonial_active').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoplay:false,
	mouseDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
    })
    /*--------------------------
	 brand slide active
	---------------------------- */
    $('.brand_slide_active').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoplay:true,
	mouseDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
    })
    /*--------------------------
	acroll to top active
	---------------------------- */
	$("#scroll_top").on('click', function(){
		$("html,body").animate({
			scrollTop:0
		}, 2000)
    });
    /*--------------------------
	 scroll spy active
	---------------------------- */
  	$('body').scrollspy({target: ".navbar", offset: 100});   
  	$("#scroll_spy_nav li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 890, function(){
        window.location.hash = hash;
      });
    }
    });
    /*--------------------------
	 preloader js active
	---------------------------- */
	hunter.on("load", function() {
        $(".loader").addClass('out');
    });   
    
})(jQuery);


var count=0;
$(document).ready(function(){				
    $(window).scroll(function(){
    setTimeout("appendContent()", 1000);                
    });
});
var count = 0; 
var appendContent=function(){               
    if(count < 1) {
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/shoping.jpg);'>      </div><h3 class='aDemo__title'>zərgərlik onlayn mağaza</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/otos.png);'>         </div><h3 class='aDemo__title'>otos avtomobil saytı</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/brendfoni.png);'>    </div><h3 class='aDemo__title'>brendfoni onlayn mağaza</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/postex.jpeg);'>      </div><h3 class='aDemo__title'>postex sürətli poçt xidməti</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/dubrar.png);'>       </div><h3 class='aDemo__title'>dubrar su</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/bvblogic.png);'>     </div><h3 class='aDemo__title'>bvblogic</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/tourismboard.png);'> </div><h3 class='aDemo__title'>tourismboard turizim</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/hostimul.png);'>     </div><h3 class='aDemo__title'>hostimul hosting fiziki serverlər</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/tabloshop.png);'>     </div><h3 class='aDemo__title'>tabloshop az</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/theatre.png);'>     </div><h3 class='aDemo__title'>skhidopera opera saytı</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/unimetal.png);'>     </div><h3 class='aDemo__title'>Unimetal metal məmulatları</h3></a></div>");						
        $('#loadmore').append("<div class='col-md-6 demo__col'><a class='aDemo' ><div class='aDemo__page boxShadow' style='background-image: url(assets/img/glogistics.png);'>     </div><h3 class='aDemo__title'>grand logistika</h3></a></div>");					
        count++;
    }
    
};	