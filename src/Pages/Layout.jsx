import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import Menu from "../Components/Menu/Menu";
import InfoUser from "../Components/InfoUser/InfoUser";
import CreatePost from "../Components/CreatePost/CreatePost";

function Layout({ children }) {
    return (
        <div>
            <Navbar />

            <div className='flex justify-between'>
                <div className="max-w-[1432px] mx-auto">
                    <InfoUser />
                    <Menu />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;