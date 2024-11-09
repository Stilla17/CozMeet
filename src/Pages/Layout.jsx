import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Menu from "../Components/Menu/Menu.jsx";
import InfoUser from "../Components/InfoUser/InfoUser";
import Messages from "../Components/Messages/Messages.jsx";
import { Outlet } from "react-router";

function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div
                className="grid grid-cols-3 gap-[2%] max-w-[1440px] mx-auto mt-6"
                style={{ gridTemplateColumns: "20% 56% 20%" }}
            >
                <aside>
                    <InfoUser />
                    <Menu />
                </aside>

                <Outlet />

                <aside>
                    <Messages />
                </aside>
            </div>
        </>
    );
}

export default Layout;