"use strict";
angular.module("myApp", []);
angular.module("myApp").service("AppModel", function($q , $timeout){
    var users = [{name:'John Smith', id:123}, {name:'Jude Joe', id:456}, {name:'Naresh Yendluri', id:789}];
    this.getUsersSync = function(){
        //alert("Test 22");
        return users;
    };
    this.getUsersAsyncBad = function(){
        $timeout(function(){
            return users;
        }, 3000)
    }
    this.getUsersAsync = function(success){
        var defer = $q.defer();
        $timeout(function(){
            if(success){
                defer.resolve(users);
            }else{
              defer.reject(new Error("Some error occurred")) ;
            }
        }, 3000);
        return defer.promise;
    }
});
angular.module("myApp").controller("mainCtrl",['AppModel', function(AppModel){
     var vm = this;
     vm.model = AppModel;
     vm.users = [];
     vm.getUsersSync = function(){
         //alert("test 11");
        vm.users = vm.model.getUsersSync();
     }
     vm.getUsersAsyncBad = function(){
         vm.users = vm.model.getUsersAsyncBad();
     }
     vm.getUsersAsync = function(flag){
         vm.model.getUsersAsync(flag).then(
             function(response){
                 vm.users = response;
             }
             ,function(response){
                 console.log(response)
             })
     }
}]);