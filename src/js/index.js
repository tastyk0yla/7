
import '../scss/style.scss';
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation,Pagination]);
window.onload =  () => { 
  if (window.matchMedia('(max-width: 767px)').matches) { 
      const swiperBrands = new Swiper('.swiper-brands', {  
        direction: 'horizontal', 
        loop: true,  
        spaceBetween: 20, 
        slidesPerView: 'auto', 
        pagination: { 
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
        // init: true
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import * as modals from './modals';

const burgerButton = document.querySelector('.btn-circle-burger');
const mainMenu = document.querySelector('.main-menu');
const mainMenuEmptyArea = document.querySelector('.main-menu-empty-area')
const mainMenuCloseButton = document.querySelector('.btn-close');
const modalEmpyArea = document.querySelector('.modal-empty-area')
const messageModal = document.querySelector('.modal-feedback');
const callModal = document.querySelector('.modal-recall')
const messageButton = document.querySelectorAll('.btn-message');
const closeFeedbackButton = document.querySelector('.btn-close--modal-feedback');
const callButton = document.querySelectorAll('.btn-call');
const closeRecallButton = document.querySelector('.btn-close--modal-recall');

burgerButton.addEventListener('click', function () {
  modals.showModal(mainMenu, 'main-menu')
});

mainMenuCloseButton.addEventListener('click', function () {
  modals.hideModal(mainMenu, 'main-menu');
});

mainMenuEmptyArea.addEventListener('click', function () {
  modals.hideModal(mainMenu, 'main-menu');
});

messageButton.forEach(btn => {
  btn.addEventListener('click', function () {
    modals.showModal(messageModal, 'modal-feedback');
  })
})

closeFeedbackButton.addEventListener('click', function () {
  modals.hideModal(messageModal, 'modal-feedback');
});

callButton.forEach(btn => {
  btn.addEventListener('click', function () {
    modals.showModal(callModal, 'modal-recall');
  })
})


closeRecallButton.addEventListener('click', function () {
  modals.hideModal(callModal, 'modal-recall');
});

modalEmpyArea.addEventListener('click', function (){
  modals.hideModal(callModal, 'modal-recall');
  modals.hideModal(messageModal, 'modal-feedback');
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const expandButtons = document.querySelectorAll('.btn-expand');

import * as exp from './expander.js'

expandButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
      exp.expander(btn);
  })
})


