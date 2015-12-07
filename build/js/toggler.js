$(document).ready(function () {
  var myCartBtn = $(".cart__all"),
      cartStoryBtn = $(".cart__story");
	
  var myCart = $(".my-cart"),
      cartStory = $(".cart-story");
  var allBtns = $(".cart__toggler-group span");
  cartStory.hide();
  myCartBtn.addClass("toggler-active");
	
	allBtns.on("click touchstart", function(){
		myCartBtn.removeClass("toggler-active");
		cartStoryBtn.removeClass("toggler-active");
		$(this).addClass("toggler-active");	
	});
  
  myCartBtn.on("click touchstart", function(){
    myCart.show("fast");
    cartStory.hide();
  });
  
  cartStoryBtn.on("click touchstart", function(){
    cartStory.show("fast");
    myCart.hide();
  });
    
});