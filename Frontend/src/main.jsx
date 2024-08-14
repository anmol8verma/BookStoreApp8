import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // strict component mei component 2 times render krta h
  <BrowserRouter>
    {/* bcoz we are using routing for internal pages , we will use /Contact , /Course , /About everywhere to link the pages throughout the app */}
    <div className="dark:bg-slate-900 dark:text-white"
    ><App/></div>
  </BrowserRouter>
);
