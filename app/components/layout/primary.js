angular.module('blogApp').controller('BlogPrimaryController', function LayoutFooterCtrl($scope, $http) {
    var vm = $scope.vm = {};

    var A = [];
    var postURL = "posts/post_list.txt";

    $http({
      method: 'GET',
      url: postURL
    }).then(function successCallback(response) {
        // console.log(response.data);
        processData(response.data);
        $scope.posts = A;
      }, function errorCallback(response) {
        alert("can not get post_list.txt!");
      });


    // Let's process the data from the data file
    function processData(data) {
        var lines = data.split(/\r\n|\n/);

        var headings = lines[0].split('|');
        for (var i = 0; i < headings.length; i++) {
            headings[i] = trim(headings[i]);
        }

        for (var j = 1; j < lines.length; j++) {
            var obj = {};
            var values = lines[j].split('|');
            for (var k = 0; k < values.length; k++) {
                obj[headings[k]] = trim(values[k]);
            }


            if (obj.key.indexOf("*") == 0) {
                // it is a draft now
                obj.key = obj.key.substring(1);
                A.push(obj); // not show in list
            } else {
                A.push(obj);
            }

        }

        console.log(A);

    }



    // $.ajax({
    //     type: "GET",
    //     url: postURL,
    //     dataType: "text",
    //     success: function(data) {
    //         console.log(data);
    //         processData(data);
    //         fillItems();
    //
    //     }
    // });


    // function fillItems(){

    //     var template = $("#itemtemplate");

    //     for (var i = 0; i < A.length; i++) {
    //         var obj = A[i];
    //         var nitem = template.clone();

    //         nitem.attr("id", "_item_" + obj.key);
    //         nitem.find("h2.entry-title > a").html(obj.title);
    //         nitem.find("h2.entry-title > a").attr("href", "post.html?key=" + obj.key);
    //         nitem.find("time.published").html(obj.time);
    //         nitem.find("div.entry-content > p").html(obj.summary);
    //         nitem.css("display", "block");
    //         template.parent().append(nitem);
    //     }
    // }

});


angular.module('blogApp').directive('blogPrimary', function LayoutFooter() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'components/layout/primary.html',
    controller: 'BlogPrimaryController'
  };
});

