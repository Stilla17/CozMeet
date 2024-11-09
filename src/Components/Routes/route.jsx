import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Pages/Layout";
import Feed from "../../Pages/Feed";
import Friends from "../../Pages/Friends";
import Login from "../../Pages/Login";

const Route = () => {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <Login />,
        },
        {

            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Feed />,
                },
                {
                    path: "friends",
                    element: <Friends />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Route;
