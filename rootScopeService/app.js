"use strict";
angular.module("myApp",[]);
angular.module("myApp").run(function($rootScope){
   $rootScope.baseValue = "This message is from Base Scope($rootScope)" ;
   $rootScope.sayHello = function(){
       alert("Hello... this alert is from Base Scope($rootScope)");
   }
});
angular.module("myApp").controller("mainCtrl",['$scope', function($scope){
    
}]);