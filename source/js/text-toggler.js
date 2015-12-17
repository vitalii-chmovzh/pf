$(document).ready(function(){
	$('.text__recomendations a').on("click touchstart", function(){
		var dataId = $(this).attr('data-id'),
		 contentId = $('.about-section[data-id=' + dataId + ']'),
		 allId = $('.about-section');
		allId.hide();
		contentId.show("fast");
		return false;
	});
});