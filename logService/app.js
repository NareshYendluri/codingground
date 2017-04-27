"use strict";
angular.module("myApp",[]);
angular.module("myApp").controller("logService", ['$log', function($log){
    var vm = this;
    vm.logData = function(data){
        $log.log(data);
    }
    vm.infoData = function(data){
        $log.info(data);
    }
    vm.warnData = function(data){
        $log.warn(data);
    }
     vm.errorData = function(data){
        $log.error(data);
    }
     vm.debugData = function(data){
        $log.debug(data);
    }
}]);