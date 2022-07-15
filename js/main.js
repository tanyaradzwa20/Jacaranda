const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click",() => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle ("fade")
    });
});


AOS.init({
  offset:200,
  duration:600,
  easing:'ease-in-sine',
  delay:100,
});

// functionimageGallery(){
//   const highlight = document.querySelector('.gallery-highlight');
//   const previews = document.querySelectorAll('.room-preview img');

//   previews.forEach(preview =>{
//     preview.addEventListener('click',function(){
//     const smallSrc = this.src;
//     const bigSrc = smallSrc.replace("small","big");
//     highlight.src = bigSrc;
//     })
//   })

// }
// imageGallery();

$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); 
        return false;
      }
    }
  });
});

