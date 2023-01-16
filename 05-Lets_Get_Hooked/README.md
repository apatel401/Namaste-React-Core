# Talk is cheap - show me the code - Chapter 4 - Theory


**1. What is the difference between `Named` Export, `Default` export and `* as` export?**
```
Named export is type of component export where it is exported as constant name. You can use this when you want to export multiple functions/constants. 

In Default Export One can have only one default export per file. When we import we have to specify a name 
```

**2. What is the importance of config.js file?**
```
In config.js we store all the common data that will be used throughout the application. We can save different data as named export and import as we need them.
```

**3. What are React Hooks?**

```
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update it.
```
**4. Why do we need a `useState` Hook??**

```
In React, If we declare some value to a variable and if we reassign that value DOM won't know the updated value. so we use useState hook which provide us with state variable and function to update state variable value. And when we use useState react will keep track of all state variable declared. 


```
