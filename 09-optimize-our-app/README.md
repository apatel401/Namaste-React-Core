# Chapter 08 - Let's Get Classy

**How do you create Nested Routes react-router-dom cofiguration**

```
By providing children into the route where you want to create nested route. 
In between a Route component you can embed another Route: <Route>{/* Children routes go here*/}</Route>
```

**Read abt createHashRouter, createMemoryRouter from React Router docs.**

**createHashRouter**
```
This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. 
Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
```
**createMemoryRouter**
```
Instead of using the browsers history a memory router manages it's own history stack in memory. 
It's primarily useful for testing and component development tools like Storybook, 
but can also be used for running React Router in any non-browser environment.
```

**What is the order of life cycle method calls in Class Based Components**
```
1. Constructor
2. Render()
3. ComponentDidMount
4. Render()
5. ComponentDidUpdate
6. ComponentWillUnmount
```
**Why do we use componentDidMount?**
```
We use componentDidMount when we want to execute some function only once after component is mounted.

Fetching data is perfect example of using componentDidMount
```
**Why do we use componentWillUnmount? Show with example**
```
We use component will unmount when we want to stop any code which is running on background when it's no longer necessary.
Example:

Let's say you have a counter or interval running on about page of your app 
and it's doing some task for your page but you don't need that counter or interval running on any other page other than About page. W
hen you go to another route usually that counter/interval is still running in the background to stop that counter/interval
 before you go to another page that's when you use componentWillUnmount and clear your interval there so that when you go to other page it will clear the interval. 
```
**(Research) Why do we use super(props) in constructor?**
```
It is used to call the constructor of its parent class. This is required when we need to access props of its parent class.
```
**(Research) Why can't we have the callback function of useEffect async?**
```
If we use the callback function as async it will create a memory leak and it won't execute return/ unmount function. 

There are ways we can do it. by using aync function as IIFE check out the code below how to use aync function in useEffect.
```

```javascript
useEffect(() => {
  (async () => {
    const profileData = await fetchProfile();
    setProfile(profileData);
  })();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```