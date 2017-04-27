"use strict";
angular.module("myApp",[]);
angular.module("myApp").filter("dashes", function(){
    return function(value){
        var val = value.replace(/\s/g, "-");
        return val;
    }
});
angular.module("myApp").controller("filterService", ['$filter', function($filter){
    var vm = this;
    var dashFilter = $filter("dashes");
    vm.txtFirst = "This is the first sentense, dashes filter applied from Markup";
    vm.txtSecond = dashFilter("This is the Second sentense, dashes filter applied from Code");
    vm.applyFilter = function(){
        vm.txtThird = dashFilter(vm.fldInput);
    }
}]);