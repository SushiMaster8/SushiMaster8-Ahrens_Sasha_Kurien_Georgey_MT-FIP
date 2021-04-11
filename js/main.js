(() => {
  console.log('fired');

const sigils = document.querySelector('#navList'),
        banner = document.querySelector('#houseImages'),
        lightBox = document.querySelector(".lightbox"),
        vid = lightBox.querySelector('video'),
        houseName = document.querySelector('h1'),
        houseDescription = document.querySelector('.house-info');


const products = [
      ['beer case', '$10.50'],['beer bottle', '$2.5'],
      ['beer can', '$1.5']
      ];


 function setProductData(name, price) {
    left1.p.textContent = name1;
    right1.p.textContent = price1;
    left2.p.textContent = name2;
    right2.p.textContent = price2;
    left3.p.textContent = name3;
    right3.p.textContent = price3;
  }


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


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

sigils.addEventListener('click', animateBanner);



