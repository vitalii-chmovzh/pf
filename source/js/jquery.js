$(document).ready(function(){

  $('.product__more-btn').click(function(){
     var cardId = $(this).attr('data-id'),
     contentId = $('.product__description[data-id='+cardId+']');

     contentId.show();
  });
});