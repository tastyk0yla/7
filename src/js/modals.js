export const burgerButton = document.querySelector('.btn-circle-burger');
export const mainMenu = document.querySelector('.main-menu');
export const mainMenuEmptyArea = mainMenu.querySelector('.main-menu-empty-area')

export const mainMenuCloseButton = document.querySelector('.btn-close');

export const messageButton = document.querySelectorAll('.btn-message');
export const messageModal = document.querySelector('.modal-feedback');
export const closeFeedbackButton = document.querySelector('.btn-close--modal-feedback');

export const callButton = document.querySelectorAll('.btn-call');
export const callModal = document.querySelector('.modal-recall');
export const closeRecallButton = document.querySelector('.btn-close--modal-recall');

let zCounter = 100;


export let showModal = function (modal, modalClass) {
    let modalContainer = document.querySelector('.modal');
    let page = document.querySelector('.page');
    let modalEmpyArea = document.querySelector('.modal-empty-area');

    modal.classList.add(modalClass + '--expanded');
    page.classList.add('page--modal-expanded');

  if (modalClass === 'main-menu'){
    mainMenuEmptyArea.classList.add('main-menu-empty-area--expanded');
    modal.style.zIndex = zCounter;
    zCounter++;
  } else {
    modalEmpyArea.classList.add('modal-empty-area--expanded');
    mainMenu.classList.add('main-menu--modal-expanded');
    modalContainer.style.zIndex = zCounter;
    zCounter++;
  }

}

export let hideModal = function (modal, modalClass) {
    let page = document.querySelector('.page');
    let modalEmpyArea = document.querySelector('.modal-empty-area');

    modal.classList.remove(modalClass + '--expanded');
    modal.classList.remove(modalClass + '-empty-area--expanded');
    modal.style.zIndex = "";
    zCounter--;
    page.classList.remove('page--modal-expanded');

    if (modalClass !== 'main-menu'){
        modalEmpyArea.classList.remove('modal-empty-area--expanded');
        mainMenu.classList.remove('main-menu--modal-expanded');
    };
}