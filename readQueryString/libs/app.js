"use strict";
angular.module("myApp", ['ngRoute']);
angular.module("myApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/welcome", {
        templateUrl:"views/welcome.html",
        controller:"WelcomeCtrl",
        controllerAs: "vm"
    })
    .otherwise({
        redirectTo : "/welcome"
    })
}]);
angular.module("myApp").controller("WelcomeCtrl", ['$route', function($route){
    var vm = this;
    vm.params = $route.current.params;
   //alert(params.firstName);
    vm.details = "Hello .. I am from Welcome Page .....";
}]);