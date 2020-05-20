$(function(){
    var x = ('.info__item');
    
   $(x).on('click', function(){
       $(this).toggleClass('active');
       
   });

   $('.slider__virtical').slick({
       slidesToShow:3,
    //    slidesToScroll:3,
       vertical:true,
       verticalSwiping:true,
       
    //    rows:2
    
   });   

   $('.slider__team').slick({
   arrows:false,
   slidesToShow:3,
   speed:1000,
   autoplay: true,
   autoplaySpeed:2000, 
   centerMode:true,
   adaptiveHeight:true,
// variableWidth:true,
   easing:'easeInSine',
   asNavFor:'.slider__about',
//    infinite:false
   
});   
$('.slider__about').slick({
    arrows:false,
    asNavFor:'.slider__team',
    fade:true,
    // infinite:false
});
   
});


