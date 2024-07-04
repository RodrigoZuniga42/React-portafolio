import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./routs/header";
import Services from "./routs/services";
import About from "./routs/about";
import Contact from "./routs/contact";
import GitHubProjects from "./routs/projects";
import NotFound from './routs/NotFound';
import Layout from './components/Layout';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App /> }>

        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<GitHubProjects />} />
        <Route path="*" element={<NotFound />} /> 
        
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);