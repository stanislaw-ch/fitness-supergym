'use strict';

(function () {
  var reviewSlider = document.querySelector('.review');
  var reviewSliderItems = reviewSlider.querySelectorAll('.review__group');
  var reviewSliderButtons = reviewSlider.querySelectorAll('.review__slider-btn');

  var index = 0;

  var SliderPosition = {
    GET_MIN: 0,
    GET_MAX: reviewSliderItems.length - 1
  };

  /**
   * Отслеживает клики на кнопки слайдера
   */
  var sliderButtonListener = function () {
    reviewSliderButtons.forEach(function (item) {
      item.addEventListener('click', onButtonClick);
    });
  };

  /**
   * Определяет и передает направление по клику на кнопоку слайдера
   * @param {object} evt
   */
  var onButtonClick = function (evt) {
    if (evt.target.classList.contains('review__slider-btn')) {
      evt.preventDefault();
      var direction = evt.target
          .classList
          .contains('review__slider-btn--next') ? 'right' : 'left';

      sliderTransform(direction);
    }
  };

  /**
   * Обрабатывает клики на кнопки слайдера
   * @param {object} direction
   */
  var sliderTransform = function (direction) {
    if (direction === 'right') {
      if (index >= SliderPosition.GET_MAX) {
        return;
      }
      if (index >= SliderPosition.GET_MIN) {
        index++;
        reviewSliderItems[index - 1].classList.add('review__group--hidden');
        reviewSliderItems[index].classList.remove('review__group--hidden');
      }
    }
    if (direction === 'left') {
      if (index === SliderPosition.GET_MIN) {
        return;
      }
      if (index <= SliderPosition.GET_MAX) {
        index--;
        reviewSliderItems[index + 1].classList.add('review__group--hidden');
        reviewSliderItems[index].classList.remove('review__group--hidden');
      }
    }
  };

  sliderButtonListener();
})();
