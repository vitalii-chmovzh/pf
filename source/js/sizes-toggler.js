$(document).ready(function () {
  var shoesBtn = $(".sizes__shoes-show"),
      clothesBtn = $(".sizes__clothes-show"),
      socksBtn = $(".sizes__socks-show");
  var shoesTable = $(".sizes__shoes"),
      clothesTable = $(".sizes__clothes"),
      socksTable = $(".sizes__socks");
	var allBtns = $(".sizes__product-type-toggler span");
  
  clothesTable.hide();
  socksTable.hide();
  shoesBtn.addClass("toggler-active");
  
	allBtns.on("click touchstart", function(){
		allBtns.removeClass("toggler-active");
		$(this).addClass("toggler-active");
	});
	
  shoesBtn.on("click touchstart", function(){
    shoesTable.show("fast");
    clothesTable.hide();
    socksTable.hide();
  });
  
  clothesBtn.on("click touchstart", function(){
    clothesTable.show("fast");
    shoesTable.hide();
    socksTable.hide();
  });
  
  socksBtn.on("click touchstart", function(){
    socksTable.show("fast");
    clothesTable.hide();
    shoesTable.hide();
  });
    
});