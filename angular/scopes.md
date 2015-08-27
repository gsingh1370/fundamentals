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

When child scopes are no longer needed, it is the responsibility of the child scope creator to destroy them via scope.$destroy() API. 

At the end of $apply, Angular performs a $digest cycle on the root scope, which then propagates throughout all child scopes. During the $digest cycle, all $watched expressions or functions are checked for model mutation and if a mutation is detected, the $watch listener is called

When an external event (such as a user action, timer or XHR) is received, the associated expression must be applied to the scope through the $apply() method so that all listeners are updated correctly

In most cases, directives and scopes interact but do not create new instances of scope. However, some directives, such as ng-controller and ng-repeat, create new child scopes and attach the child scope to the corresponding DOM element. You can retrieve a scope for any DOM element by using an angular.element(aDomElement).scope() method cal

Dirty checking the scope for property changes is a common operation in Angular and for this reason the dirty checking function must be efficient. Care should be taken that the dirty checking function does not do any DOM access, as DOM access is orders of magnitude slower than property access on JavaScript object

Dirty checking can be done with three strategies: By reference, by collection contents, and by value.
scope.$watch - efficient
scope.$watchCollection - expensive operation
scope.$watch (watchExpression, listener, true) - expensive operation, most powerful watch


For any DOM element you can do this:

angular.element(domElement).scope() to get the current scope for the element
angular.element(domElement).injector() to get the current app injector
angular.element(domElement).controller() to get a hold of the ng-controller instance.
From the injector you can get a hold of any service in angular application. Similarly from the scope you can invoke any methods which have been published to it.

Keep in mind that any changes to the angular model or any method invocations on the scope need to be wrapped in $apply() like this:

$scope.$apply(function(){
  // perform any model changes or method invocations here on angular app.
});

