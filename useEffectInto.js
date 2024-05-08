// useEffect is a react function(hooks)

// useEffect()=> React Hook that tells React to perform certain action when:
// 1. When the component mounts(loads)
// 2. When component re-renders
// 3.When the state of a value changes

// syntax
// useEffect(function,[dependencies])
// * dependency array is optional
// * function cannot be async

// 1. useEffect(function) => runs after render + every re-render
// 2. useEffect (function,[]) => runs once when component mounts
// 3. useEffect (function ,[value]) => run on component mount + when value changes

// use case:
// 1. event listener
// 2. api hit
// 3. dom manipulation
// 4. subscription (real time updates)
// 5.clean up function

// component reloads/re-renders/re-mount when
// 1. state changes
// 2. props changes
// 3.Re-rendering of the parent component
