import React from "react";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    // we need routing to define subpages , for browser address routing for each page , like Contact,about,home
    // npm i react router dom
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses/>} />
        {/* irectly linking to the Componnet with the Route path via home */}
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
// push the course on git