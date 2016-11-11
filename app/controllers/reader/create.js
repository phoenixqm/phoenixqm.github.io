'use strict';

angular.module('app').controller('ReaderCreateController', function ReaderCreateController() {
  var vm = this;
  vm.submit = function (form) {
    console.log(form);

  };
});
