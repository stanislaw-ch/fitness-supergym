'use strict';

(function () {
  var element = document.getElementById('phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  /* eslint-disable*/
  var mask = IMask(element, maskOptions);
})();

'use strict';

(function () {
  var position = 0;
  var slidesToShow = 1;
  var slidesToScroll = 1;
  var container = document.querySelector('.coach__slider-container');
  var track = document.querySelector('.coach__list');
  var btnPrev = document.querySelector('.coach__slider-btn--previous');
  var btnNext = document.querySelector('.coach__slider-btn--next');
  var items = document.querySelectorAll('.coach__item');
  var itemsCount = items.length;
  var itemWidth = container.clientWidth / slidesToShow;
  var movePosition = slidesToScroll * itemWidth;

  var getClientWidth = function () {
    if (document.body.clientWidth > 1200) {
      slidesToScroll = 4;
      slidesToShow = 4;
      itemWidth = container.clientWidth / slidesToShow;
    }
    if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
      slidesToScroll = 2;
      slidesToShow = 2;
      itemWidth = container.clientWidth / slidesToShow;
    }
    if (document.body.clientWidth < 768) {
      slidesToScroll = 1;
      slidesToShow = 1;
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
    // var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    movePosition = slidesToScroll * itemWidth;

    position -= movePosition;
    // position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', function () {
    // var itemsLeft = Math.abs(position) / itemWidth;

    movePosition = slidesToScroll * itemWidth;

    position += movePosition;
    // position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  checkBtns();
  getClientWidth();

  window.addEventListener('resize', function () {
    getClientWidth();
  });
})();

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
    if (document.body.clientWidth <= 767) {
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

'use strict';

(function () {
  var tabs = document.querySelector('.subscription__wrapper');
  var tablinks = tabs.querySelectorAll('.subscription__period-item');
  var tabElements = tabs.querySelectorAll('.subscription__type-list');

  var hiddenTabElement = function () {
    for (var i = 0; i < tabElements.length; i++) {
      tabElements[i].classList.add('subscription__type-list--hidden');
    }
  };

  var hiddenTablink = function () {
    for (var j = 0; j < tablinks.length; j++) {
      tablinks[j].classList.remove('subscription__period-item--active');
    }
  };

  var showTabElement = function (onClickTab, hideTab) {
    onClickTab.classList.add('subscription__period-item--active');
    hideTab.classList.remove('subscription__type-list--hidden');
  };

  /**
   * Делает активным таб по клику
   * @param {object} onClickTab
   * @param {object} hideTab
   */
  var onTabClickChange = function (onClickTab, hideTab) {
    onClickTab.addEventListener('click', function () {
      hiddenTabElement();
      hiddenTablink();
      showTabElement(onClickTab, hideTab);
    });

    onClickTab.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        hiddenTabElement();
        hiddenTablink();
        showTabElement(onClickTab, hideTab);
      }
    });
  };

  // Передает элемент таба по клику
  for (var j = 0; j < tablinks.length; j++) {
    onTabClickChange(tablinks[j], tabElements[j]);
  }
})();

// 'use strict';

// (function () {
//   var timeTable = document.querySelector('.timetable__list');
//   var tableFields = timeTable.querySelectorAll('.timetable__field');
//   // var tableCapRows = timeTable.querySelectorAll('.timetable__cap-row');
//   var tableCapColls = timeTable.querySelectorAll('.timetable__cap-coll');
//   var tableColls = timeTable.querySelector('.timetable__field');
//   var tableRows = timeTable.querySelector('tr');

//   var position = 0;
//   var itemsCount = tableFields.length / 4;
//   var itemWidth = tableRows.clientWidth - 66 + 16;
//   var movePosition = 308;

//   console.log(movePosition);

//   var btnPrev = document.querySelector('.timetable__scroll-item--prev');
//   var btnNext = document.querySelector('.timetable__scroll-item--next');

//   var setPosition = function () {
//     timeTable.style.transform = 'translateX(' + position + 'px)';
//   };

//   btnNext.addEventListener('click', function () {
//     // var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//     position -= movePosition;

//     btnNext.classList.add('timetable__scroll-item--active');
//     btnPrev.classList.remove('timetable__scroll-item--active');

//     setPosition();
//     // checkBtns();
//   });

//   btnPrev.addEventListener('click', function () {
//     // var itemsLeft = Math.abs(position) / itemWidth;

//     position += movePosition;

//     btnPrev.classList.add('timetable__scroll-item--active');
//     btnNext.classList.remove('timetable__scroll-item--active');

//     setPosition();
//     // checkBtns();
//   });



//   var unsetActiveFieldElement = function () {
//     for (var j = 0; j < tableFields.length; j++) {
//       tableFields[j].classList.remove('timetable__field--active');
//     }
//   };

//   var setActiveFieldElement = function (onClickTab) {
//     onClickTab.classList.add('timetable__field--active');
//   };

//   var onClickChange = function (onClickTab) {
//     onClickTab.addEventListener('click', function () {
//       unsetActiveFieldElement();
//       setActiveFieldElement(onClickTab);
//     });

//     onClickTab.addEventListener('keydown', function (evt) {
//       if (evt.key === 'Enter') {
//         unsetActiveFieldElement();
//         setActiveFieldElement(onClickTab);
//       }
//     });
//   };

//   var onHoverRowChange = function (onHoverRow) {
//     onHoverRow.addEventListener('mouseover', function () {
//       onHoverRow
//           .parentNode
//           .querySelector('.timetable__cap-row')
//           .classList
//           .add('timetable__cap-row--hover');

//       tableCapColls[onHoverRow.cellIndex - 1]
//           .classList
//           .add('timetable__cap-coll--hover');

//     });
//     onHoverRow.addEventListener('mouseout', function () {
//       onHoverRow
//           .parentNode
//           .querySelector('.timetable__cap-row')
//           .classList
//           .remove('timetable__cap-row--hover');

//       tableCapColls[onHoverRow.cellIndex - 1]
//           .classList
//           .remove('timetable__cap-coll--hover');
//     });
//   };

//   // Передает элемент таба по клику
//   for (var j = 0; j < tableFields.length; j++) {
//     onClickChange(tableFields[j]);
//     onHoverRowChange(tableFields[j]);
//   }
// })();
