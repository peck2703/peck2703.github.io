var selectedModal;
var selectedDemo;
var selectedCaption;
var slideIndex = 1;

function openModal(modalID, modalName, captionName, demoName) {
  selectedModal = modalName;
  selectedDemo = demoName;
  selectedCaption = captionName;  
  document.getElementById(modalID).style.display = "block";
  showSlides(slideIndex, selectedModal, selectedDemo);
}
function closeModal(modalID) {
  document.getElementById(modalID).style.display = "none";
}
function plusSlides(n) {
  showSlides(slideIndex += n, selectedModal);
}
function currentSlide(n) {
  showSlides(slideIndex = n, selectedModal);
}
function showSlides(n, modalName) {
  var i;
  var slides = document.getElementsByClassName(modalName);
  var dots = document.getElementsByClassName(selectedDemo);
  var captionText = document.getElementById(selectedCaption);
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}