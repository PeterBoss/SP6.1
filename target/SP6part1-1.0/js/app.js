var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "person-table.html"})
        .when("/new-person", {templateUrl: "new-person.html"})
        .when("/:id", {templateUrl: "person-details.html", controller: "PersonController"});
});

app.controller("PersonController", ["$scope", "$routeParams", function ($scope, $routeParams) {
    $scope.currentId = $routeParams.id;
    $scope.person = {}; 
    $scope.persons = [
        {id: 1, name: "Jens", age: 18},
        {id: 2, name: "Peter", age: 23},
        {id: 3, name: "Hanne", age: 23}
    ];
    $scope.getPerson = function (id) {
        for (var i = 0; i < $scope.persons.length; i++) {
            if ($scope.persons[i].id == id) {  // doesnt work with ===,  something about type conversion?
                return $scope.persons[i];
            } 
        }
    };

}]);