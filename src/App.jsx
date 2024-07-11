import { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import InfoUser from "./Components/InfoUser/InfoUser";
import Navbar from "./Components/Navbar/Navbar";
import Messages from "./Components/Messages/Messages.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1432px] mx-auto">
        {/* <InfoUser /> */}
        {/* <Menu /> */}
      </div>
      <div className="max-w-[1432px] mx-auto">
        <Messages />
      </div>
    </>
  );
}

export default App;
