$(document).ready(function () {

  $('.product__more-btn').click(function () {
  var display = false;
    var cardId = $(this).attr('data-id'),
     contentId = $('.product__properties[data-id=' + cardId + ']');
    var productHeight = $('.product');
    var height;

    if (display === true) {
      contentId.hide();
      display = false;
//      $('.product:nth-of-type(even)').removeClass("cleared");
//      $('.product:nth-of-type(odd)').addClass("cleared-margin");
      
    } else if (display === false) {
      contentId.show();
      display = true;
//      $('.product:nth-of-type(even)').addClass("cleared");
//      $('.product:nth-of-type(odd)').addClass("cleared-margin");
    }
  });
  
  
  $('.show-btn:first-of-type').click(function(){    
    var catalogSale = $('.catalog__row--sale');
    var catalogNew = $('.catalog__row--new');
    catalogNew.show("slow");
    catalogSale.hide("slow");
  });
  
  $('.show-btn:last-of-type').click(function(){    
    var catalogSale = $('.catalog__row--sale');
    var catalogNew = $('.catalog__row--new');
    catalogSale.show("slow");
    catalogNew.hide("slow");
  });
  
  $('.main-menu__heading').click(function(){
    var catalogFilter = $('.catalog-filter');
    var display = false;
    
    if (display === true) {
      catalogFilter.hide();
      display = false;
      console.log(display);
      
    } else if (display === false) {
      catalogFilter.show();
      display = true;
      console.log(display);
    }
    
  });
  
//  (function(){    
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var filter = document.querySelector(".catalog-filter");
//    var filterBtn = document.querySelector(".main-menu__heading");
//    
//    filterBtn.addEventListener("click", function(){
//      if(!filter.classList.contains("visible")){
//        filter.classList.add("visible");
//      }
//      
//     else{
//        filter.classList.remove("visible");
//      }       
//    });
//  }
//})();
  
});


(function(){
  
  
  if (window.matchMedia("(min-width: 992px)").matches) {
    var moreBtn = document.querySelector(".catalog__more-btn");
    moreBtn.innerHTML="Все товары";
  }
  
  window.addEventListener("resize", function() {
  
    if (window.matchMedia("(min-width: 992px)").matches) {
      var moreBtn = document.querySelector(".catalog__more-btn");
      moreBtn.innerHTML="Все товары";
    }
    
    else{
      var moreBtn = document.querySelector(".catalog__more-btn");
      moreBtn.innerHTML="Больше товаров";      
    }
    
  });
})();



//(function(){    
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var filter = document.querySelector(".catalog-filter");
//    var filterBtn = document.querySelector(".main-menu__heading");
//    
//    filterBtn.addEventListener("click", function(){
//      if(!filter.classList.contains("visible")){
//        filter.classList.add("visible");
//      }
//      
//     else{
//        filter.classList.remove("visible");
//      }       
//    });
//  }
//})();
 

(function(){   
  if (window.matchMedia("(max-width: 992px)").matches) {
    var mobileMenu = document.querySelector(".mobile-menu");
    var mobileMenuBtn = document.querySelector(".main-menu__open-btn");
    
    mobileMenuBtn.addEventListener("click", function(){
      if(!mobileMenu.classList.contains("visible")){
        mobileMenuBtn.classList.add("rotated");
        mobileMenu.classList.add("visible");
      }
      
     else{
        mobileMenuBtn.classList.remove("rotated");
        mobileMenu.classList.remove("visible");
      }       
    });
  }  
  if (window.matchMedia("(max-width: 992px)").matches) {
    var searchField = document.querySelector(".search-field");
    var searchCloseBtn = document.querySelector(".main-menu__close-btn")
    var searchBtn = document.querySelector(".main-menu__search-btn");
    
    searchBtn.addEventListener("click", function(){
      if(!searchField.classList.contains("visible-ib")){
        searchField.classList.add("visible-ib");
        searchCloseBtn.classList.add("visible-ib");
        mobileMenuBtn.classList.add("hidden");
      }
      
     else if(searchField.classList.contains("visible-ib")){
        searchField.classList.remove("visible-ib");
        searchCloseBtn.classList.remove("visible-ib");
        mobileMenuBtn.classList.remove("hidden");
      }       
    });
  }
	
})();


//(function(){ 
//	var productMore = document.querySelectorAll(".product__more-btn");
//	var productProperties = document.querySelectorAll(".product__properties");
//
//	
//	for(i=0; i< productMore.length; i++){
//	
//	productMore[i].addEventListener("click", function(){
//		
//	for(i=0; i< productMore.length; i++){
//		if(!productProperties[i].classList.contains("visible")){
//			productProperties[i].classList.add("visible");
//		}
//
//	 else{
//			productProperties[i].classList.remove("visible");
//		}       
//		}       
//	});
//		
//	}
//})();



(function(){ 
if (window.matchMedia("(min-width: 992px)").matches) {
		window.onscroll = function menuFixing() {
			var jsFixMenu = document.querySelector(".page-header");

			if (window.pageYOffset > 300) {
				jsFixMenu.classList.add("fixed");
			} else if (window.pageYOffset < 300) {
				if (jsFixMenu.classList.contains("fixed")) {
					jsFixMenu.classList.remove("fixed");
				}
			}
		}
	}
})();
//  
//  var sliderBtn = document.querySelectorAll(".descriprion__more-btn");
//  var sliderBg = document.querySelectorAll(".description");
//  
//  sliderBtn.addEventListener("click", function(){
//    if(!sliderBg.classList.contains("red-bg")){
//      sliderBg.classList.add("red-bg");
//    }
//  });

  
//  var catalogCategoryNew = document.querySelectorAll(".new");
//  var catalogCategorySale = document.querySelectorAll(".sale");
//  var catalogNew = document.querySelector(".catalog__row--new");
//  var catalogSale = document.querySelector(".catalog__row--sale");
//  
//  catalogCategoryNew.addEventListener("click", function(){
//    
//      if(!catalogNew.classList.contains("visible")){
//        catalogNew.classList.add("visible");
//        catalogSale.classList.remove("visible");
//        catalogSale.classList.add("hidden");
//      }
//  });
//  
//  catalogCategorySale.addEventListener("click", function(){
//    
//      if(!catalogSale.classList.contains("visible")){
//        catalogSale.classList.add("visible");
//        catalogNew.classList.remove("visible");
//        catalogNew.classList.add("hidden");
//      }
//  });
  
//  
//  var sliderBtn = document.querySelectorAll(".description");
//  var description =document.querySelector("description");
//  
//  sliderBtn.addEventListener("click", function(){
//    
//  });
  
//  var catalogArrow = document.querySelectorAll(".catalog-filter__list . arrow-right");
//  var thisCat = this.document.querySelector(".dropdown-category");
//  
//  for(i=0; i < catalogArrow.length; i++){
//    catalogArrow[i].addEventListener("click", function(){
//      if(!thisCat.classList.contains("visible")){
//        thisCat.classList.add("visible");
//      }      
//      else{
//        thisCat.classList.remove("visible");
//      }
//    });
//  }
  
  
  
  
//  
  

(function(){ 
  if (window.matchMedia("(max-width: 992px)").matches) {
    var leftBtn = document.querySelector(".page-footer .arrow-left");
    var partnersList = document.querySelector(".js-list");
    var partnersListMd = document.querySelector(".js-list");
    var partnersListBig = document.querySelector(".js-list");
    var position = 109;
    var positionMd = 117;
    var positionBig = 106;
    var left = 0;

    leftBtn.addEventListener("click", function () {

      if (window.matchMedia("(max-width: 480px)").matches) {
        partnersList.style.left = (left - position) + "px";
        left = parseInt(partnersList.style.left.replace('px'), 10);
        console.log(left);

        if (left < -545) {
          left = 0;
          partnersList.style.left = left;
        }
      }

      
      if (window.matchMedia("(max-width: 768px)").matches) {
        
        partnersListMd.style.left = (left - positionMd) + "px";
        left = parseInt(partnersListMd.style.left.replace('px'), 10);
        console.log(left);

        if (left < -468) {
          left = 0;
          partnersListMd.style.left = left;
        }
      }      

      if (window.matchMedia("(max-width: 992px)").matches) {
        partnersListBig.style.left = (left - positionBig) + "px";
        left = parseInt(partnersListBig.style.left.replace('px'), 10);
        console.log(left);

        if (left < -106) {
          left = 0;
          partnersListBig.style.left = left;
        }
      }
    });
  }
})();
  
//  
//
// 109px