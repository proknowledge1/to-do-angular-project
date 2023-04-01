var app = angular.module('myTodoListApp', []);
app.controller('todoController', function($scope) {
// Initialize the list of todos
$scope.todos = [];
// Add a new todo item to the list
$scope.addTodo = function() {
if ($scope.newTodoText) {
$scope.todos.push({
text: $scope.newTodoText,
done: false
});
$scope.newTodoText = '';
}
};
// Remove completed todo items from the list
$scope.removeCompleted = function() {
for (var i = $scope.todos.length - 1; i >= 0; i--) {
if ($scope.todos[i].done) {
$scope.todos.splice(i, 1);
}
}
};
// Update an existing todo item in the list
$scope.updateTodo = function(todo) {
todo.editing = false;
todo.text = todo.updatedText;
};
// Enable editing mode for a todo item
$scope.editTodo = function(todo) {
todo.editing = true;
todo.updatedText = todo.text;
};
});
app.directive('confirmClick', ['$window', function($window) {
return {
restrict: 'A',
link: function(scope, element, attr) {
var msg = attr.confirmClick || 'Are you sure?';
var clickAction = attr.ngClick;
element.bind('click', function(event) {
if ($window.confirm(msg)) {
scope.$eval(clickAction);
}
});
}
};
}]);