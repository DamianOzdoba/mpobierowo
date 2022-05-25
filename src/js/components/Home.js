import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainCarousel from "./MainCarousel";
import HomeContent from "./HomeContent";

function Home() {
    return (
        <div className="home">
            <div className="home__carousel-container">
                <MainCarousel/>
            </div>
            <HomeContent />
        </div>
    );
}

export default Home;