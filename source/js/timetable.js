'use strict';

(function () {
  var timeTable = document.querySelector('.timetable__table-wrapper');
  var tableFieldItems = timeTable.querySelectorAll('.timetable__field-item');
  var tableCollsContainer = timeTable.querySelector('.timetable__colls-container');
  var tableDayItems = timeTable.querySelectorAll('.timetable__day-item');
  var tableTimeItems = timeTable.querySelectorAll('.timetable__time-item');
  var tableDayItemActive = timeTable.querySelector('.timetable__day-item--active');
  var tableFieldList = timeTable.querySelectorAll('.timetable__field-list');

  var tableToggle = timeTable.querySelector('.timetable__toggle');
  var tableFieldLists = timeTable.querySelectorAll('.timetable__field-list');

  var index = Array.from(tableDayItems).indexOf(tableDayItemActive);

  if (document.body.clientWidth <= 768) {
    for (var i = 0; i < tableDayItems.length; i++) {
      if (!tableDayItems[i].classList.contains('timetable__day-item--active')) {
        tableDayItems[i].style.display = 'none';
      }
    }
  }

  tableToggle.addEventListener('click', function () {
    if (tableToggle.classList.contains('timetable__toggle--closed')) {
      tableToggle.classList.remove('timetable__toggle--closed');
      tableToggle.classList.add('timetable__toggle--opened');
      tableDayItems[index].classList.remove('timetable__day-item--active');

      Array.from(tableFieldLists).forEach(function (field) {
        field.style.display = 'none';
      });

      Array.from(tableDayItems).forEach(function (field) {
        if (!field.classList.contains('timetable__day-item--active')) {
          field.style.display = 'flex';
        }
      });

    } else {
      tableToggle.classList.add('timetable__toggle--closed');
      tableToggle.classList.remove('timetable__toggle--opened');
      tableDayItems[index].classList.add('timetable__day-item--active');

      Array.from(tableFieldLists).forEach(function (field) {
        field.style.display = 'block';
      });

      Array.from(tableDayItems).forEach(function (field) {
        if (!field.classList.contains('timetable__day-item--active')) {
          field.style.display = 'none';
        }
      });
    }
  });

  var removeDayItemClassActive = function () {
    tableDayItems[index].classList.remove('timetable__day-item--active');
  };

  var addDayItemClassActive = function (dayItem) {
    dayItem.classList.add('timetable__day-item--active');

    for (var g = 0; g < tableDayItems.length; g++) {
      if (!tableDayItems[g].classList.contains('timetable__day-item--active')) {
        tableDayItems[g].style.display = 'none';
      }
    }

    var indexOfDayItem = (
      Array
          .from(tableDayItems)
          .indexOf(dayItem)
    );

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

  for (var j = 0; j < tableDayItems.length; j++) {
    onDayItemClick(tableDayItems[j]);
  }

  var position = 0;
  // var itemsCount = tableFieldItems.length / 4;
  // var itemWidth = tableTimeItems.clientWidth - 66 + 16;
  var movePosition = 463;

  var btnPrev = document.querySelector('.timetable__scroll-item--prev');
  var btnNext = document.querySelector('.timetable__scroll-item--next');

  var setPosition = function () {
    tableCollsContainer.style.transform = 'translateX(' + position + 'px)';
  };

  btnNext.addEventListener('click', function () {
    // var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= movePosition;

    btnNext.classList.add('timetable__scroll-item--active');
    btnPrev.classList.remove('timetable__scroll-item--active');

    setPosition();
    // checkBtns();
  });

  btnPrev.addEventListener('click', function () {
    // var itemsLeft = Math.abs(position) / itemWidth;

    position += movePosition;

    btnPrev.classList.add('timetable__scroll-item--active');
    btnNext.classList.remove('timetable__scroll-item--active');

    setPosition();
    // checkBtns();
  });

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
          .from(tableFieldList)
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
          .from(tableFieldList)
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

  // Передает элемент таба по клику
  for (var j = 0; j < tableFieldItems.length; j++) {
    onClickChange(tableFieldItems[j]);
    onHoverRowChange(tableFieldItems[j]);
  }
})();
