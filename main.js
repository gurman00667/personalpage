// function year(){
//      alert("i am clicked")
// }

// $(i).on(function animation(){
//     while ()
// })
let icons = document.getElementsByTagName('i'); // select all icons by class

for(let icon of icons){
    icon.addEventListener('mouseenter',function(){ //add event listener for each icon when the mouse enters do this
        this.style.height = "156px"; //get larger
        this.style.width  = "156px";
    });
    icon.addEventListener('mouseleave',function(){ //when mouse leaves do this
        this.style.height = "112px"; //make the icons smaller
        this.style.width  = "112px";
    });
}

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
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.transition = '2s'
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.transition = '2s'
  slides[slideIndex-1].style.display = "block"; 

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}