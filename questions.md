### 1. What is the difference between Component and PureComponent? give an example where it might break my app.
    Pure Components does a Shallow Comparision on the props and state objects, if compared to a Component.
    A situation where it's possible to break the App is where you need some detailed objects (props, states) comparision before 
    the re-render.

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

### 3. Describe 3 ways to pass information from a component to its PARENT.
    Using props
    Using Context API
    Using State management tools (Eg: Redux)

### 4. Give 2 ways to prevent components from re-rendering.
    Using useMemo
    Using useRef

### 5. What is a fragment and why do we need it? Give an example where it might break my app.
    A Fragment works as a wrapper to ensure your component has only one child (as React requires).
### 6. Give 3 examples of the HOC pattern.
    searchBar / searchBarLogged / searchBarAdmin (You can reuse the searchBar as a HOC for all the others)
### 7. what's the difference in handling exceptions in promises, callbacks and async...await.
    There are multiple ways for rendering exceptions. Some commons are:
    - promises:
         works using a chain of methods (then, catch, finally).
    - callbacks: 
        we can handle exeptions checking the response error object, using a try catch, using decorators or even transforming it into a promise
    - async await
        exactly the same as callbacks

### 8. How many arguments does setState take and why is it async.
    setState takes an object as an argument. 
    Is async because it can result in expensive operations.
### 9. List the steps needed to migrate a Class to Function Component.
    1 - Migrate pure functions
    2 - Migrate props
    3 - Migrate hooks (Eg: replacing this.state to setState())
    4 - Migrate state management objects, if it's necessary
    5 - Migrate tests
### 10. List a few ways styles can be used with components.
    Styled components
    Pure CSS
    Pre-processors
    CSS Inline
    Third party libraries
### 11. How to render an HTML string coming from the server.
    Using DOM Purify and dangerouslySetInnerHTML