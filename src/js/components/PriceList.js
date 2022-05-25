import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainCarousel from "./MainCarousel";
import PriceListContent from "./PriceListContent";

function PriceList() {
    return (
        <div className="home">
            <div className="home__carousel-container">
                <MainCarousel/>
            </div>
            <PriceListContent />
        </div>
    );
}

export default PriceList;