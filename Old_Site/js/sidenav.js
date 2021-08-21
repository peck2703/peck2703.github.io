//Open and close the responsive sidebar navigation

function openNav(){
	document.getElementById("mySidenav").style.width = "200px";
}

function closeNav(){
	document.getElementById("mySidenav").style.width = "0px";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}