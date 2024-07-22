ScrollReveal({
  reset:true,
  distance:"200px",
  duration:1000,
  delay:1000
});
ScrollReveal().reveal('.footer1,.con5-img1',{delay:100,origin:"left"})
ScrollReveal().reveal('.bt',{delay:100,origin:"lright"})
ScrollReveal().reveal('.footer3,.f1,.con1-h1,.con5-img2,.con5-img3',{delay:100,origin:"top",interval:100})


let con=document.querySelector(".con6-img1");
let con9=document.querySelector(".con9-h1");
let img1=document.querySelector(".con9-img1");

con.addEventListener("mousemove",function(){
    con.setAttribute("src","../images/pic8.jpg");
})
con.addEventListener("mouseout",function(){
    con.setAttribute("src","../images/pic1.jpg");
})

con9.addEventListener("click",function(){
    img1.setAttribute("src","../images/img10.jpg")
})


//cardslider//

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  


