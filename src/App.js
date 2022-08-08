import "./assets/css/reset.css";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Home />
      </div>
    </div>
  );
};

export default App;
