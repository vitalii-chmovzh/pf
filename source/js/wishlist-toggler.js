$(document).ready(function () {
  var firstBtn = $(".wishlist__all"),
      secondBtn = $(".wishlist__present");
	var allBtns = $(".wishlist__toggler-group span");
  
  firstBtn.addClass("toggler-active");
  
	allBtns.on("click touchstart", function(){
		allBtns.removeClass("toggler-active");
		$(this).addClass("toggler-active");
	});
});