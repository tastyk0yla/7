export const expander = function (btn) {  
    let parent = btn.parentNode;
    let icon = btn.querySelector('.btn-expand__img');
    let areaToExpand;
    let cls;
  
    switch (true) {
      case parent.classList.contains('article'):
        areaToExpand = parent;
        cls = 'article';
        break;
      case parent.classList.contains('brand-slider-container'):
        areaToExpand = parent.querySelector('.brand-slider__cards');
        cls = 'brand-slider__cards';
        break;
      case parent.classList.contains('device-type-slider-container'):
        areaToExpand = parent.querySelector('.device-type-slider__cards');
        cls = 'device-type-slider__cards';
        break;
    }
  
    if (!icon.classList.contains('expanded')) {
      btn.querySelector('.btn__text').textContent = 'Скрыть';
    } else {
      if (btn.classList.contains('article__btn')){
        btn.querySelector('.btn__text').textContent = 'Читать далее';
      } else {
      btn.querySelector('.btn__text').textContent = 'Показать все';
      }
    }
    areaToExpand.classList.toggle(`${cls}--expanded`);
    icon.classList.toggle('expanded');  
  };