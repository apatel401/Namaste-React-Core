# chapter - 11 - Data is new Oil

**What is prop drilling?**

```
When we use some data/properties in our parent component and 
we want to access that variable in child and then to its lowest child, 
we have to pass that variable from parent component to child to it's child to child this is called as props driling. 
See the following example.
```
```javascript  
// state variable defined as config and paasing this config to child component 
//so child can access this state/setState
<ParentComponent />
      ↓
<Child config={config}/>
      ↓
<GrandChild config={config}/>
      ↓
<ChildOfGrandChild config={config}/>
      ↓
<GrandChildOfGrandChild config={config}/>  
// we only wanted config here but we had to pass it from top parent to access that here.
```
**What is lifting the state up?**

```
When two of the child share some common state values and they are managing their value in their own component 
but those change in state won't be reflected in other child,
To acheive that we have to lift the state up.
Lifting the state up means we take out the common value from childrens and 
give control of that state to parent component so when the value is changed by one child 
it will also reflect(re-renders) in the second child.
see the following example:
```
```javascript  
//Parent.js
import React from "react";
export default function Parent(){
      return (
      <>
      <Child1 /> //state variable isOpen is used in child1 here
      <Child2 />//state variable isOpen is also used in child2 here
      /* 
      when we change the value of isOpen in <Child2 /> 
      it won't reflected in <Child1 /> component
      This is perfect example of lifting the state up
      */ 
      </>
      )
}


//Updated Parent.js with lifting state up
import React, {useState} from "react";
export default function Parent(){
  const [isOpen, setIsOpen] = useState(false)
      return (
      <>
      <Child1 isOpen={isOpen} setIsOpen={setIsOpen} /> 
      <Child2 isOpen={isOpen} setIsOpen={setIsOpen} />
      /* 
      when we change the value of isOpen in <Child2 />.
      <Child1 /> and <Child2 /> component will reRender and reflect the state change in both
      This is perfect example of lifting the state up
      */ 
      </>
      )
}
```
**What is Context Provider and Context Consumer?**

```
Context Provider is used at top Level of any app component and we pass the value in provider 
which can be used to create context
Whereas context Consumer is used where we want to use the variable/props used in context or want to update those variable.
```
**If you don’t pass a value to the provider does it take the default value?**

```
It will only take default value if we pass in the default value 
if not passed default value or value it will not take default value.
```