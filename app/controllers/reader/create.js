'use strict';

angular.module('app').controller('ReaderCreateCtrl', function ReaderCreateCtrl(Reader) {
  var vm = this;
  console.log(Reader);
  vm.submit = function (form) {
    console.log(form);
    Reader.save(form,
      function (reader) {
        console.log(reader);
      },
      function (resp) {
        console.log(resp.data);
      });
  };
});
