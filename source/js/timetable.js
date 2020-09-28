'use strict';

(function () {
  var timeTable = document.querySelector('.timetable__list');
  var tableFields = timeTable.querySelectorAll('.timetable__field');
  // var tableCapRows = timeTable.querySelectorAll('.timetable__cap-row');
  var tableCapColls = timeTable.querySelectorAll('.timetable__cap-coll');
  // var tableColls = timeTable.querySelectorAll('.timetable__list td');
  var tableRows = timeTable.querySelectorAll('tr');

  var unsetActiveFieldElement = function () {
    for (var j = 0; j < tableFields.length; j++) {
      tableFields[j].classList.remove('timetable__field--active');
    }
  };

  var setActiveFieldElement = function (onClickTab) {
    onClickTab.classList.add('timetable__field--active');
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
      onHoverRow
          .parentNode
          .querySelector('.timetable__cap-row')
          .classList
          .add('timetable__cap-row--hover');

      tableCapColls[onHoverRow.cellIndex - 1]
          .classList
          .add('timetable__cap-coll--hover');

    });
    onHoverRow.addEventListener('mouseout', function () {
      onHoverRow
          .parentNode
          .querySelector('.timetable__cap-row')
          .classList
          .remove('timetable__cap-row--hover');

      tableCapColls[onHoverRow.cellIndex - 1]
          .classList
          .remove('timetable__cap-coll--hover');
    });
  };

  // Передает элемент таба по клику
  for (var j = 0; j < tableFields.length; j++) {
    onClickChange(tableFields[j]);
    onHoverRowChange(tableFields[j]);
  }

  // Передает элемент таба по клику
  // for (var i = 0; i < tableRow.length; i++) {
  //   onHoverChange(tableRow[i]);
  //   onHoverChange(tableField[j], j);
  // }
})();
