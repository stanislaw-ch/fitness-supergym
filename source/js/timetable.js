'use strict';

(function () {
  var timeTable = document.querySelector('.timetable__list-wrapper');
  var tableFields = timeTable.querySelectorAll('.timetable__field-item');
  var tableColl = timeTable.querySelector('.timetable__colls-container');
  // var tableCapRows = timeTable.querySelectorAll('.timetable__cap-row');
  var tableCapColls = timeTable.querySelectorAll('.timetable__day-item');
  var tableColls = timeTable.querySelectorAll('.timetable__field-list');
  var tableRows = timeTable.querySelectorAll('.timetable__time-item');

  var position = 0;
  // var itemsCount = tableFields.length / 4;
  // var itemWidth = tableRows.clientWidth - 66 + 16;
  var movePosition = 463;

  var btnPrev = document.querySelector('.timetable__scroll-item--prev');
  var btnNext = document.querySelector('.timetable__scroll-item--next');

  var setPosition = function () {
    tableColl.style.transform = 'translateX(' + position + 'px)';
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
    for (var j = 0; j < tableFields.length; j++) {
      tableFields[j].classList.remove('timetable__field-item--active');
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
          .from(tableColls)
          .indexOf(onHoverRow.parentNode));
      var indexRow = (Array
          .from(onHoverRow.parentNode.querySelectorAll('.timetable__field-item'))
          .indexOf(onHoverRow));

      tableRows[indexRow]
          .classList
          .add('timetable__time-item--hover');

      tableCapColls[indexColl]
          .classList
          .add('timetable__day-item--hover');

    });
    onHoverRow.addEventListener('mouseout', function () {
      var indexColl = (Array
          .from(tableColls)
          .indexOf(onHoverRow.parentNode));
      var indexRow = (Array
          .from(onHoverRow.parentNode.querySelectorAll('.timetable__field-item'))
          .indexOf(onHoverRow));

      tableRows[indexRow]
          .classList
          .remove('timetable__time-item--hover');

      tableCapColls[indexColl]
          .classList
          .remove('timetable__day-item--hover');
    });
  };

  // Передает элемент таба по клику
  for (var j = 0; j < tableFields.length; j++) {
    onClickChange(tableFields[j]);
    onHoverRowChange(tableFields[j]);
  }
})();
