var selectedModal;
var selectedDemo;
var selectedCaption;
var slideIndex = 1;

function openModal(modalID, modalName, captionName) {
  selectedModal = modalName;
  selectedCaption = captionName;  
  document.getElementById(modalID).style.display = "block";

  // var obj = document.getElementByID("main-container");
  // obj.setAttribute("style", "overflow-y:hidden;");

  showSlides(slideIndex, selectedModal);
}
function closeModal(modalID) {
  document.getElementById(modalID).style.display = "none";

  // var obj = document.getElementByID("main-container");
  // obj.setAttribute("style", "overflow:auto;");
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
  var captionText = document.getElementById(selectedCaption);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}