import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Navigator from "./navigator";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navigator></Navigator>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
