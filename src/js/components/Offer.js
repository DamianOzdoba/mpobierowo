import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainCarousel from "./MainCarousel";
import OfferContent from "./OfferContent";

function Home() {
    return (
        <div className="home">
            <div className="home__carousel-container">
                <MainCarousel/>
            </div>
            <OfferContent/>
        </div>
    );
}

export default Home;