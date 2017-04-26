"use strict";
angular.module("myApp", ['ngRoute']);
angular.module("myApp").config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/welcome", {
        template: "<div><p>This is <strong>Welcome</strong> page</p><p>{{vm.details}}</p></div>",
        controller:"WelcomeCtrl",
        controllerAs: "vm"
    })
    .when("/about", {
        template: "<div><p>This is <strong>About</strong> page</p><p>{{vm.details}}</p></div>",
        controller:"AboutCtrl",
        controllerAs: "vm"
    })
    .otherwise({
        redirectTo: "/welcome"
    })
}]);
angular.module("myApp").controller("WelcomeCtrl",[function(){
    this.details = "Hello, from WelcomeController";
}]);
angular.module("myApp").controller("AboutCtrl",[function(){
    this.details = "Hello, from AboutController";
}]);