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
