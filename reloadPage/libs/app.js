"use strict";
angular.module("myApp", ['ngRoute']);
angular.module("myApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/welcome", {
        templateUrl: "views/welcome.html",
        controller: "WelcomeCtrl",
        controllerAs: "vm"
    })
    .otherwise ({
        redirectTo: "/welcome"
    })
}]);
angular.module("myApp").controller("WelcomeCtrl", ['$route', function($route){
   
    this.details ="Hello ... I am from Welcome Page ....!!";
    this.reload = function(){
        $route.reload("/welcome");
    }
}]);