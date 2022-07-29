export function swiperInit () {
    if (window.matchMedia('(max-width: 767px)').matches) { 
        const swiperBrands = new Swiper('.swiper-brands', {  
          direction: 'horizontal', 
          loop: true,  
          spaceBetween: 20, 
          slidesPerView: 'auto', 
          pagination: { 
            el: '.swiper-pagination',
            clickable: true 
          },
          init: true
        });
  
        const swiperDevices = new Swiper('.swiper-devices', {  
          direction: 'horizontal', 
          loop: true,  
          spaceBetween: 20, 
          slidesPerView: 'auto', 
          pagination: { 
            el: '.swiper-pagination',
            clickable: true 
          },
          init: true
        });
  
        const swiperServices = new Swiper('.swiper-services', {  
          direction: 'horizontal', 
          loop: true,  
          spaceBetween: 20, 
          slidesPerView: 'auto', 
          pagination: { 
            el: '.swiper-pagination', 
            clickable: true 
          },
          init: true
        });
  
      }
}