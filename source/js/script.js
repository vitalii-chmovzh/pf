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
  

  var slideLink = $(".slide-link"),
      sliderDescription = $(".description"), 
      sliderBtn = $(".description__more-btn"),
      sliderOverflow = $(".slider__overflow"); 
  
  // Main slider hover effect
  sliderBtn.on("mouseover", function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    sliderDescription.addClass("after-red");     
   }
  });

  sliderBtn.on("mouseout", function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    sliderDescription.removeClass("after-red");     
   }
  });

  // sliderBtn.on("click", function (e){
  //   if (window.matchMedia("(max-width: 992px)").matches) {

  //     e.preventDefault();

  //     var href = $(this).attr("href");

  //     $(this).addClass("background-none");
  //     slideLink.addClass("after-red");
  //     sliderDescription.addClass("background-none");

  //     setTimeout(function(){
  //       location.href = href;
  //     }, 500);
  //   }
  // });

   
  $(".catalog-filter .arrow-right").on("click", function(){
        dropdown = $(this).parent().find("ul.dropdown-category");

        $(this).toggleClass("rotated-arrow");
        dropdown.slideToggle();  
  });
    
  var catalogSale = $('.products--sale'),
      catalogNew = $('.products--new'),
      catalogFilter = $('.catalog-filter'),
      mobileMenu = $('.mobile-menu'),
      searchBtn = $('.main-menu__search-btn'),   
      searchField = $('.search-field'),
      searchCloseBtn = $('.main-menu__close-btn'),
      menuBtn = $('.main-menu__open-btn'),
      catalogWrapper = $(".catalog__products-wrapper"),
      catalogContainer = $('.product__section-container'),
      uselessWrapper = $('.useless-wrapper'),
      products = $(".product"),
      menu__nav = $(".main-menu__nav");
  
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
  
  $('.catalog-filter__open-btn').on("click", function(){
//    var 
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

// Mobile catalogFilter
$('.main-menu__heading').on("click", function(){
  if(catalogFilter.css('display') == 'none'){
    $('html, body').addClass("overflow-hidden-full");
  }else{
    $('html, body').removeClass("overflow-hidden-full");
  }
  mobileMenu.hide();
  menuBtn.removeClass("rotated");
  catalogFilter.slideToggle("slow");      
});

// Mobile menu
menuBtn.on("click", function(){
  catalogFilter.hide();
  if (window.matchMedia("(max-width:767px)").matches) {
    if(mobileMenu.css('display') == 'none'){
      $('html, body').addClass("overflow-hidden-full");
    }else{
      $('html, body').removeClass("overflow-hidden-full");
    } 
  }

  mobileMenu.slideToggle("slow");
  menuBtn.toggleClass("rotated");
});

// Search open 
searchBtn.on("click", function(e){
  e.preventDefault();
  e.stopPropagation();
  menu__nav.addClass("hidden-block");
  searchCloseBtn.addClass("inline-block");
  searchField.show("fast");
  menuBtn.addClass("display-none");

  if (window.matchMedia("(max-width:992px)").matches) {
    // Close menu,catalog
    $('html, body').removeClass("overflow-hidden-full");  
    mobileMenu.slideUp("slow");
    menuBtn.removeClass("rotated");
    mobileMenu.slideUp("slow");
    catalogFilter.slideUp("slow");
  }
});

// Search close
searchCloseBtn.on("click", function(e){
  e.preventDefault();
  e.stopPropagation();
  menu__nav.removeClass("hidden-block");
  searchCloseBtn.removeClass("inline-block");
  searchField.hide("fast");
  menuBtn.removeClass("display-none");
});  

searchField.on("click", function(e){
  e.stopPropagation();
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

// Main slider
if($('.slider-wrapper').length != 0){
  $('.slider-wrapper').bxSlider({
      mode: 'fade',
      infiniteLoop: false,
      hideControlOnEnd: true,
      speed: 700,
      controls: false,
      pagerSelector: '.pagination'
  });
}
// Footer slider
$('.js-list-mobile').bxSlider({
    slideWidth: 77,
    slideMargin: 30,
    maxSlides: 7,
    moveSlides: 1,
    pager: false,
    nextText: '',
    prevText: '',
    nextSelector: '.footer-arrow-right',
    prevSelector: '.footer-arrow-left',
    infiniteLoop: false,
    hideControlOnEnd: true
});

/* Dropdowns close part */

$('body').on('click', function(event) {
    //Hide all select.js dropdowns

    $('.dropcontainer').find('.dropdownvisible').removeClass('dropdownvisible').addClass('dropdownhidden');
    $('.sizes__brand-toggler').find('.activetrigger').removeClass('activetrigger').addClass('trigger');

    // Hide search
    if(window.matchMedia("(min-width:970px)").matches){
      menu__nav.removeClass("hidden-block");
      searchCloseBtn.removeClass("inline-block");
      searchField.hide("fast");
      menuBtn.removeClass("display-none");
    }
});

// Price range
if($( "#ui-slider" ).length != 0){
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
}

//Disable light-box on mobile
function disableLightbox(){
    var lightboxItems = $("a[data-lightbox]");

    if(lightboxItems.length != 0){
        lightboxItems.removeAttr("href data-lightbox");
    }
};

if(window.matchMedia("(max-width:350px)").matches){
    disableLightbox();
}

});