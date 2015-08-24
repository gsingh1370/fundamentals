## Object-Oriented Programming
### What is an interface? Can you give an example of when it might be used?

An interface is a contract between classes that implement it which requires that all methods defined by the interface must be implemented before the class will compile. By implementing an interface, a class formalizes the behavior it promises to provide through the methods it exposes. The caller knows which behavior will be available while the implementer knows what to implement.

Interfaces are commonly used in plug-n-play architectures where components can be interchanged at will. A great example of this is JDBC API, which exposes several interfaces like Driver, Connection, Statement, and ResultSet for accessing and processing data stored in a data source. Database vendors provide drivers which implement the common set of interfaces defined by the JDBC API such that the end user of the driver need not to know the internal implementation details or specifics of the database software. Instead, they may program to the JDBC interface, giving them the flexibility to later change to a different database simply by switching to the corresponding JDBC database driver.

### What is inheritance? Can you give an example of when it might be used?
Inheritance is the process of creating a new class from a existing one. The new class may inherit the attributes and behaviors of the base class. The derived class may also contain its own additional methods and fields which differentiates it from the base class.

Inheritance is particularly useful when different classes exhibit an "is a" relationship where they share traits in common. A good example of this are the classes BigDecimal, Double, Float, and Integer which are all different representations of  numeric values and they all extend from the Number class.
