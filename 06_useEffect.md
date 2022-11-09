The useEffect Hook Flow
It can be helpful to keep in mind React's order of operations when using this Hook. This will help you write your code with more intention and troubleshoot more swiftly if you receive unexpected output:

React Renders UI (JSX->HTML; DOM populated)
Browser Displays UI (DOM version of components shown in browser)
useEffect cleanups for previous effects are run
Current render effect functions are executed
Careful when updating dependencies inside of a useEffect as you may run into an endless loop!

Three ways of utilizing useEffect:

Initial render of said component
```Javascript
useEffect(()=>console.log("Hello"), [])
```

Every change/render
```Javascript
useEffect(()=>console.log("Hello"))
```

If the value passed into the dependency array is invoked or modified
```Javascript
useEffect(()=>console.log("Hello"), [someValue])
```