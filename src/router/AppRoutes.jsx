import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Career from "../pages/Career";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;