import React from "react";
import "./App.css";
import { saveAs } from "file-saver";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dasboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
