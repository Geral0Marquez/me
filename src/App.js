
import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Nav} from "./components/Nav";
import { useContext } from "react";
import { themeContext } from "./Context";



function App() {

  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [translate, setTranslate] = useState("es");

  return (
    <div className="App" style={{
      background: darkMode ? "linear-gradient(90.21deg, purple -5.91%, rgba(64, 47, 189, 0.5) 111.58%) " : "",
      color: darkMode ? "white" : "",
    }}>
      <Nav setTranslate={setTranslate} translate={translate}/>
      <NavBar translate={translate}/>
      <Banner translate={translate} />
      <Skills translate={translate} />
      <Portfolio translate={translate} />
      <Contact translate={translate} />
      <Footer />

    </div>
  );
}

export default App;
