import React, { useState } from "react";
import "../styles/App.css";
import Menu from "./Menu";
import logo from "../logo.png";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PptCreator from "./PptCreator";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: "Inicio", href: "/home"},
    { value: "Acerca de", href: "/about"},
    { value: "Contacto", href: "/contact" },
    { value: "Himnos", href: "/himnos" },
  ];

  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <div className="title">
          Iglesia de Cristo Caballito
        </div>
      </nav>

      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Menu"}
        items={items}
      />

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/himnos" element={<PptCreator />}/>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
