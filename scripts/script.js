// Initialize Swiper
  var swiper = new Swiper(".miSwiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    autoplay:true,
    autoplayTimeout:900,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   breakpoints:{
    0:{
      slidesPerView:1
    },
     550:{
      slidesPerView:2
     },
     850:{
      slidesPerView:3
     },
     1220:{
      slidesPerView:4
     }
   }
  });
