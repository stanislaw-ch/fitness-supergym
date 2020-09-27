'use strict';

(function () {
  var position = 0;
  var slidesToShow = 1;
  var slidesToScroll = 1;
  var container = document.querySelector('.review__slider-container');
  var track = document.querySelector('.review__group');
  var btnPrev = document.querySelector('.review__slider-btn--previous');
  var btnNext = document.querySelector('.review__slider-btn--next');
  var items = document.querySelectorAll('.review__item');
  var itemsCount = items.length;
  var itemWidth = container.clientWidth / slidesToShow;
  var movePosition = slidesToScroll * itemWidth;

  var getClientWidth = function () {
    if (document.body.clientWidth > 1200) {
      itemWidth = container.clientWidth / slidesToShow;
    }
    if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
      itemWidth = container.clientWidth / slidesToShow;
    }
    if (document.body.clientWidth < 768) {
      itemWidth = container.clientWidth / slidesToShow;
    }
  };

  var setPosition = function () {
    track.style.transform = 'translateX(' + position + 'px)';
  };

  var checkBtns = function () {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  btnNext.addEventListener('click', function () {
    var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', function () {
    var itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  checkBtns();
  getClientWidth();

  window.addEventListener('resize', function () {
    getClientWidth();
  });
})();
