import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";
import "./app.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorHandling from "./components/ErrorHandling";
import About from "./components/About"
import Menu from "./components/Menu"
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from './components/Profile'

function AppLayout() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[ loggedIn, setLoggedIn ]} />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorHandling />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <RouterProvider router={router} />

);
 