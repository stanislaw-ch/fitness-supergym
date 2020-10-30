'use strict';

(function () {
  var advertHeader = document.querySelector('.advert__header');
  // var advertHeadersSafari = document.querySelector('.advert__header-safari');

  if (navigator.userAgent.indexOf('Mac') !== -1 && !navigator.userAgent.indexOf('Safari') !== -1) {
    // advertHeader.classList.remove('advert__header');
    advertHeader.classList.add('advert__header-safari');
  } else {
    advertHeader.classList.remove('advert__header-safari');
  }

  var position = 0;
  var slidesToShow = 1;
  var slidesToScroll = 1;
  var coachContainer = document.querySelector('.coach__slider-container');
  if (coachContainer) {
    var track = document.querySelector('.coach__list');
    var btnPrev = document.querySelector('.coach__slider-btn--previous');
    var btnNext = document.querySelector('.coach__slider-btn--next');
    var items = document.querySelectorAll('.coach__item');
    var itemsCount = items.length;
    var itemWidth = coachContainer.clientWidth / slidesToShow;
    var movePosition = slidesToScroll * itemWidth;

    var getClientWidth = function () {
      if (document.body.clientWidth > 1200) {
        slidesToScroll = 4;
        slidesToShow = 4;
        itemWidth = coachContainer.clientWidth / slidesToShow;
      }
      if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
        slidesToScroll = 2;
        slidesToShow = 2;
        itemWidth = coachContainer.clientWidth / slidesToShow;
      }
      if (document.body.clientWidth < 768) {
        slidesToScroll = 1;
        slidesToShow = 1;
        itemWidth = coachContainer.clientWidth / slidesToShow;
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
      movePosition = slidesToScroll * itemWidth;
      position -= movePosition;

      setPosition();
      checkBtns();
    });

    btnPrev.addEventListener('click', function () {
      movePosition = slidesToScroll * itemWidth;
      position += movePosition;

      setPosition();
      checkBtns();
    });

    checkBtns();
    getClientWidth();

    window.addEventListener('resize', function () {
      getClientWidth();
    });
  }
})();
