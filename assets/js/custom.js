$(document).ready(function(){

    $(".h-menu").clone().prependTo(".mobile-menu");
    $(".menutrigger").on('click', function(){
    $(this).toggleClass("active");
    $(".mobile-menu").stop(true,false,true).slideToggle();
    $('body').toggleClass('overflow-hidden');
    });

    $('select').niceSelect();

   
    $(".slider").owlCarousel({
        items:1,
        nav:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
            },
            576:{
                nav:true,
                
            }
        }
        
    });
    $('body').prepend('<div class="go-top"><i class="fa-solid fa-angle-up"></i></div>')
     $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
     });
     $(".go-top").on('click', function(){
        $("body, html").animate({scrollTop:0}, 999);
     });

    
});






