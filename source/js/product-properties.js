$(document).ready(function () {

	var saleRow = $("products-sale"),
		productsCont = $('.product__wrapper'),
		productsProp = $('.product-properties'),
		buttons = $(".product__more-btn"),
		sizesWrapper = $('.product-properties__sizes-list');
	var productImage = $(".product__image");
  
  	saleRow.hide();

	productImage.on('click', function(e){
			
		var cardId = $(this).attr('data-id'),
		 contentId = $('.product__properties[data-id=' + cardId + ']'),
		 wrapperId = $('.product__wrapper[data-id=' + cardId + ']'),
		 propId = $('.product-properties[data-id=' + cardId + ']'),
		 btnId = $('.product__more-btn[data-id=' + cardId + ']'),
		expandedBtnId=$('.product__more-btn--expanded');      
		var wrappers = $('.product__wrapper');
			$(this).find(expandedBtnId).removeClass("hidden");
		
		if(!wrapperId.hasClass("product__wrapper--expanded")){
			e.preventDefault();
			$(this).find(expandedBtnId).addClass("hidden");
		}
		productsCont.not(wrapperId).removeClass("product__wrapper--expanded");
		productsProp.not(propId).removeClass("visible");
		buttons.not($(this)).removeClass("button-right");
		wrapperId.addClass("product__wrapper--expanded");
		propId.addClass("visible");
        btnId.addClass("button-right");
	});
 	buttons.on("click", function(){		
		var cardId = $(this).attr('data-id'),
		 contentId = $('.product__properties[data-id=' + cardId + ']'),
		 wrapperId = $('.product__wrapper[data-id=' + cardId + ']'),
		 propId = $('.product-properties[data-id=' + cardId + ']'),
		 imageId = $('.product__image[data-id=' + cardId + ']'),
		 expandedBtnId=$('.product__more-btn--expanded');    

			expandedBtnId.removeClass("hidden");
      
		var wrappers = $('.product__wrapper');
		
		productsCont.not(wrapperId).removeClass("product__wrapper--expanded");
		productsProp.not(propId).removeClass("visible");
		buttons.not($(this)).removeClass("button-right");

		wrapperId.toggleClass("product__wrapper--expanded");
		propId.toggleClass("visible");
        $(this).toggleClass("button-right");
	});

 	/*****************************/
	/**** Sizes Slider ***********/
	/*****************************/

	var SizesSlider, sizesSlider, SizesSliderMain, SizesSliderItemPage, sizesSliderMain, sizesSliderItemPage;

	SizesSlider = function(){
		self = this;
		this.SLIDE_SPEED = 300;
		this.ROWS_QUANTITY = 2;
		this.STEP_HORIZONTAL = 236;
		this.ITEM_WIDTH = 57;
		this.flag = false;
		this.sizesList = $('.product-properties__sizes-list');
		this.arrowDown = $('.product-properties .arrow-bottom');
		this.arrowUp = $('.product-properties .arrow-top');
		this.arrowLeft = $('.product-properties .arrow-left');
		this.arrowRight = $('.product-properties .arrow-right');
		this.sizesListSelector = '.product-properties__sizes-list';

		this.findParentBlock = function(el){
			var id, parentBlock;
			id = el.data('id');
			parentBlock = $('.product-properties[data-id="' + id + '"]');
			return parentBlock;
		};

		this.countVerticalStep = function(el){
			return (el.height() + parseInt(el.css('margin-bottom'))) * this.ROWS_QUANTITY;
		};

		this.slideDown = function(el){
			var parentBlock, sizesList, sizesListItem, step, topValue, nextBtn, prevBtn, blockHeight;

			parentBlock = this.findParentBlock(el);
			sizesList = parentBlock.find(this.sizesListSelector);
			sizesListItem = sizesList.find('li');
			step = this.countVerticalStep(sizesListItem);
			topValue = parseInt(sizesList.css("top"));
			blockHeight = sizesList.height();
			prevBtn = parentBlock.find('.arrow-top');
			nextBtn = parentBlock.find('.arrow-bottom');

			if(self.flag) return;
			self.flag = true;

			if(topValue > -(blockHeight - step)){
				topValue -= step;
			}

			if(topValue <= -(blockHeight - step)){
				nextBtn.addClass('disabled');
			} else {
				prevBtn.removeClass('disabled');
			}

			sizesList.css('top', topValue + 'px');
			prevBtn.removeClass('disabled');

			setTimeout(function(){
				self.flag = false;
			}, self.SLIDE_SPEED);
		};

		this.slideUp = function(el){
			var parentBlock, sizesList, sizesListItem, step, topValue, prevBtn, nextBtn;

			parentBlock = this.findParentBlock(el);
			sizesList = parentBlock.find(this.sizesListSelector);
			sizesListItem = sizesList.find('li');
			step = this.countVerticalStep(sizesListItem);
			topValue = parseInt(sizesList.css("top"));
			nextBtn =  parentBlock.find('.arrow-bottom');
			prevBtn =  parentBlock.find('.arrow-top');

			if(self.flag) return;
			self.flag = true;

			if(topValue < 0){
				topValue += step;
			}
			if(topValue >= 0){
				prevBtn.addClass('disabled');
			}
			sizesList.css('top', topValue + 'px');
			nextBtn.removeClass('disabled');

			setTimeout(function(){
				self.flag = false;
			}, self.SLIDE_SPEED);
		};

		this.slideLeft = function(el){
			var parentBlock, sizesList, sizesListItem, leftValue, prevBtn, nextBtn,  blockWidth;

			parentBlock = this.findParentBlock(el);
			sizesList = parentBlock.find(this.sizesListSelector);
			sizesListItem = sizesList.find('li');
			nextBtn = parentBlock.find('.arrow-right');
			prevBtn = parentBlock.find('.arrow-left');
			blockWidth = sizesListItem.length * this.ITEM_WIDTH;
			leftValue = parseInt(sizesList.css('left'));

			if(self.flag) return;
			self.flag = true;

			if (leftValue > -(blockWidth - this.STEP_HORIZONTAL)) {
				leftValue -= this.STEP_HORIZONTAL;
			}

			if (leftValue <= -(blockWidth - this.STEP_HORIZONTAL)) {
				nextBtn.addClass('disabled');
			}

			sizesList.css('left', leftValue + 'px');
			prevBtn.removeClass('disabled');

			setTimeout(function(){
				self.flag = false;
			}, self.SLIDE_SPEED);
		};

		this.slideRight = function(el){
			var parentBlock, sizesList, sizesListItem, leftValue, prevBtn, nextBtn,  blockWidth;

			parentBlock = this.findParentBlock(el);
			sizesList = parentBlock.find(this.sizesListSelector);
			sizesListItem = sizesList.find('li');
			nextBtn = parentBlock.find('.arrow-right');
			prevBtn = parentBlock.find('.arrow-left');
			blockWidth = sizesListItem.length * this.ITEM_WIDTH;
			leftValue = parseInt(sizesList.css('left'));

			if(self.flag) return;
			self.flag = true;

			if (leftValue < 0) {
				leftValue += this.STEP_HORIZONTAL;
			}

			if (leftValue >= 0) {
				prevBtn.addClass('disabled');
			}

			nextBtn.removeClass('disabled');
			sizesList.css('left', leftValue + 'px');

			setTimeout(function(){
				self.flag = false;
			}, self.SLIDE_SPEED);
		};
	};

	sizesSliderMain = new SizesSlider();
	sizesSliderItemPage = new SizesSlider();

	sizesSliderItemPage.sizesList = $('.sizes-group');
	sizesSliderItemPage.arrowUp = $('.item-page__sizes .arrow-top');
	sizesSliderItemPage.arrowDown = $('.item-page__sizes .arrow-bottom');
	sizesSliderItemPage.sizesListSelector = '.sizes-group';
	sizesSliderItemPage.maxWidth = window.matchMedia("(min-width:968px)").matches;
	sizesSliderItemPage.findParentBlock = function(el){
		var id, parentBlock;
		id = el.data('id');
		parentBlock = $('.item-page__sizes[data-id="' + id + '"]');
		return parentBlock;
	};
	sizesSliderItemPage.countVerticalStep = function(el){
		var step;

		if(self.maxWidth){
			step = (el.height() + parseInt(el.css('margin-bottom'))) * self.ROWS_QUANTITY;
		} else {
			step = (el.height() + parseInt(el.css('margin-bottom')));
		}

		return step;
	};

	/*** Click/swipe action ***/
	sizesSliderMain.arrowDown.on('click', function(){
		sizesSliderMain.slideDown($(this));
	});

	sizesSliderMain.arrowUp.on('click', function(){
		sizesSliderMain.slideUp($(this));
	});

	sizesSliderMain.arrowRight.on('click', function(){
		sizesSliderMain.slideLeft($(this));
	});

	sizesSliderMain.arrowLeft.on('click', function(){
		sizesSliderMain.slideRight($(this));
	});

	sizesSliderMain.sizesList.hammer({
		recognizers: [
			[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL }],
		]}).bind("swipeup", function(){
		sizesSliderMain.slideDown($(this));
	});

	sizesSliderMain.sizesList.hammer({
		recognizers: [
			[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL }],
		]}).bind("swipedown", function(){
		sizesSliderMain.slideUp($(this));
	});

	sizesSliderMain.sizesList.hammer().bind("swipeleft", function(){
		sizesSliderMain.slideLeft($(this));
	});

	sizesSliderMain.sizesList.hammer().bind("swiperight", function(){
		sizesSliderMain.slideRight($(this));
	});

	/***************************************/
	/*** Sizes slider vertical item page ***/
	/***************************************/

	sizesSliderItemPage.arrowDown.click(function(){
		sizesSliderItemPage.slideDown($(this));
	});

	sizesSliderItemPage.arrowUp.click(function(){
		sizesSliderItemPage.slideUp($(this));
	});

	sizesSliderItemPage.sizesList.hammer({
		recognizers: [
			[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL}],
		]}).bind("swipeup", function(){
		sizesSliderItemPage.slideDown($(this));
	});

	sizesSliderItemPage.sizesList.hammer({
		recognizers: [
			[Hammer.Swipe,{ direction: Hammer.DIRECTION_ALL}],
		]}).bind("swipedown", function(){
		sizesSliderItemPage.slideUp($(this));
	});
});