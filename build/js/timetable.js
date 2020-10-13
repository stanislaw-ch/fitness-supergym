'use strict';

(function () {
  var MARGIN = 8;
  var MARGIN_COUNT = 3;
  var COLLS_COUNT_TO_MOVE = 3;
  var ITEM_WIDTH = 146;

  var timeTable = document.querySelector('.timetable__table-wrapper');
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
    } else {
      showDayItmes();
      showFieldLists();
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

  for (var j = 0; j < tableDayItems.length; j++) {
    onDayItemClick(tableDayItems[j]);
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
})();
