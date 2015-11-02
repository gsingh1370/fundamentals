Closures
========

A closure (or function closure) is a block of code which meets three criteria. It can, as well-described by Paul Cantrell:

* be passed around as a value

* be executed on demand by anyone who has that value

* refer to variables from the context in which it was created (i.e. it is closed with respect to variable access, in the mathematical sense of the word "closed").

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.

* a closure is the local variables for a function — kept alive after the function has returned, or
* a closure is a stack-frame which is not deallocated when the function returns (as if a 'stack-frame' were malloc'ed instead of being on the stack!).

The magic is that in JavaScript a function reference also has a secret reference to the closure it was created in — similar to how delegates are a method pointer plus a secret reference to an object.

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.

## Resources
* https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
* http://www.sitepoint.com/javascript-closures-demystified/
* http://javascriptissexy.com/understand-javascript-closures-with-ease/