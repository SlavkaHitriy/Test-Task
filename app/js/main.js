$(function(){

   $('.burger').on('click', function(){
      $('.header__menu').slideToggle();
      $(this).toggleClass('active');
   })

})