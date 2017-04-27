"use strict";
angular.module("myApp",[]);
angular.module("myApp").controller("mainCtrl",['$window', '$document', function($window, $document){
    this.useWindowService =  function(){
        $window.alert("Hello, from Window Service");
    }
    this.useDocService = function(){
        $document[0].bgColor = 'blue';
    }
}]);