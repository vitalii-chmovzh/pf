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
		slideUp = $('.arrow-top'),
		step = 108,
		w = $(window).width(),
		bool = false;
    
    if (w <= 1199){
    	step = 102;
    }

	slideDown.click(function(){
		$this = $(this);

		if(bool)
			return;
		bool = true;

		var block = $this.parent().find('.product-properties__sizes-list'),
			topValue = parseInt(block.css("top")),
			prev =  $this.parent().find('.arrow-top'),
			blockHeight = block.height();	

		if(topValue > -(blockHeight - step)){
			topValue -= step;		
		}

		if(topValue <= -(blockHeight - step)){
			$this.addClass('disabled');
		} else {
			prev.removeClass('disabled');
		}
				
		block.css('top', topValue + 'px');
		prev.removeClass('disabled');

		setTimeout(function(){
			bool = false;
		}, 500);
	});	

	slideUp.click(function(){
		$this = $(this);

		if(bool)
			return;
		bool = true;

		var block = $this.parent().find('.product-properties__sizes-list'),
			topValue = parseInt(block.css("top")),
			next =  $this.parent().find('.arrow-bottom'),
			blockHeight = block.height();	

		if(topValue < 0){
			topValue += step;		
		}

		if(topValue >= 0){
			$this.addClass('disabled');
		} 
				
		block.css('top', topValue + 'px');
		next.removeClass('disabled');

		setTimeout(function(){
			bool = false;
		}, 500);
	});	
	
	/*** Sizes slider horizontal ***/

	var next = $('.product-properties').find('.arrow-right'),
		prev = $('.product-properties').find('.arrow-left'),
		itemWidth = 52,
		stepHorizontal = 216,
		leftValue = 0;

		next.click(function(){
			$this = $(this);

			if(bool)
				return;
			bool = true;

			var items = $this.parent().find('.product-properties__sizes-list li'),
				prev = $this.parent().find('.arrow-left'),
				blockWidth = items.length * itemWidth,
				sizes = $this.parent().find('.product-properties__sizes-list'),
				left = 	parseInt(sizes.css('left'));

			if (left > -(blockWidth - stepHorizontal)) {
				left -= stepHorizontal;
			}

			if (left <= -(blockWidth - stepHorizontal)) {
				$this.addClass('disabled');
			}

			sizes.css('left', left + 'px');
			prev.removeClass('disabled');

			setTimeout(function(){
				bool = false;
			}, 500);
		});

		prev.click(function(){
			$this = $(this);

			if(bool)
				return;
			bool = true;

			var sizes = $this.parent().find('.product-properties__sizes-list'),
				next = $this.parent().find('.arrow-right'),
				left = 	parseInt(sizes.css('left'));

			if (left < 0) {
				left += stepHorizontal;
			}
			if (left >= 0) {
				$this.addClass('disabled');
			}

			next.removeClass('disabled');

			sizes.css('left', left + 'px');

			setTimeout(function(){
				bool = false;
			}, 500);
		});
		
});