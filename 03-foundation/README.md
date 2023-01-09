# Ignite Our App - Chapter 2 - Theory

**1. What is `JSX`?**
```
NPM is software library/registry and package manager. npm is used to install dependencies in project or manage it.
```

**2. Superpower of `JSX`?**
```
`JSX` is html like syntax you can write inside javascript which is basically syntetic sugar over React.createElemnent. 
Javascript can be used inside jsx by writing inside { }. 
It comes with full power of javascript 
```

**3. Role of `type` attribute in script tag? What options can I use there?**

```
The type attribute specifies the type of the script. 
We can use application/javascript (default) or application/ecmascript or module.
if we use src attribute it will ignore type module.
```
**4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**

```
{TitleComponent} is used when we want to use variable in jsx. This variable can hold any type of value

<TitleComponent/> is component composition when you wants to call component inside another component we use it like that.

{<TitleComponent></TitleComponent>} this is same thing as above but it doesnot have self closing tag. This is used when we want to insert child into any component


```