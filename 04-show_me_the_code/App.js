import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";
import "./app.css";

const withJsx = (
 <AppLayout />
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(withJsx);
