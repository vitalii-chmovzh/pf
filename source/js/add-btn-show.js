$(document).ready(function(){
	
		$(".item-page__wish-btn-add").hide();
	$(".sizes-group li label").on("click touchstart", function(){
		$(".item-page__wish-btn-add").show();
	});
});