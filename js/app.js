$(document).ready(function(){

    $('.slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,
        appendDots:'.slider_dots',
        dotsClass:'dots'
    });


   $('#download').click(function() { 
       $('.div').toggleClass("para");
   });

   $('#show_nav').click(function(){
      $('.mob_menu').css('transform', 'translateY(0%)')
   });

   $('#hide_nav').click(function(){
    $('.mob_menu').css('transform', 'translateY(-100%)')
 });

 $('header,section').click(function(){
    $('.mob_menu').css('transform', 'translateY(-100%)')
 });

});