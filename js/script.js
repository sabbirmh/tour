$(function(){

    'use strict';
  
    
$('.about_slider').slick({
    autoplay: true,
    speed:2000,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });


// menu fixed

var navoff = $('.menu_part').offset().top;

$(window).scroll(function(){
 var scrolling = $(this).scrollTop();

  if(scrolling > navoff ){
    $('.menu_part').addClass('menu_fix');
  }

  else{
    $('.menu_part').removeClass('menu_fix');
  }
});



// inner_desti_slider

$('.row_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: false,
});



// inner_package_slider

$('.row_slider_row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  arrows: false,
});



// price range

var maxSlider = document.getElementById('max');
var outputMax = document.getElementById('max-value');

outputMax.innerHTML = maxSlider.value;

maxSlider.oninput = function(){
  outputMax.innerHTML=this.value;
}

  
  });