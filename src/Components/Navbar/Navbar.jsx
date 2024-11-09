import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoBookmark } from "react-icons/go";
import user from "../../assets/user.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShowButton = () => {
    setShow(!show);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1432px] mx-auto">
        <nav className="flex items-center py-2 justify-between">
          <div className="flex gap-12 items-center">
            <h1 className="text-[42px] font-bold">CozMeet</h1>

            <div className=" relative">
              <CiSearch className="absolute top-3 left-4 text-[24px]" />
              <input
                type="text"
                placeholder="Search"
                className="rounded-2xl py-3 pl-12 bg-slate-200 w-[300px] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-gray-100 rounded-md p-2 hover:bg-slate-200 cursor-pointer">
              <IoMdNotificationsOutline className="text-[24px] text-[#4a4a4a]" />
            </div>
            <div className="bg-gray-100 rounded-md p-2 hover:bg-slate-200 cursor-pointer">
              <GoBookmark className="text-[24px] text-[#4a4a4a]" />
            </div>

            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={handleShowButton}
            >
              <img
                src={user}
                alt=""
                className="rounded-full w-9 h-9 object-cover"
              />
              <p>Jakob Botosh</p>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: show ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown />
              </motion.div>
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-[55px] right-[50px]"
                  >
                    <Link to='login' className="flex gap-2 items-center bg-white text-[16px] p-2 shadow-md rounded-lg">
                      <RxExit />
                      <p>Exit</p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
