$(document).ready(function(){
	
	
	 	$(".big-red-btn").on("click touchstart", function(){		
			
			
          var productSectionContainer = $('.product__section-container');
          
          productSectionContainer.toggleClass('products__section-container--expanded');
			
		});
  
	 	$(".product__more-btn").on("click touchstart", function(){		
			
			var cardId = $(this).attr('data-id'),
			 contentId = $('.product__properties[data-id=' + cardId + ']'),
			 wrapperId = $('.product__wrapper[data-id=' + cardId + ']');
          
			var wrappers = $('.product__wrapper');
//			productsCont.removeClass("products--expanded");
			wrapperId.toggleClass("product__wrapper--expanded");
          
		});
});

// $(this).hide("slide", {direction: "right" }, "slow");
//
//$('.collapsiblock').not(this).each(function(){
//                $(this).addClass('collapsiblockCollapsed');
//                $(this.target).animate({height:'hide', opacity:'hide'}, slidespeed);
////             });
//
//$('div[title!="Суровый элемент"]')