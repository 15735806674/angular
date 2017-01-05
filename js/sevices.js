angular.module("sevices",[])
.factory("indexData",function($http){
    return $http({url:"js//1.txt"})
})