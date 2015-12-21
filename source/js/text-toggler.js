$(document).ready(function(){
	$(".text__toggler").on("click", function(){
        var dataId = $(this).attr('data-id'),
            contentId = $('.about-section[data-id=' + dataId + ']'),
            allId = $('.about-section'),
            togglers = $(".text__toggler");

        togglers.not($(this)).removeClass("active");
        allId.not(contentId).hide();

        $(this).toggleClass("active");
        contentId.toggle();

	});
});