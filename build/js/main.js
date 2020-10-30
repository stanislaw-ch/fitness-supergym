'use strict';

(function () {
  var element = document.getElementById('phone');
  if (element) {
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    /* eslint-disable*/
    var mask = IMask(element, maskOptions);
  }
})();

'use strict';

(function () {
  var advertHeader = document.querySelector('.advert__header');

  if (navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Safari') !== -1) {
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

'use strict';

(function () {
  var position = 0;
  var slidesToShow = 1;
  var slidesToScroll = 1;
  var reviewContainer = document.querySelector('.review__slider-container');
  if (reviewContainer) {
    var track = document.querySelector('.review__group');
    var btnPrev = document.querySelector('.review__slider-btn--previous');
    var btnNext = document.querySelector('.review__slider-btn--next');
    var items = document.querySelectorAll('.review__item');
    var itemsCount = items.length;
    var itemWidth = reviewContainer.clientWidth / slidesToShow;
    var movePosition = slidesToScroll * itemWidth;

    var getClientWidth = function () {
      if (document.body.clientWidth > 1200) {
        itemWidth = reviewContainer.clientWidth / slidesToShow;
      }
      if (document.body.clientWidth >= 768 && document.body.clientWidth < 1200) {
        itemWidth = reviewContainer.clientWidth / slidesToShow;
      }
      if (document.body.clientWidth <= 767) {
        itemWidth = reviewContainer.clientWidth / slidesToShow;
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
  }
})();

'use strict';

(function () {
  var tabs = document.querySelector('.subscription__wrapper');
  if (tabs) {
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
  }
})();

'use strict';

(function () {

  var MARGIN = 8;
  var MARGIN_COUNT = 3;
  var COLLS_COUNT_TO_MOVE = 3;
  var ITEM_WIDTH = 146;


  var timeTable = document.querySelector('.timetable__table-wrapper');
  if (timeTable) {
    var tableCollsContainer = timeTable.querySelector('.timetable__colls-container');
    var tableFieldLists = timeTable.querySelectorAll('.timetable__field-list');
    var tableFieldItems = timeTable.querySelectorAll('.timetable__field-item');
    var tableDayItems = timeTable.querySelectorAll('.timetable__day-item');
    var tableTimeItems = timeTable.querySelectorAll('.timetable__time-item');
    var tableDayItemActive = timeTable.querySelector('.timetable__day-item--active');

    var tableToggle = timeTable.querySelector('.timetable__toggle');

    var index = Array.from(tableDayItems).indexOf(tableDayItemActive);

    var hideDayItmes = function () {
      Array.from(tableDayItems).forEach(function (day) {
        if (!day.classList.contains('timetable__day-item--active')) {
          day.style.display = 'none';
        }
      });
    };

    var showDayItmes = function () {
      Array.from(tableDayItems).forEach(function (day) {
        if (!day.classList.contains('timetable__day-item--active')) {
          day.style.display = 'flex';
        }
      });
    };

    var hideFieldLists = function () {
      Array.from(tableFieldLists).forEach(function (field) {
        field.style.display = 'none';
      });
    };

    var showFieldLists = function () {
      Array.from(tableFieldLists).forEach(function (field) {
        field.style.display = 'block';
      });
    };

    var removeDayItemClassActive = function () {
      tableDayItems[index].classList.remove('timetable__day-item--active');
    };

    var addDayItemClassActive = function (dayItem) {
      dayItem.classList.add('timetable__day-item--active');

      var indexOfDayItem = (
        Array
            .from(tableDayItems)
            .indexOf(dayItem)
      );

      hideDayItmes();

      tableFieldLists[indexOfDayItem].style.display = 'block';
      tableToggle.classList.add('timetable__toggle--closed');
      tableToggle.classList.remove('timetable__toggle--opened');
      index = Array.from(tableDayItems).indexOf(dayItem);
    };

    var onDayItemClick = function (dayItem) {
      dayItem.addEventListener('click', function () {
        removeDayItemClassActive();
        addDayItemClassActive(dayItem);
      });
    };

    var position = 0;
    var movePosition = ITEM_WIDTH * COLLS_COUNT_TO_MOVE + MARGIN * MARGIN_COUNT;

    var btnPrev = document.querySelector('.timetable__scroll-item--prev');
    var btnNext = document.querySelector('.timetable__scroll-item--next');

    var setPosition = function () {
      tableCollsContainer.style.transform = 'translateX(' + position + 'px)';
    };

    var unsetActiveFieldElement = function () {
      for (var j = 0; j < tableFieldItems.length; j++) {
        tableFieldItems[j].classList.remove('timetable__field-item--active');
      }
    };

    var setActiveFieldElement = function (onClickTab) {
      onClickTab.classList.add('timetable__field-item--active');
    };

    var onClickChange = function (onClickTab) {
      onClickTab.addEventListener('click', function () {
        unsetActiveFieldElement();
        setActiveFieldElement(onClickTab);
      });

      onClickTab.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          unsetActiveFieldElement();
          setActiveFieldElement(onClickTab);
        }
      });
    };

    var onHoverRowChange = function (onHoverRow) {
      onHoverRow.addEventListener('mouseover', function () {
        var indexColl = (Array
            .from(tableFieldLists)
            .indexOf(onHoverRow.parentNode));
        var indexRow = (Array
            .from(onHoverRow.parentNode.querySelectorAll('.timetable__field-item'))
            .indexOf(onHoverRow));

        tableTimeItems[indexRow]
            .classList
            .add('timetable__time-item--hover');

        if (document.body.clientWidth >= 768) {
          tableDayItems[indexColl]
              .classList
              .add('timetable__day-item--hover');
        }

      });

      onHoverRow.addEventListener('mouseout', function () {
        var indexColl = (Array
            .from(tableFieldLists)
            .indexOf(onHoverRow.parentNode));
        var indexRow = (Array
            .from(onHoverRow.parentNode.querySelectorAll('.timetable__field-item'))
            .indexOf(onHoverRow));

        tableTimeItems[indexRow]
            .classList
            .remove('timetable__time-item--hover');

        if (!document.body.clientWidth < 768) {
          tableDayItems[indexColl]
              .classList
              .remove('timetable__day-item--hover');
        }
      });
    };

    if (document.body.clientWidth < 768) {
      hideDayItmes();
    }

    window.addEventListener('resize', function () {
      if (document.body.clientWidth < 768) {
        hideDayItmes();
        position = 0;
        setPosition();

        btnNext.classList.remove('timetable__scroll-item--active');
        btnPrev.classList.add('timetable__scroll-item--active');

        for (var j = 0; j < tableDayItems.length; j++) {
          onDayItemClick(tableDayItems[j]);
        }

        Array.from(tableDayItems).forEach(function (item) {
          item.style.pointerEvents = 'auto';
        });

      }

      if (document.body.clientWidth > 768 && document.body.clientWidth < 1200) {
        showDayItmes();
        showFieldLists();

        Array.from(tableDayItems).forEach(function (item) {
          item.style.pointerEvents = 'none';
        });
      }

      if (document.body.clientWidth > 1200) {
        position = 0;
        setPosition();

        btnNext.classList.remove('timetable__scroll-item--active');
        btnPrev.classList.add('timetable__scroll-item--active');
      }
    });

    for (var i = 0; i < tableFieldItems.length; i++) {
      onClickChange(tableFieldItems[i]);
      onHoverRowChange(tableFieldItems[i]);
    }

    if (document.body.clientWidth < 768) {
      for (var j = 0; j < tableDayItems.length; j++) {
        onDayItemClick(tableDayItems[j]);
      }
    }

    tableToggle.addEventListener('click', function () {
      if (tableToggle.classList.contains('timetable__toggle--closed')) {
        tableToggle.classList.remove('timetable__toggle--closed');
        tableToggle.classList.add('timetable__toggle--opened');
        tableDayItems[index].classList.remove('timetable__day-item--active');

        hideFieldLists();
        showDayItmes();
      } else {
        tableToggle.classList.add('timetable__toggle--closed');
        tableToggle.classList.remove('timetable__toggle--opened');
        tableDayItems[index].classList.add('timetable__day-item--active');

        showFieldLists();
        hideDayItmes();
      }
    });

    btnNext.addEventListener('click', function () {
      position -= movePosition;

      btnNext.classList.add('timetable__scroll-item--active');
      btnPrev.classList.remove('timetable__scroll-item--active');

      setPosition();
    });

    btnPrev.addEventListener('click', function () {
      position += movePosition;

      btnPrev.classList.add('timetable__scroll-item--active');
      btnNext.classList.remove('timetable__scroll-item--active');

      setPosition();
    });
  }
})();
