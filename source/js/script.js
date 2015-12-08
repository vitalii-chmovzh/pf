// Map
function initMap() {
    var myLatLng = {lat: 55.73708, lng: 37.65420};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false
    });

    var image = 'img/marker.png';

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      title: 'Премьер Футбол'     
    });
}




$(document).ready(function () {
  var display = false;
  var flag = true;
  

  var sliderDescription = $(".description"); 
  var sliderBtn = $(".description__more-btn"); 
  var sliderOverflow = $(".slider__overflow"); 
  
  sliderBtn.on("click touchstart", function (e) {
    e.preventDefault();
  if (window.matchMedia("(max-width: 991px)").matches) {
    sliderDescription.addClass("after-hidden"); 
    sliderOverflow.fadeIn(100);        
   }  
    
  if (window.matchMedia("(min-width: 992px)").matches) {
    sliderDescription.addClass("after-red");     
   }
    
    setTimeout(function(){
      sliderOverflow.fadeOut();
      location.href= $(this).attr("href");
    }, 200);
  });
  


// Price range

$(function() {
    $( "#ui-slider" ).slider({
      range: true,
      min: 0,
      max: 16990,
      values: [ 100, 16990 ],
      slide: function( event, ui ) {
        $( "#min-price" ).val( ui.values[ 0 ] );
        $( "#max-price" ).val( ui.values[ 1 ] );
      }
    });
    $( "#min-price" ).val($( "#ui-slider" ).slider( "values", 0 ));
    $( "#max-price" ).val($( "#ui-slider" ).slider( "values", 1 ));
});

 // SIZES TOGGLING
  
// $('.sizes__product-type-toggler span').on("click, touchstart", function(){
//   var shoesBtn = $(".sizes__shoes-show"),
//       clothesBtn = $(".sizes__clothes-show"),
//       socksBtn = $(".sizes__socks-show");
//   var shoesTable = $(".sizes__shoes"),
//       clothesTable = $(".sizes__clothes"),
//       socksTable = $(".sizes__socks");
  
//   clothesTable.hide();
//   socksTable.hide();
  
//   shoesBtn.on("click touchstart", function(){
//     shoesTable.show("slide", "fast");
//     clothesTable.hide();
//     socksTable.hdie();
//   });
  
//   clothesBtn.on("click touchstart", function(){
//     clothesTable.show("slide", "fast");
//     shoesTable.hide();
//     socksTable.hdie();
//   });
  
//   socksBtn.on("click touchstart", function(){
//     socksTable.show("slide", "fast");
//     clothesTable.hide();
//     socksTable.hdie();
//   });
    
// });
  
  
  
  
  
  $('.catalog-filter .arrow-right').on("click touchstart", function(){
    var arrowBtnId = $(this).attr('dropdown-id'),
        dropdownId = $('.dropdown-category[dropdown-id=' + arrowBtnId + ']'),
        liActive = $('li[dropdown-id=' + arrowBtnId + ']');
    
    if (display === true) {
      dropdownId.hide("fast");
   if (window.matchMedia("(min-width: 768px) and (max-width:1199px)").matches) { 
      liActive.removeClass("light-bg");
   }
      $(this).removeClass("rotated-arrow");
      display = false;
      
    } else if (display === false) {
      dropdownId.show("fast");
   if (window.matchMedia("(min-width: 768px) and (max-width:1199px)").matches) { 
      liActive.addClass("light-bg");
   }
      $(this).addClass("rotated-arrow");
      display = true;
    }
  });
    
  var catalogSale = $('.catalog__row--sale');
  var catalogNew = $('.catalog__row--new');
  var catalogFilter = $('.catalog-filter');
  var mobileMenu = $('.mobile-menu');
  var searchBtn = $('.main-menu__search-btn');    
  var searchField = $('.search-field');
  var searchCloseBtn = $('.main-menu__close-btn');
  var menuBtn = $('.main-menu__open-btn');
  var catalogWrapper = $(".catalog__products-wrapper");
  var catalogContainer = $('.catalog__products-container');
  var products = $(".product");
  
  $(".show-btn:first-of-type span").addClass("active--blue");
  
  
  $('.show-btn:first-of-type').on("click touchstart", function(){  
    catalogNew.show("slow");
    $(".show-btn:last-of-type span").removeClass("active--red");
    $(".show-btn:first-of-type span").addClass("active--blue");
    catalogSale.hide("slow");
  });
  
  $('.show-btn:last-of-type').on("click touchstart", function(){    
    catalogSale.show("slow");
    $(".show-btn:first-of-type span").removeClass("active--blue");
    $(".show-btn:last-of-type span").addClass("active--red");
    catalogNew.hide("slow");
  });
  
  $('.main-menu__heading').on("click touchstart", function(){
    
    if(mobileMenu.hasClass("opened")){
      mobileMenu.removeClass("opened");
      menuBtn.removeClass("rotated");
//      catalogFilter.addClass("catalog-filter--opened");
//      display = true;
    }
    
    if (display === true) {
      catalogFilter.removeClass("catalog-filter--opened");
      searchCloseBtn.hide();
      
      $('body').removeClass("overflow-hidden");
      display = false;
      
    } else if (display === false) {
      catalogFilter.addClass("catalog-filter--opened");      
      $('body').addClass("overflow-hidden");
      display = true;
    }
    
  });
  
 
  menuBtn.on("click touchstart", function(){
    
    if(catalogFilter.hasClass("catalog-filter--opened")){
      catalogFilter.removeClass("catalog-filter--opened");
    }
    
    if (display === true) {
      mobileMenu.removeClass("opened");
      menuBtn.removeClass("rotated");
      $('body').removeClass("overflow-hidden");
      display = false;
      
    } else if (display === false) {
      mobileMenu.addClass("opened");
      menuBtn.addClass("rotated");
      $('body').addClass("overflow-hidden");
      display = true;
    }
  });
  

  
  window.addEventListener("resize", function() { 
    
//    
//    var page_h = $(window).height();
//    var sliderDescription = $('.slider__heading');
    
    if (window.matchMedia("(max-width: 992px)").matches) {
        $('body').removeClass("overflow-hidden");  
        searchField.hide();
//      console.log(page_h);
    }
    
    if (window.matchMedia("(min-width: 992px)").matches) {
        $('body').removeClass("overflow-hidden");  
        searchField.hide();
//      console.log(page_h);   
    
//    if(page_h < 700){
//      var descriptionMargin = (page_h - 125);
//      sliderDescription.css('margin-top', (descriptionMargin + "px"));  
//      console.log(descriptionMargin);
//    }
    }
  });
    
    searchBtn.on("click touchstart", function(e){
      e.preventDefault();
     if (window.matchMedia("(max-width: 992px)").matches) {
     if (display === false) {
        searchField.show("fast");
        searchCloseBtn.show("fast");
        menuBtn.hide();
        display = true;

       searchCloseBtn.click(function(){
          if (display === true) {
           searchField.hide("fast");
           searchCloseBtn.hide();
           display = false;
           menuBtn.show("fast");

         }

       });
      }
      }
    });
  
  $('.catalog-filter__open-btn').on("click touchstart", function(){
    
    if (flag === true) {
      catalogFilter.addClass("catalog-filter--hidden");
      catalogWrapper.addClass("catalog--expanded");
      catalogContainer.addClass("product-container--expanded");
      products.addClass("item-expanded");
      
   if (window.matchMedia("(max-width:991px)").matches) { 
      $('body').addClass("overflow-hidden");
   }
      flag = false;
      console.log(flag);
    }
    
    else if (flag === false) {
      catalogFilter.removeClass("catalog-filter--hidden");
      catalogWrapper.removeClass("catalog--expanded");
      catalogContainer.removeClass("product-container--expanded");
      products.removeClass("item-expanded");
      
      
   if (window.matchMedia("(max-width:991px)").matches) { 
      $('body').removeClass("overflow-hidden");
   }
      flag = true; 
      console.log(flag);
    } 
  });
  
/* Products quantiry */

var plus = $(".cart-product__quantity .plus-icon"),
    minus = $(".cart-product__quantity .minus-icon");

plus.on("click", function(){
  var product = $(this).parent().find("input[name='size-select']"),
      minus = $(this).parent().find(".minus-icon");
      product[0].value++;
      if(product[0].value > 1) {
          minus.removeClass("minus-icon--disabled");
      }
      
});

minus.on("click", function(){
   var product = $(this).parent().find("input[name='size-select']");
       if(product[0].value > 1) {
          product[0].value--;
          $(this).removeClass("minus-icon--disabled");
       } 
       if(product[0].value == 1) {
          $(this).addClass("minus-icon--disabled");
       }
});




//  (function(){   
  
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var searchField = document.querySelector(".search-field");
//    var searchCloseBtn = document.querySelector(".main-menu__close-btn")
//    var searchBtn = document.querySelector(".main-menu__search-btn");
//    
//    searchBtn.addEventListener("click", function(){
//      if(!searchField.classList.contains("visible-ib")){
//        searchField.classList.add("visible-ib");
//        searchCloseBtn.classList.add("visible-ib");
//        mobileMenuBtn.classList.add("hidden");
//      }
//      
//     else if(searchField.classList.contains("visible-ib")){
//        searchField.classList.remove("visible-ib");
//        searchCloseBtn.classList.remove("visible-ib");
//        mobileMenuBtn.classList.remove("hidden");
//      }       
//    });
//  }
//	
//})();
  
  
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


//(function(){
//  
//  
//  if (window.matchMedia("(min-width: 992px)").matches) {
//    var moreBtn = document.querySelector(".catalog__more-btn");
//    moreBtn.innerHTML="Все товары";
//  }
//  
//  window.addEventListener("resize", function() {
//  
//    if (window.matchMedia("(min-width: 992px)").matches) {
//      var moreBtn = document.querySelector(".catalog__more-btn");
//      moreBtn.innerHTML="Все товары";
//    }
//    
//    else{
//      var moreBtn = document.querySelector(".catalog__more-btn");
//      moreBtn.innerHTML="Больше товаров";      
//    }
//    
//  });
//})();



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
 
//
//(function(){   
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var mobileMenu = document.querySelector(".mobile-menu");
//    var mobileMenuBtn = document.querySelector(".main-menu__open-btn");
//    
//    mobileMenuBtn.addEventListener("click", function(){
//      if(!mobileMenu.classList.contains("visible")){
//        mobileMenuBtn.classList.add("rotated");
//        mobileMenu.classList.add("visible");
//      }
//      
//     else{
//        mobileMenuBtn.classList.remove("rotated");
//        mobileMenu.classList.remove("visible");
//      }       
//    });
//  }  
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var searchField = document.querySelector(".search-field");
//    var searchCloseBtn = document.querySelector(".main-menu__close-btn")
//    var searchBtn = document.querySelector(".main-menu__search-btn");
//    
//    searchBtn.addEventListener("click", function(){
//      if(!searchField.classList.contains("visible-ib")){
//        searchField.classList.add("visible-ib");
//        searchCloseBtn.classList.add("visible-ib");
//        mobileMenuBtn.classList.add("hidden");
//      }
//      
//     else if(searchField.classList.contains("visible-ib")){
//        searchField.classList.remove("visible-ib");
//        searchCloseBtn.classList.remove("visible-ib");
//        mobileMenuBtn.classList.remove("hidden");
//      }       
//    });
//  }
//	
//})();


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



//(function(){ 
//if (window.matchMedia("(min-width: 992px)").matches) {
//		window.onscroll = function menuFixing() {
//			var jsFixMenu = document.querySelector(".page-header");
//
//			if (window.pageYOffset > 300) {
//				jsFixMenu.classList.add("fixed");
//			} else if (window.pageYOffset < 300) {
//				if (jsFixMenu.classList.contains("fixed")) {
//					jsFixMenu.classList.remove("fixed");
//				}
//			}
//		}
//	}
//})();
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
//  
//
//(function(){ 
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var leftBtn = document.querySelector(".page-footer .arrow-left");
//    var partnersList = document.querySelector(".js-list");
//    var partnersListMd = document.querySelector(".js-list");
//    var partnersListBig = document.querySelector(".js-list");
//    var position = 109;
//    var positionMd = 117;
//    var positionBig = 106;
//    var left = 0;
//
//    leftBtn.addEventListener("click", function () {
//
//      if (window.matchMedia("(max-width: 480px)").matches) {
//        partnersList.style.left = (left - position) + "px";
//        left = parseInt(partnersList.style.left.replace('px'), 10);
//        console.log(left);
//
//        if (left < -545) {
//          left = 0;
//          partnersList.style.left = left;
//        }
//      }
//
//      
//      if (window.matchMedia("(max-width: 768px)").matches) {
//        
//        partnersListMd.style.left = (left - positionMd) + "px";
//        left = parseInt(partnersListMd.style.left.replace('px'), 10);
//        console.log(left);
//
//        if (left < -468) {
//          left = 0;
//          partnersListMd.style.left = left;
//        }
//      }      
//
//      if (window.matchMedia("(max-width: 992px)").matches) {
//        partnersListBig.style.left = (left - positionBig) + "px";
//        left = parseInt(partnersListBig.style.left.replace('px'), 10);
//        console.log(left);
//
//        if (left < -106) {
//          left = 0;
//          partnersListBig.style.left = left;
//        }
//      }
//    });
//  }
//})();
  
//  
//
// 109px
  
  
  
  
//  
//  
//
//(function(){ 
//  if (window.matchMedia("(max-width: 992px)").matches) {
//    var leftBtn = document.querySelector(".page-footer .arrow-left");
//    var partnersList = document.querySelector(".js-list");
//    var partnersListMd = document.querySelector(".js-list");
//    var partnersListBig = document.querySelector(".js-list");
//    var position = 109;
//    var positionMd = 117;
//    var positionBig = 106;
//    var left = 0;
//
//    leftBtn.addEventListener("click", function () {
//
//      if (window.matchMedia("(max-width: 480px)").matches) {
//        partnersList.style.left = (left - position) + "px";
//        left = parseInt(partnersList.style.left.replace('px'), 10);
//        console.log(left);
//
//        if (left < -545) {
//          left = 0;
//          partnersList.style.left = left;
//        }
//      }
//
//      
//      if (window.matchMedia("(max-width: 768px)").matches) {
//        
//        partnersListMd.style.left = (left - positionMd) + "px";
//        left = parseInt(partnersListMd.style.left.replace('px'), 10);
//        console.log(left);
//
//        if (left < -468) {
//          left = 0;
//          partnersListMd.style.left = left;
//        }
//      }      
//
//      if (window.matchMedia("(max-width: 992px)").matches) {
//        partnersListBig.style.left = (left - positionBig) + "px";
//        left = parseInt(partnersListBig.style.left.replace('px'), 10);
//        console.log(left);
//
//        if (left < -106) {
//          left = 0;
//          partnersListBig.style.left = left;
//        }
//      }
//    });
//  }
//})();
  
//  
//
// 109px