import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import InfoUser from "./Components/InfoUser/InfoUser";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1432px] mx-auto">
        <InfoUser />
        <Menu />
      </div>
    </>
  );
}

export default App;
