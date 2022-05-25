import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainCarousel from "./MainCarousel";
import ContactContent from "./ContactContent";

function Contact() {
    return (
        <div className="home">
            <div className="home__carousel-container">
                <MainCarousel/>
            </div>
            <ContactContent />
        </div>
    );
}

export default Contact;