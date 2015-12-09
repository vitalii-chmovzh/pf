$(document).ready(function(){
  var filter = $(".filter");
  var filterBtn = $(".open-filter__btn");
  var filterClose = $(".filter__icon");
  var pageBody = $("#catalog-page");
  filterBtn.on("click touchstart", function(){
    filter.addClass("filter-visible");
    console.log(1);
    pageBody.addClass("overflow-hidden");
  });
  
  filterClose.on("click touchstart", function(){
    filter.removeClass("filter-visible");
    console.log(1);
    pageBody.removeClass("overflow-hidden");
  });
  
});