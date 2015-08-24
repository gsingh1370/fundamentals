React
=====


## Displaying data

* The way we are able to figure this out is that React does not manipulate the DOM unless it needs to. It uses a fast, internal mock DOM to perform diffs and computes the most efficient DOM mutation for you.

* One limitation: React components can only render a single root node. If you want to return multiple nodes they must be wrapped in a single root.

* We strongly believe that components are the right way to separate concerns rather than "templates" and "display logic." We think that markup and the code that generates it are intimately tied together. Additionally, display logic is often very complex and using template languages to express it becomes cumbersome. We've found that the best solution for this problem is to generate HTML and component trees directly from the JavaScript code such that you can use all of the expressive power of a real programming language to build UIs.

## JSX

* Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like className and htmlFor, respectively.

### Spread Atrributes

Now you can use a new feature of JSX called spread attributes:

  var props = {};
  props.foo = x;
  props.bar = y;
  var component = <Component {...props} />;
The properties of the object that you pass in are copied onto the component's props.

You can use this multiple times or combine it with other attributes. The specification order is important. Later attributes override previous ones.
