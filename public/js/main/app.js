var app = angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope','todoService',function($scope, todoService){
    $scope.appName = "Todo dashboard";

    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    // Load data from api
    todoService.get().then(function(res){
        $scope.todos = res.data;
        $scope.loading = false;
    });

    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };

        todoService.create(todo).then(function(res){
            $scope.todos = res.data;
            $scope.formData.text = "";
            $scope.loading = false;
        });
    };

    $scope.updateTodo = function(todo){
        console.log("Update todo: ", todo);
        $scope.loading = true;

        todoService.update(todo).then(function(res){
            $scope.todos = res.data;
            $scope.loading = false;
        });
    };

    $scope.deleteTodo = function(todo){
        console.log("Delete todo: ", todo);
        $scope.loading = true;
        todoService.delete(todo._id).then(function(res){
            $scope.todos = res.data;
            $scope.loading = false;
        })
    };

}]);