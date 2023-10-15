import React from "react";
import "./App.css";
import { saveAs } from "file-saver";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dasboard";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
