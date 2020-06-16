$(function(){
    var x = ('.info__item');
    
   $(x).on('click', function(){
       $(this).toggleClass('active');
       
   });

   $('.slider__virtical').slick({
       slidesToShow:3,
    
       vertical:true,
       verticalSwiping:true,
       responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
       ]
       
   
    
   });   

   $('.slider__team').slick({
   arrows:false,
   slidesToShow:3,
   speed:1000,
//    autoplay: true,
//    autoplaySpeed:2000, 
   centerMode:true,
   adaptiveHeight:true,
// variableWidth:true,
   easing:'easeInSine',
   asNavFor:'.slider__about',
//    infinite:false
responsive: [
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
   ]
   
});   
$('.slider__about').slick({
    arrows:false,
    asNavFor:'.slider__team',
    fade:true,
    // infinite:false
});

$(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $('header').addClass('fixed');
    }
    else{
        $('header').removeClass('fixed');
    }
    
})

$('.burger__menu').hide();

$('.icon').on('click',function(){
    $('.burger__menu').slideToggle();
    $('.icon').toggleClass('open');
    $('body').toggleClass('lock');

});

$(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $('.burger__menu').addClass('top');
    }
    else{
        $('.burger__menu').removeClass('top');
    }
    console.log($(window).scrollTop());
})


   
});


