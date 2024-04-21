import { useState, useEffect } from "react";
import "./App.css";
import { Axios } from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Repositories from "./Pages/Repositories";
import Navbar from "./Navbar";
("use client");
import { ErrorBoundary } from "react-error-boundary";

    function App() {
    return (
    <div>
    <Router>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/repositories" element={<Repositories />} />
    <Route path="*" element={<h1>Error 404: Not a Page</h1>} />
    </Routes>
    </Router>
    </div>
    );
    }

    export default App;
