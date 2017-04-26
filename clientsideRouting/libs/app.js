"use strict";
angular.module("myApp", ['ngRoute']);
angular.module("myApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/welcome", {
        templateUrl:"views/welcome.html",
        controller:"WelcomeCtrl",
        controllerAs: "vm",
        data : {
            customProp1: "Custome Value#1",
            customProp2: "Custome Value#2"
        }
    })
    .when("/about", {
        templateUrl:"views/about.html",
        controller:"AboutCtrl",
        controllerAs: "vm",
        data : {
            customProp3: "Custome Value#3",
            customProp4: "Custome Value#4"
        }
    })
    .otherwise({
        redirectTo:"/welcome"
    })
}]);
angular.module("myApp").controller("NavigationCtrl",['$location',function($location){
    this.goto = function(path){
        $location.path(path);
    }
}]);
angular.module("myApp").controller("WelcomeCtrl",['$route', function($route){
    this.details = "Hello, from WelcomeController";
    this.data = $route.current.data;
}]);
angular.module("myApp").controller("AboutCtrl",['$route', function($route){
    this.details = "Hello, from AboutController";
    this.data = $route.current.data;
}]);