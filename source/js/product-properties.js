$(document).ready(function () {
	// Sizes slider
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
	
		


});