Event Propogation:-
html:-
```html
<div ng-controller="EventController">
  Root scope <tt>MyEvent</tt> count: {{count}}
  <ul>
    <li ng-repeat="i in [1]" ng-controller="EventController">
      <button ng-click="$emit('MyEvent')">$emit('MyEvent')</button>
      <button ng-click="$broadcast('MyEvent')">$broadcast('MyEvent')</button>
      <br>
      Middle scope <tt>MyEvent</tt> count: {{count}}
      <ul>
        <li ng-repeat="item in [1, 2]" ng-controller="EventController">
          Leaf scope <tt>MyEvent</tt> count: {{count}}
        </li>
      </ul>
    </li>
  </ul>
</div>
Script:-
```
```js
angular.module('eventExample', [])
.controller('EventController', ['$scope', function($scope) {
  $scope.count = 0;
  $scope.$on('MyEvent', function() {
    $scope.count++;
  });
}]);
```
Only model modifications which execute inside the $apply method will be properly accounted for by Angular. For example if a directive listens on DOM events, such as ng-click it must evaluate the expression inside the $apply method.

after evaluating the expression, the $apply method performs a $digest. In the $digest phase the scope examines all of the $watch expressions and compares them with the previous value. This dirty checking is done asynchronously. This means that assignment such as $scope.username="angular" will not immediately cause a $watch to be notified, instead the $watch notification is delayed until the $digest phase. This delay is desirable, since it coalesces multiple model updates into one $watch notification as well as guarantees that during the $watch notification no other $watches are running. If a $watch changes the value of the model, it will force additional $digest cycle.

