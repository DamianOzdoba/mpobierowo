import React from "react";
import {Route, Routes} from 'react-router-dom';
import main_bg from "./images/main_bg2.png";
import Header from "./js/components/Header";
import Home from "./js/components/Home";
import Offer from "./js/components/Offer";
import PriceList from "./js/components/PriceList";
import Gallery from "./js/components/Gallery";
import Contact from "./js/components/Contact";
import Footer from "./js/components/Footer";

function App() {
    return (
        <div className="container" style={{backgroundImage: `url(${main_bg})`}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/offer" element={<Offer/>}/>
                <Route path="/price-list" element={<PriceList/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
