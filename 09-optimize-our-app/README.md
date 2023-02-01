**When and why do we need lazy()?**
  ```
When our bundle size is getting larger as we develop we can lazy load the components on demand when we need it, 
that way we can reduce bundle size and faster loading of our app. 
Chunking of heavy components saperately makes our app perform better. 
	```
  **What is suspense?**
  ```
When we lazy load the component, if we load that component it will not load initially because that chunk of js is not loaded yet so we need to wrap our component using <Suspense /> that is provided by React so it will wait for that chunk to load and load our component afterwards. Suspense take a fallback prop where we can pass loading(shimmer type) component.
	```
  **Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?**
  ```
When we lazy load the component and don't wrap that component with Suspense it will throw ths error. 
	```
  **Advantages and disadvantages of using this code splitting pattern?**
  ```
Pros:
mproved performance: Code splitting allows you to load only the necessary code for a specific page or component, 
reducing the amount of JavaScript that needs to be loaded, and improving the overall performance of the application.

Faster load times: By loading only the necessary code for a specific page or component, c
ode splitting can significantly improve the load time of your application, making it more user-friendly.

Better scalability: Code splitting allows you to scale your application 
more easily by splitting it into smaller, more manageable pieces.

cons:

ncreased complexity:
 Code splitting can increase the complexity of the application, 
 especially if not implemented properly.

Increased maintenance: 
With code splitting, multiple code chunks are created, 
making it harder to maintain and update the application.

Initial load time: 
Although code splitting can improve the performance of the application in the long run, 
the initial load time may increase because more requests are made to the server to fetch the different code chunks.
	```
  **When do we and why do we need suspense?**
  ```
  When: while lazy loading component.
  Why: On initial load it will not throw error because that chunk of component is not loaded. By using Suspense it will wait for that chunk to load and load our UI. 

  ```
