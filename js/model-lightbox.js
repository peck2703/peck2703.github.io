var selectedModal;
var selectedDemo;
var selectedCaption;
var slideIndex = 1;

function openModal(modalID, modalName, captionName) {
  selectedModal = modalName;
  alert("Open modal name is: " + modalName);
  selectedCaption = captionName;
  document.getElementById(modalID).style.display = "block";
  alert("Open modal's slides length is: " + document.getElementsByClassName(modalName).length);
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
  alert("Modal name is: " + modalName);
  var i;
  var slides = document.getElementsByClassName(modalName);
  //var captionText = document.getElementById(modalCaption);
  alert('Slides length is: ' + slides.length);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}