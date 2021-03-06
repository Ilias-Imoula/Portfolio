//Animation menu Burger
let navSlide = () => {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav-links");
  let navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Animation Text Nav
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    //Animation Burger
    burger.classList.toggle("menu-burger");
  });
};
navSlide();

//Animation text Prémier Page avec GASP
gsap.to("#salut", {
  duration: 0.8,
  ease: "elastic.outout(1, 0.3)",
  y: 500
});

gsap.to("#jeSuis", {
  duration: 2,
  x: 800,
  ease: "bounce",
  delay: 0.5
});

gsap.from("#dev", {
  duration: 3,
  x: 0,
  opacity: 0,
  scale: 0.5,
  delay: 1
});

//Animation SVG
function AnimationMonitoeSVG() {
  var tl = new TimelineMax();

  tl.from("#stand", 0.5, {
    scaleY: 0,
    transformOrigin: "bottom",
    ease: Power2.easeOut
  })
    .from("#standBack", 0.5, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Bounce.easeOut
    })
    .from("#monitorBottom", 0.7, {
      scaleX: 0,
      transformOrigin: "center",
      ease: Bounce.easeOut
    })
    .from("#screen", 0.6, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Circ.easeOut,
      delay: 0.4
    })
    .from("#yellowBox", 0.5, { scale: 0 })
    .staggerFrom(
      "#Layer_1 > g:nth-child(1) > g path",
      0.2,
      { scaleX: 0 },
      -0.1
    );
}
AnimationMonitoeSVG();

//Change color nav avec le scroll de la page


let salut = $('#salut');

 salut.waypoint(function (){
  gsap.to(".border-anim", { duration: 2.5 , ease: "expo", x: 1800 });
});



let qui = $('#qui');
qui.waypoint(function (){
  gsap.from(".box", {duration: 1.5,scale: 0.5, opacity: 0, delay: 0.5, stagger: 0.2,ease: "elastic", force3D: true });
  
},{offset:'20%'});





$(document).ready(function () {
  $('.buttonclick').on("click", function () {
      $('.close').toggleClass('open');
      
  });
});