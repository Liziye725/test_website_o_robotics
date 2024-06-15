import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faTwitter, faFontAwesome);
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin);

import Menu from "./components/menu/Menu";
import ScrollToLocation from "./components/ScrollToLocation";
import AboutPage from "./pages/aboutpage/AboutPage";
import HomePage from "./pages/homepage/HomePage";

import ContactForm from "./components/contact-info/ContactForm";
import MainProductPage from "./pages/mainproductpage/MainProductPage";
import ProductPage1 from "./pages/productpage-1/ProductPage1";
import ProductPage2 from "./pages/productpage-2/ProductPage2";
import ProductPage3 from "./pages/productpage-3/ProductPage3";
import Contact from "./components/ContactPage/Contact";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="product" element={<MainProductPage />} />
            <Route path="product/cleaningweed" element={<ProductPage1 />} />
            <Route path="product/cleaninggarbage" element={<ProductPage2 />} />
            <Route path="product/cleaningsnow" element={<ProductPage3 />} />
          </Routes>
          {/* <ContactForm />  needs to be style in contactform component.*/}
          <Contact />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
