"use strict";

var tabsButton = document.querySelectorAll('.js-tabs-button');

if (tabsButton) {
  var tabsSwitch = function tabsSwitch(e) {
    tabsButton.forEach(function (item) {
      item.classList.remove('active');
    });
    document.querySelectorAll('.tabs__inner-item').forEach(function (item) {
      item.classList.remove('active');
    });
    var dataTab = e.currentTarget.getAttribute('data-tab');
    document.getElementById("".concat(dataTab)).classList.add('active');
    e.currentTarget.classList.add('active');
  };

  tabsButton.forEach(function (item) {
    item.addEventListener('click', tabsSwitch);
  });
}
//# sourceMappingURL=tabs.dev.js.map
