import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import { IamComp } from "./IamComp";
import Header from "./Header";
import "./app.css";

const Heading = createElement(
  "h1",
  {
    className: "heading",
  },
  "Chapter 3"
);
const subHeading = createElement(
  "h2",
  {
    className: "heading",
  },
  "Laying foundation"
);

const subHeading2 = createElement(
  "h3",
  {
    className: "heading",
  },
  "And it begins..."
);

const mainContainer = createElement(
  "div",
  {
    id: "main-container",
  },
  [Heading, subHeading, subHeading2]
);

function FComp() {
  return (
    <>
      <h1 className="heading">Chapter 3</h1>
      <h2 className="heading">Laying foundation</h2>
      <h3 className="heading">And it begins...</h3>
    </>
  );
}

const withJsx = (
  <div className="app-wrapper">
  <Header />
    <ol>
      <li>
        <p>
          Question 1: Create a Nested header Element using
          React.createElement(h1,h2,h3 inside a div with class “title”)
        </p>
        {mainContainer}
      </li>
      <li>
        <p>Q1(a) :Create the same element using JSX</p>
        <div>
          <h1 className="heading">Chapter 3</h1>
          <h2 className="heading">Laying foundation</h2>
          <h3 className="heading">And it begins...</h3>
        </div>
      </li>
      <li>
        <p>Q1(b):Create a functional component of the same with JSX</p>
      <FComp />
      </li>
      <li>
        <p>Q1(c):Pass attributes into the tag in JSX</p>
        <span id="red" style={{color: "red"}}>This tag has style applied to color red also added attribute id as red</span>
      </li>
      <li>
        <p>Q1(d):Composition of Component(Add a component inside another)</p>
        <span>Inserted another component inside this component below: this is called as Component Composition</span>
      <IamComp />
      </li>
    </ol>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(withJsx);
