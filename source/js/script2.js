$(document).ready(function(){
	
    var saleRow = $(".products--sale");
  
  saleRow.hide();
	
	 	$(".catalog-filter__open-btn").on("click touchstart", function(){		
			
			
          var productSectionContainer = $('.product__section-container');
          
          productSectionContainer.toggleClass('products__section-container--expanded');
			
		});
  
	 	$(".product__more-btn").on("click touchstart", function(){		
			
			var cardId = $(this).attr('data-id'),
			 contentId = $('.product__properties[data-id=' + cardId + ']'),
			 wrapperId = $('.product__wrapper[data-id=' + cardId + ']'),
			 propId = $('.product-properties[data-id=' + cardId + ']');
          
			var wrappers = $('.product__wrapper');
//			productsCont.removeClass("products--expanded");
			wrapperId.toggleClass("product__wrapper--expanded");
			propId.toggleClass("visible");
            $(this).toggleClass("button-right");
		});
  
  var catalogSale = $('.products--sale');
  var catalogNew = $('.products--new');
  $(".show-btn:first-of-type span").addClass("active--blue");
  
  
  $('.show-btn:first-of-type').on("click touchstart", function(){  
    catalogNew.show();
    $(".show-btn:last-of-type span").removeClass("active--red");
    $(".show-btn:first-of-type span").addClass("active--blue");
    catalogSale.hide();
  });
  
  $('.show-btn:last-of-type').on("click touchstart", function(){    
    catalogSale.show();
    $(".show-btn:first-of-type span").removeClass("active--blue");
    $(".show-btn:last-of-type span").addClass("active--red");
    catalogNew.hide();
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