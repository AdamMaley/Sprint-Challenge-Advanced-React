Why would you use class component over function components (removing hooks from the question)?

	Functional components could not use state untill hooks were introduced. functional components used props and class components used this.state


Name three lifecycle methods and their purposes.

    componentDidMount, load in data for your component
    componentDidUpdate, updating DOM when props or state changes
    componentWillUnmount, cancel outgoing network requests, remove event listeners.


    Mounting – Birth of your component (componentDidMount)
    Update – Growth of your component  (componentDidUpdate)
    Unmount – Death of your component  (compnentWillUnmount)


What is the purpose of a custom hook?

	To not repeat code by making multiple components that do the same thing. custom hooks are more DRY.

Why is it important to test our apps?

    surfaces bugs faster, acts as documentation for the code, encourages us to write better code. Arrange, Act, Assert
    Auto testing minimizes the risk of bugs and reduces the margin for error.
