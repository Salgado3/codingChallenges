_What is React.js ?_ "A Javascript library for building user interfaces."

React is a library that allows devs to build reusable pieces of code (components) in a quick and easy manner. A lot of popular websites are built with React on top (Netflix, Fb, instagram, Scotch IO)

_Why would you use React.js?_ Scalability, open sources, allows for parts of user interface to render without refreshing entire page, and all in all, it's simple.

_What are components ?_ "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen." - React Docs

Components are reuseable pieces of code. They are very useful for quick modifications to the front end while maintaining uniformity.\*

_What is JSX ?_ "JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements." -W3Schools

JSX is not required to be used by React, but it does make it easier. It allows devs to have a centralized location to render components in the Dom.

_What are props ?_ "Props are arguments passed into React components. Props are passed to components via HTML attributes." -W3 School
Props, short for properties are are immutable parts of components. Their "options" if you think about a car.

_What is state ?_ The state object is where you store property values that belongs to the component. Can change over time.

_What are the differences btw/ functional and class based components ?_ a functional component is just a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React.Component which has a render method. (https://www.twilio.com/blog/react-choose-functional-components)

Give an example of a functional and class based component ?
functional based:
import React from "react";

const FunctionalComponent = () => {
return <h1>Hello, world</h1>;
};

class based:
import React, { Component } from "react";

class ClassComponent extends Component {
render() {
return <h1>Hello, world</h1>;
}
}

---

## _What are React Hooks ?_ Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. (https://reactjs.org/docs/hooks-overview.html)

## _How does useState work ?_ In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”. - React Docs

_Give an example of useState ?_

https://www.robinwieruch.de/react-lift-state (does a better job explaining that I can.... for now!)

https://reactjs.org/docs/lifting-state-up.html
