const Heading = React.createElement(
"h1",
{
    id: "title",
    className: "main-heading"
},
"Chepter 1"
)
const subHeading = React.createElement(
    "h2",
    {
        id: "sub-heading",
        className: "sub-heading"
    },
"Inception"
)

const mainContainer = React.createElement(
    "div",
    {
        id: "main-container"
    },
    [Heading, subHeading]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(mainContainer)