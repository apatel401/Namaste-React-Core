import React, {createElement} from "react";
import  ReactDOM  from "react-dom/client";


const Heading = createElement(
"h1",
{
    id: "title",
    className: "main-heading"
},
"Chepter 2"
)
const subHeading = createElement(
    "h2",
    {
        id: "sub-heading",
        className: "sub-heading"
    },
"Igniting app with beast Parcel"
)

const mainContainer = createElement(
    "div",
    {
        id: "main-container"
    },
    [Heading, subHeading]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(mainContainer)
