// Map
function initMap() {
    var myLatLng = {lat: 55.73708, lng: 37.65420};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 15,
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
  
  
  /* Dropdowns close part */

  $('body').on('click', function(event) {
      //Hide all select.js dropdowns

      $('.dropcontainer').find('.dropdownvisible').removeClass('dropdownvisible').addClass('dropdownhidden');
      $('.sizes__brand-toggler').find('.activetrigger').removeClass('activetrigger').addClass('trigger');
  });


  
  
  $(".catalog-filter .arrow-right").on("click", function(){
        dropdown = $(this).parent().find("ul.dropdown-category");

        $(this).toggleClass("rotated-arrow");
        dropdown.slideToggle();  
  });
    
  var catalogSale = $('.products--sale');
  var catalogNew = $('.products--new');
  var catalogFilter = $('.catalog-filter');
  var mobileMenu = $('.mobile-menu');
  var searchBtn = $('.main-menu__search-btn');    
  var searchField = $('.search-field');
  var searchCloseBtn = $('.main-menu__close-btn');
  var menuBtn = $('.main-menu__open-btn');
  var catalogWrapper = $(".catalog__products-wrapper");
  var catalogContainer = $('.product__section-container');
  var uselessWrapper = $('.useless-wrapper');
  var products = $(".product");
  
	catalogSale.hide();
	
  $(".show-btn:first-of-type span").addClass("active--blue");
  
  
  $('.show-btn:first-of-type').on("click", function(){  
    catalogNew.show("slow");
    $(".show-btn:last-of-type span").removeClass("active--red");
    $(".show-btn:first-of-type span").addClass("active--blue");
    catalogSale.hide("slow");
  });
  
  $('.show-btn:last-of-type').on("click", function(){    
    catalogSale.show("slow");
    $(".show-btn:first-of-type span").removeClass("active--blue");
    $(".show-btn:last-of-type span").addClass("active--red");
    catalogNew.hide("slow");
  });
  
  $('.main-menu__heading').on("click", function(){
      if(catalogFilter.css('display') == 'none'){
        $('body').addClass("overflow-hidden-full");
      }else{
        $('body').removeClass("overflow-hidden-full");
      }
      mobileMenu.removeClass("opened");
      menuBtn.removeClass("rotated");
      catalogFilter.slideToggle();      
  });
  
 
  menuBtn.on("click", function(){
    catalogFilter.hide();
    if(!mobileMenu.hasClass("opened")){
      $('body').addClass("overflow-hidden-full");
    }else{
      $('body').removeClass("overflow-hidden-full");
    } 
    
    mobileMenu.toggleClass("opened");
    menuBtn.toggleClass("rotated");
  });
  

  
  window.addEventListener("resize", function() { 
    
    
    if (window.matchMedia("(max-width: 992px)").matches) {
        $('body').removeClass("overflow-hidden");  
        searchField.hide();
    }
    
    if (window.matchMedia("(min-width: 992px)").matches) {
        $('body').removeClass("overflow-hidden");  
        searchField.hide();
    }
  });
    
    searchBtn.on("click", function(e){
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
  
  $('.catalog-filter__open-btn').on("click", function(){
    
    if (flag === true) {
      catalogFilter.addClass("catalog-filter--hidden");
      uselessWrapper.removeClass("catalog__products-wrapper");
      catalogContainer.addClass("products__section-container--expanded");
      products.addClass("item-expanded");
      
   if (window.matchMedia("(max-width:991px)").matches) { 
      $('body').addClass("overflow-hidden");
   }
      flag = false;
      console.log(flag);
    }
    
    else if (flag === false) {
      catalogFilter.removeClass("catalog-filter--hidden");
      uselessWrapper.addClass("catalog__products-wrapper");
      catalogContainer.removeClass("products__section-container--expanded");
      products.removeClass("item-expanded");
      
      
   if (window.matchMedia("(max-width:991px)").matches) { 
      $('body').removeClass("overflow-hidden");
   }
      flag = true; 
      console.log(flag);
    } 
  });
  
/* Products quantity */

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

// Fixed-filter toggle
$(".open-filter__btn").on("click", function(){
  if(window.matchMedia("(max-width:480px)").matches){
    $("body").addClass("overflow-hidden-full");
  }
  $("section.filter").show('slide', {direction: 'right'}, 500);
});

$(".filter__icon").on("click", function(){
  $("body").removeClass("overflow-hidden-full");
  $("section.filter").hide('slide', {direction: 'right'}, 500);
});

  
});