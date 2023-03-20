// hero image slide

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000); // billede skift interval 8 sekunds
}

// mobil menu

/* åbner overlay til 100% */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* lukker menu til 0 */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
