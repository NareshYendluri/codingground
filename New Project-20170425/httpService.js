"use strict";
angular.module("myApp", []);
angular.module("myApp").service("GetStates", function($http){
    this.states = [{name:'India', alpha2Code:'IND'}, {name:'Nepal', alpha2Code:'NPL'}];
    this.getStates = function(){
        var url = "https://restcountries.eu/rest/v2/name/ind";
        //alert(url);
        $http.get(url).then(
            function(response){
                //alert(response);
                this.states = response.data;
            }.bind(this),
            function(response){
                console.log(response);
            }
        )
    }
});
angular.module("myApp").controller("mainCtrl", ['GetStates', function(GetStates){
     this.service = GetStates;
    

}]);