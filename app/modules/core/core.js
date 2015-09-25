/*
     @Author : KGJ 
     @date   : Sept. 19th 2015
     @brief  : core.js javascript script
*/

(function() {

    /* list all the dependancies */
    var core = angular.module('core', ['blog', 'chat']);

    core.controller('coreController', ['$scope', 
    	function($scope) { 
    		console.log("starting core.js module"); 
    	}])
})();
