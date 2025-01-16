import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import TopHeader from "./components/topheader";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <TopHeader/>
        {/* Wrap the Navbar in a sticky container */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
