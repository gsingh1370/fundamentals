
Controllers

Use controllers to:
Set up the initial state of the $scope object.
Add behavior to the $scope object.
Do not use controllers to:

Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
Format input — Use angular form controls instead.
Filter output — Use angular filters instead.
Share code or state across controllers — Use angular services instead.
Manage the life-cycle of other components (for example, to create service instances).

Any methods assigned to the scope are available in the template/view, and can be invoked via angular expressions and ng event handler directives


