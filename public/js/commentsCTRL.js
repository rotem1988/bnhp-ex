//(function () {
//    'use strict';
//
//    angular
//        .module('myApp')
//        .controller('commentsCTRL', commentsCTRL);
//
//    commentsCTRL.$inject['$scope','Comments'];
//
//    function commentsCTRL($scope, Comments){
//        var items = Comments.getList('777AAA');
//        $scope.items = Comments.getList('777AAA');
//
//    }
//})();

angular.module('myApp').controller('commentsCTRL', ['$scope','Comments','$q', function($scope, Comments,$q){
    var futureItems = Comments.getList('777AAA');
    futureItems.then(function(data){
        console.log(data);
        $scope.items = data;
    });

    $scope.replayClick= function(item){
        var comment = {txt : 'text text text text'};
        item.comments.push(comment);

    }

}]);







