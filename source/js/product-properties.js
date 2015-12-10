$(document).ready(function () {

	var saleRow = $("products-sale"),
		productsCont = $('.product__wrapper'),
		productsProp = $('.product-properties'),
		buttons = $(".product__more-btn");

  
  	saleRow.hide();
	
 	$(".big-red-btn").on("click touchstart", function(){		
		
      var productSectionContainer = $('.product__section-container');
      
      productSectionContainer.toggleClass('products__section-container--expanded');
		
	});

 	buttons.on("click touchstart", function(){		
		var cardId = $(this).attr('data-id'),
		 contentId = $('.product__properties[data-id=' + cardId + ']'),
		 wrapperId = $('.product__wrapper[data-id=' + cardId + ']'),
		 propId = $('.product-properties[data-id=' + cardId + ']');
      
		var wrappers = $('.product__wrapper');

		productsCont.not(wrapperId).removeClass("product__wrapper--expanded");
		productsProp.not(propId).removeClass("visible");
		buttons.not($(this)).removeClass("button-right");

		wrapperId.toggleClass("product__wrapper--expanded");
		propId.toggleClass("visible");
        $(this).toggleClass("button-right");
	});


	/*** Sizes slider vertical ***/

	var slideDown = $('.arrow-bottom'),
		step = 108,
		topValue = 0,
		w = $(window).width();
    
    if (w <= 1199){
    	step = 102;
    }

	slideDown.click(function(){
		$this = $(this);
		var block = $this.parent().find('.product-properties__sizes-list'), 
			blockHeight = block.height();	

		if(topValue > -(blockHeight - step)){
			topValue -= step;		
		} else {
			topValue = 0;
		}

		if(topValue <= -(blockHeight - step)){
			$this.addClass('rotate-arrow');
		} else {
			$this.removeClass('rotate-arrow');
		}
				
		block.css('top', topValue + 'px');
	});	
	
	/*** Sizes slider horizontal ***/

	var next = $('.product-properties').find('.arrow-right'),
		prev = $('.product-properties').find('.arrow-left'),
		itemWidth = 52,
		stepHorizontal = 216,
		leftValue = 0;

		next.click(function(){
			$this = $(this);
			var items = $this.parent().find('.product-properties__sizes-list li'),
				prev = $this.parent().find('.arrow-left'),
				blockWidth = items.length * itemWidth,
				sizes = $this.parent().find('.product-properties__sizes-list');		

			if (leftValue > -(blockWidth - stepHorizontal)) {
				leftValue -= stepHorizontal;
			}

			if (leftValue <= -(blockWidth - stepHorizontal)) {
				$this.addClass('disabled');
			}

			sizes.css('left', leftValue + 'px');
			prev.removeClass('disabled');
		});

		prev.click(function(){
			$this = $(this);
			var sizes = $this.parent().find('.product-properties__sizes-list'),
				next = $this.parent().find('.arrow-right'),
				left = 	parseInt(sizes.css('left'));

			if (left < 0) {
				leftValue += stepHorizontal;
			}
			if (left >= -stepHorizontal) {
				$this.addClass('disabled');
			}

			next.removeClass('disabled');

			sizes.css('left', leftValue + 'px');
		});
		
});