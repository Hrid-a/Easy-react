import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import "./main.scss";
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';
import Error from "./component/Error";
import Help from   "./component/Help";
import Menu from "./component/Menu";

const App = ()=> {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/support",
                element:<Help/>,
                children: [
                    {
                        path:"issues/:issueId",
                        element:<Help/>
                    }
                ]
                
            },
            {
                path:"restaurants/:resid",
                element: <Menu />,
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);