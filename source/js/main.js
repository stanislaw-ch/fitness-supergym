'use strict';

(function () {
  var reviewSlider = document.querySelector('.review');
  var reviewSliderItems = reviewSlider.querySelectorAll('.review__group');
  var reviewSliderButtons = reviewSlider.querySelectorAll('.review__slider-btn');

  // var coachSlider = document.querySelector('.coach');
  // var coachSliderItems = coachSlider.querySelectorAll('.coach__item');
  // var coachSliderButtons = coachSlider.querySelectorAll('.coach__slider-btn');

  var index = 0;

  var SliderReviewPosition = {
    GET_MIN: 0,
    GET_MAX: reviewSliderItems.length - 1
  };

  // var SliderCoachPosition = {
  //   GET_MIN: 0,
  //   GET_MAX: coachSliderItems.length - 1
  // };

  /**
   * Отслеживает клики на кнопки слайдера
   */
  var sliderButtonListener = function () {
    reviewSliderButtons.forEach(function (item) {
      item.addEventListener('click', onButtonReviewClick);
    });
    // coachSliderButtons.forEach(function (item) {
    //   item.addEventListener('click', onButtonCoachClick);
    // });
  };

  /**
   * Определяет и передает направление по клику на кнопоку слайдера с отзывами
   * @param {object} evt
   */
  var onButtonReviewClick = function (evt) {
    if (evt.target.classList.contains('review__slider-btn')) {
      evt.preventDefault();
      var direction = evt.target
          .classList
          .contains('review__slider-btn--next') ? 'right' : 'left';

      sliderReviewTransform(direction);
    }
  };

  /**
   * Определяет и передает направление по клику на кнопоку слайдера с тренерами
   * @param {object} evt
   */
  // var onButtonCoachClick = function (evt) {
  //   if (evt.target.classList.contains('coach__slider-btn')) {
  //     evt.preventDefault();
  //     var direction = evt.target
  //         .classList
  //         .contains('coach__slider-btn--next') ? 'right' : 'left';

  //     sliderCoachTransform(direction);
  //   }
  // };

  /**
   * Обрабатывает клики на кнопки слайдера с отзывами
   * @param {object} direction
   */
  var sliderReviewTransform = function (direction) {
    if (direction === 'right') {
      if (index >= SliderReviewPosition.GET_MAX) {
        return;
      }
      if (index >= SliderReviewPosition.GET_MIN) {
        index++;
        reviewSliderItems[index - 1].classList.add('review__group--hidden');
        reviewSliderItems[index].classList.remove('review__group--hidden');
      }
    }
    if (direction === 'left') {
      if (index === SliderReviewPosition.GET_MIN) {
        return;
      }
      if (index <= SliderReviewPosition.GET_MAX) {
        index--;
        reviewSliderItems[index + 1].classList.add('review__group--hidden');
        reviewSliderItems[index].classList.remove('review__group--hidden');
      }
    }
  };

  /**
   * Обрабатывает клики на кнопки слайдера с тренерами
   * @param {object} direction
   */
  // var sliderCoachTransform = function (direction) {
  //   if (direction === 'right') {
  //     if (index >= SliderCoachPosition.GET_MAX) {
  //       return;
  //     }
  //     if (index >= SliderCoachPosition.GET_MIN) {
  //       index++;
  //       coachSliderItems[index - 1].classList.add('coach__item--hidden');
  //       coachSliderItems[index].classList.remove('coach__item--hidden');
  //     }
  //   }
  //   if (direction === 'left') {
  //     if (index === SliderCoachPosition.GET_MIN) {
  //       return;
  //     }
  //     if (index <= SliderCoachPosition.GET_MAX) {
  //       index--;
  //       coachSliderItems[index + 1].classList.add('coach__item--hidden');
  //       coachSliderItems[index].classList.remove('coach__item--hidden');
  //     }
  //   }


  //   if (document.body.clientWidth > 767 && document.body.clientWidth < 1200) {
  //     coachSliderItems[2].classList.remove('coach__item--hidden');

  //     if (direction === 'right') {
  //       if (index >= SliderCoachPosition.GET_MAX) {
  //         return;
  //       }
  //       if (index >= SliderCoachPosition.GET_MIN) {
  //         index++;
  //         console.log(index);
  //         coachSliderItems[0].classList.add('coach__item--hidden');
  //         coachSliderItems[1].classList.add('coach__item--hidden');
  //         coachSliderItems[2].classList.remove('coach__item--hidden');
  //         coachSliderItems[3].classList.remove('coach__item--hidden');
  //       }
  //     }
  //     if (direction === 'left') {
  //       if (index === SliderCoachPosition.GET_MIN) {
  //         return;
  //       }
  //       if (index <= SliderCoachPosition.GET_MAX) {
  //         index--;
  //         coachSliderItems[2].classList.add('coach__item--hidden');
  //         coachSliderItems[3].classList.add('coach__item--hidden');
  //         coachSliderItems[1].classList.remove('coach__item--hidden');
  //         coachSliderItems[0].classList.remove('coach__item--hidden');
  //       }
  //     }
  //   }
  // };

  // var getClientWidth = function () {
  //   if (document.body.clientWidth > 767 && document.body.clientWidth < 1200) {
  //     coachSliderItems[2].classList.remove('coach__item--hidden');
  //   }
  // };

  // getClientWidth();

  // window.addEventListener('resize', function () {
  //   getClientWidth();
  // });

  sliderButtonListener();
})();
