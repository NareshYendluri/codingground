"use strict";
angular.module("myApp", ['ngResource']);
angular.module("myApp").factory('User', function($resource){
    var url = "https://jsonplaceholder.typicode.com/posts";
    return $resource(url, {id:'@id'});
});
angular.module("myApp").controller("mainCtrl",['User', function(User){
    var vm =this;
    vm.users = [];
    vm.selectedUser = null;
    
    vm.userId = "";
    vm.title = "";
    vm.body = "";
    
    vm.getUsers = function(){
       vm.users = User.query();
    };
    vm.getUser = function(id){
       vm.users = User.get({id:id});
    };
    vm.deleteUser = function(id){
       vm.users = User.delete({id:id});
       vm.getUsers();
    };
    vm.addUser = function(){
        var usr = new User({userId: vm.userId, title: vm.title, body:vm.body});
        usr.$save(function(newUser, responseHeader){
           vm.selectedUser = newUser;
           vm.getUsers();
       });
    };
    vm.getUsers();
}]);
