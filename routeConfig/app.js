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
    .when("/contact", {
        templateUrl: "views/contact.html",
      controller: "AboutCtrl",
      controllerAs: "vm"
    })
}]);
angular.module("myApp").controller("AboutCtrl",[function(){
    this.details = "Hello.. I am from About Controller";
}]);
angular.module("myApp").controller("ContactCtrl",[function(){
    this.details = "Hello.. I am from Contact Controller";
}]);
angular.module("myApp").controller("WelcomeCtrl",[function(){
    this.details = "Hello.. I am from Welcome Controller";
}]);
