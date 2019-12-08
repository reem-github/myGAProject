$(document).ready(function() {
  event.preventDefault();
  $("#aboutUs").show();
   $("#adviceDiv").hide();
   $("#doctorsDiv").hide();
   $("#loginlDiv").hide();
   $("#ServicesDiv").hide();
 

});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




$("#Serviceslink").click(function(){
   $("#aboutUs").hide();
   $("#adviceDiv").hide();
   $("#doctorsDiv").hide();
   $("#loginlDiv").hide();
   $("#ServicesDiv").show();
   $('html, body').animate({
    scrollTop: $("#ServicesDiv").offset().top
}, 2000);
event.preventDefault();





});
$("#advicelink").click(function(){
   $("#aboutUs").hide();
   $("#adviceDiv").show();
   $("#doctorsDiv").hide();
   $("#loginlDiv").hide();
   $("#ServicesDiv").hide();
   $('html, body').animate({
    scrollTop: $("#adviceDiv").offset().top
}, 2000);
event.preventDefault();
   

});
$("#loginlink").click(function(){
   $("#aboutUs").hide();
   $("#adviceDiv").hide();
   $("#doctorsDiv").hide();
   $("#loginlDiv").show();
   $("#ServicesDiv").hide();
   $('html, body').animate({
    scrollTop: $("#loginlDiv").offset().top
}, 2000);
event.preventDefault();
  
   
});
$("#doctorslinl").click(function(){
  // $.scrollTo('."box content', 600);
   $("#aboutUs").hide();
   $("#adviceDiv").hide();
   $("#doctorsDiv").show();
   $("#loginlDiv").hide();
   $("#ServicesDiv").hide();
   $('html, body').animate({
    scrollTop: $("#doctorsDiv").offset().top
}, 2000);
event.preventDefault();
   

});
$("#aboutlink").click(function(){
  // $.scrollTo('."box content', 600);
   $("#aboutUs").show();
   $("#adviceDiv").hide();
   $("#doctorsDiv").hide();
   $("#loginlDiv").hide();
   $("#ServicesDiv").hide();
   $('html, body').animate({
    scrollTop: $("#aboutUs").offset().top
}, 2000);
event.preventDefault();

});



AOS.init({
    duration: 1200,
  })
  
  // -----------------------------------------------------------------------
  // ---------------------------------------------------------------------------
   
