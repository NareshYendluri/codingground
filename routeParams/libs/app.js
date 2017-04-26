"use strict";
angular.module("myApp", ['ngRoute']);
angular.module("myApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/product/:productId", {
        templateUrl: "views/product.html",
        controller: "ProductCtrl",
        controllerAs: "vm"
    })
    .when("/welcome", {
        templateUrl: "views/welcome.html",
        controller: "WelcomeCtrl",
        controllerAs: 'vm'
    })
}]);
angular.module("myApp").controller("ProductCtrl", ['$routeParams', function($routeParams){
    this.productId = $routeParams.productId;
    this.details = "Hello ... I am from Product Page";
}]);
angular.module("myApp").controller("WelcomeCtrl", [function(){
    this.details = "Hello ... I am from Welcome Page";
}]);