"use strict";
angular.module("myApp", ['ngRoute']);
angular.module("myApp").config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when("/welcome", {
        templateUrl: "views/welcome.html",
        controller: "WelcomeCtrl",
        controllerAs: "vm"
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        controllerAs: "vm"
    })
    .otherwise( {
        redirectTo: "/welcome"
    })
}]);
angular.module("myApp").controller("WelcomeCtrl",[function(){
    this.details = "I am from Welcome Page";
}]);
angular.module("myApp").controller("AboutCtrl",[function(){
    this.details = "I am from About Page";
}]);