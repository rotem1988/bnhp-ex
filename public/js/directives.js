'use strict';

angular.module('myApp.directives', ['myApp.RecursionHelper'])
    .directive('comments', ['RecursionHelper',function(RecursionHelper){
        return {
            restrict: 'E',

            templateUrl : 'templates/comment.html',
            scope : {
                item: "="
            },
            compile: function(element) {
                return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){

                });
            }

        }
    }]);
