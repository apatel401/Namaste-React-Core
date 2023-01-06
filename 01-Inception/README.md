#Inception - Chapter 1 - Theory

**1.  What is Emmet?**
```
Emmet is powerful built-in vs code extension which we can use during production to bring in boilerplate codes. 
It has many shortcuts which will reduce our work of repitive work.
For Ex. writing  ul>li*20>a will give me unordered list with 20 li and a inside it.
```

**2. Difference between a Library and Framework?**
```
To use libraries we need minimum efforts and there are no set of rules that we need to follow. 
When we use library we are in control of when to call it and use it. 
whereas in Framework you need to follow the blueprint and set of rules. 
when we use framework, framework is in control, framework is in charge of flow of application.
In simple words:
A library is essentially a set of functions that you can call, Each call does some work and returns control to the client.
A framework embodies some abstract design, with more behavior built in. 
In order to use it you need to insert your behavior into various places in the framework either by subclassing or by plugging in your own classes. 
The framework's code then calls your code at these points.
```
**3. What is CDN?** Why do we use it?**
```CDN: Content Delivery Network
CDN refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. 
We use CDN because It allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. 

    Pros:
    Decreasing the distance between where content is stored and where it needs to go
    Reducing file sizes to increase load speed
    Optimizing server infrastructure to respond to user requests more quickly
    If one of the server fails the load is redirected to other servers which increase reliability
```
**4. Why is React known as React?**
```React's ability to react to changes in data. When the data in a React component changes, 
React will automatically re-render the component so that it reflects the new data. 
This makes it easy to create performant user interfaces that always look up-to-date.
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
```
**5. What is crossorigin in script tag?**
```The crossorigin attribute provides support for CORS, defining how the element handles cross-origin requests, 
thereby enabling the configuration of the CORS requests for the element's fetched data. 
Depending on the element, the attribute can be a CORS settings attribute. Crossorigin valid on the <audio>, <img>, <link>, <script>, and <video> elements.```

**6. What is diference between React and ReactDOM
```React is used to create a view.
   ReactDOM is used to render UI in the browser
```
**7. What is difference between react.development.js and react.production.js files via CDN?**
```
    react.development.js provides us extra features like debugging, hmr(Hot module reloading) and lots of other stuffs that you might use while developing app with the help of bundlers like webpack, parcel, vite. This bundler bundles and minifies our code to be deployed on production
    
    These minified files will be deployed on production which removes lots of unnecessary files which will not be used by our app for this we have react.production.js to make our much faster(as bundlers and lots of other files have done there work and are not required now)
```
**8. What is async and defer?**
```
    Adding defer attribute to any script the script will excute after all waterfall is done. that means it will wait until all other content is loaded or HTMl parsing is done. 

    Adding Async attribute to any script the script will excuted asynchoronously while the HTML parsing is done simultaneously 
```
