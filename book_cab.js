var app = angular.module("mycab",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl : "home.html",
            controller : "setReminder"
        })


});

app.controller("setReminder",["$http","$scope",function($http,$scope) {

   $scope.click = function() {

       // var latlngStr = $scope.InputLatLon.split(',', 2);
       // var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
       /*  $http({
        //   method : "get",
        url : "https://api.uber.com/v1.2/estimates/time?start_latitude=37.7752315&start_longitude=-122.418075",
        headers: {
        Authorization: "Token " + "ECWcv5urK26d-pz-OHio9c9ovHpahx4UBbQIzMTi"
        },
        }).then(function mySucces(response) {
        */
       $http({
           method : "get",

       url : "map.php"

       }).then(function success(response) {
console.log(response.data)

       })


   }


}]);