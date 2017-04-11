## Performance

* The lookup time for properties that are high up on the prototype chain can have a negative impact on performance, and this may be significant in code where performance is critical. Additionally, trying to access nonexistent properties will always traverse the full prototype chain.

* Also, when iterating over the properties of an object, every enumerable property that is on the prototype chain will be enumerated.

* To check whether an object has a property defined on itself and not somewhere on its prototype chain, it is necessary to use the hasOwnProperty method which all objects inherit from Object.prototype.

* hasOwnProperty is the only thing in JavaScript which deals with properties and does not traverse the prototype chain.

* Note: It is not enough to check whether a property is undefined. The property might very well exist, but its value just happens to be set to undefined.


## Other
* the this keyword. Used inside a function, this refers to the current object. What that actually means is specified by the way in which you called that function. If you called it using dot notation or bracket notation on an object, that object becomes this. If dot notation wasn't used for the call, this refers to the global object.
