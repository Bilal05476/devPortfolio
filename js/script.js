//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("started").style.margin = ".7rem 2rem .7rem .7rem";
    document.getElementById("logo").style.fontSize = "1.2rem";
    document.getElementById("navbar").style.boxShadow =
      ".2rem .2rem 1.8rem rgb(5, 1, 63)";
  } else {
    document.getElementById("started").style.margin = "1.2rem";
    document.getElementById("logo").style.fontSize = "1.8rem";
    document.getElementById("navbar").style.boxShadow =
      "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Menu toggle
function toggleMenu() {
  var menuToggle = document.querySelector(".navbar-toggler");
  menuToggle.classList.toggle("active");
}

