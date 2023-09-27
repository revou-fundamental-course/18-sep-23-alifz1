document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let interest = document.forms['contact-form']['interest'].value;

    if (!name) {
        document.getElementById("name-error").innerText = "Name cannot be blank!";
    } else {
        document.getElementById("name-error").innerText = "";
    }

    if (!email) {
        document.getElementById("email-error").innerText = "Email cannot be blank!";
    } else {
        document.getElementById("email-error").innerText = "";
    }

    if (!interest) {
        document.getElementById("interest-error").innerText = "Interest cannot be blank!";
    } else {
        document.getElementById("interest-error").innerText = "";
    }
});




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n == undefined) {
    n = ++slideIndex
  }
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000)
}
