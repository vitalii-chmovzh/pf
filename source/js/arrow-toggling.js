$(document).ready(function(){

	$(".sort-actions__price").on("click", function(){
		$(".arrow-up").toggleClass("arrow-down-active");
		console.log(1);
	});


  var noveltyBtn = $(".sort-actions__novelty"),
      priceBtn = $(".sort-actions__price"),
	  allBtns = $(".sort-actions__row span");

  noveltyBtn.addClass("toggler-active");

	allBtns.on("click", function(){
		allBtns.removeClass("toggler-active");
		$(this).addClass("toggler-active");
	});

	noveltyBtn.on("click", function(){
		$(".arrow-up").removeClass("arrow-down-active");
	});
});

