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

 	/*****************************/
	/*** Sizes slider vertical ***/
	/*****************************/

	var slideDown = $('.product-properties').find('.arrow-bottom'),
		slideUp = $('.product-properties').find('.arrow-top'),
		bool = false;

	slideDown.click(function(){
		$this = $(this);

		if(bool)
			return;
		bool = true;

		var block = $this.parent().find('.product-properties__sizes-list'),
			elementLi = block.find('li');
			step = (elementLi.height() + parseInt(elementLi.css('margin-bottom')))*2,
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
			elementLi = block.find('li');
			step = (elementLi.height() + parseInt(elementLi.css('margin-bottom')))*2,
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
	

	/***************************************/
	/*** Sizes slider vertical item page ***/
	/***************************************/

	var itemSlideDown = $('.item-page__sizes').find('.arrow-bottom'),
		itemSlideUp = $('.item-page__sizes').find('.arrow-top');

	itemSlideDown.click(function(){
		var w = $(window).width();

		$this = $(this);

		if(bool)
			return;
		bool = true;

		var block = $this.parent().find('.sizes-group'),
			elementLi = block.find('li'),
			topValue = parseInt(block.css("top")),
			prev =  $this.parent().find('.arrow-top'),
			blockHeight = block.height();

		var step = (elementLi.height() + parseInt(elementLi.css('margin-bottom')))*2;
		if (w <= 970){
			step = (elementLi.height() + parseInt(elementLi.css('margin-bottom')));
		}
				

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

	itemSlideUp.click(function(){
		var w = $(window).width();

		$this = $(this);

		if(bool)
			return;
		bool = true;

		var block = $this.parent().find('.sizes-group'),
			elementLi = block.find('li'),
			topValue = parseInt(block.css("top")),
			next =  $this.parent().find('.arrow-bottom'),
			blockHeight = block.height();	

		var step = (elementLi.height() + parseInt(elementLi.css('margin-bottom')))*2;
		if (w <= 970){
			step = (elementLi.height() + parseInt(elementLi.css('margin-bottom')));
		}
			

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

	/*******************************/
	/*** Sizes slider horizontal ***/
	/*******************************/

	var next = $('.product-properties').find('.arrow-right'),
		prev = $('.product-properties').find('.arrow-left'),
		itemWidth = 57,
		stepHorizontal = 236,
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


			console.log();
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