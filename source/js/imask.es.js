'use strict';

(function () {
  var element = document.getElementById('phone');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  /* eslint-disable*/
  var mask = IMask(element, maskOptions);
})();
