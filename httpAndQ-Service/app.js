 "use strict";
 angular.module("myApp", []);
 angular.module("myApp").service("User", function($http, $q){
    var url = "https://jsonplaceholder.typicode.com/posts/";
    this.getUser = function(id){
        var defer = $q.defer();
        $http.get(url+id).then(function(response){
                defer.resolve(response.data);
            }.bind(this),
            function(response){
                defer.reject({error:response.data, status:response.status});
            }
        );
        return defer.promise;
    };
    
    this.getSomeUsersAtOnce = function(ids){
        var promises = [];
        ids.forEach(function(id){
            var promise = this.getUser(id);
            promises.push(promise);
        }.bind(this));
        return $q.all(promises);
    };
 });
 angular.module("myApp").controller("mainCtrl",['User', function(User){
    var vm = this;
    vm.model = User;
    vm.users = [];
    
    vm.getUser = function(id){
        //alert(id);
        vm.model.getUser(id).then(
            function(data){
                vm.users.push(data);
            }
        )
    };
    vm.getSomeUsers = function(){
        vm.getUser("1");
        vm.getUser("2");
        vm.getUser("3");
        vm.getUser("4");
        vm.getUser("5");
    };
    vm.getSomeUsersAtOnce = function(){
        vm.model.getSomeUsersAtOnce(["1","2","3","4","5"]).then(function(results){
            vm.users = vm.users.concat(results);
        });
    }
 }]);
 
 
 
 
 
 
 
 
 
 
 
 
