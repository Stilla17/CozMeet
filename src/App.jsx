import { useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import InfoUser from "./Components/InfoUser/InfoUser";
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <Menu />
      <InfoUser />
      <Navbar />

    </>
  );
}

export default App;
