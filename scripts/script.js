// Initialize Swiper
  var swiper = new Swiper(".miSwiper", {
    loop: true,
    autoplay:true,
    autoplayTimeout:700,

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
     580:{
      slidesPerView:2
     },
     920:{
      slidesPerView:3.2
     },
     1220:{
      slidesPerView:4.4
     }
   }
  });
