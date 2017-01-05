angular.module("ctrls",["sevices"])
.controller("index",["$scope","$http","indexData",function($scope,$http,indexData){
    indexData.then(function(data){
        $scope.data=data.data;
    })
}])