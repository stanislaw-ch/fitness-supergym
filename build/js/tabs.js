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
