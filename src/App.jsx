import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Layout from "./components/Layout";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactForm />} />
        </Route>
      </Routes>
      <div className="toaster">
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;

// project card hover
// header navLink active state
//resume button
