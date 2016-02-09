$(document).ready(function(){

  var noveltyBtn = $(".sort-actions__novelty"),
      priceBtn = $(".sort-actions__price"),
	  allBtns = $(".sort-actions__row a");

  noveltyBtn.addClass("toggler-active");

	priceBtn.on("click", function(){
		if($(this).hasClass("toggler-active")){
			$(".arrow-up").toggleClass("arrow-down-active");
		}
	});

	allBtns.on("click", function(){
		allBtns.removeClass("toggler-active");
		$(this).addClass("toggler-active");
	});

});

