$(document).ready(function () {
  var shoesBtn = $(".sizes__shoes-show"),
      allBtns = $(".sizes__product-type-toggler span");
  var shoesTable = $(".sizes__shoes"),
      clothesTable = $(".sizes__clothes"),
      allTables = $(".sizes__all");
      socksTable = $(".sizes__socks"); 
  var wrapper = $(".sizes");   

  clothesTable.hide();
  socksTable.hide();
  shoesBtn.addClass("toggler-active");
  
	allBtns.on("click touchstart", function(){
    $this = $(this);

    var data =  $this.data("type"), 
        currentTable = wrapper.find(".sizes__all[data-type='" + data + "']").show("fast");

		allBtns.removeClass("toggler-active");
		$this.addClass("toggler-active");

    allTables.hide();
    currentTable.show("fast");

	});
	 
});