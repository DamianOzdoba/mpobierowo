import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image_1 from "../../images/1.jpg";
import image_2 from "../../images/2.jpg";
import image_3 from "../../images/3.jpg";
import image_4 from "../../images/4.jpg";

function Home() {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            stopOnHover={true}
            showThumbs={false}
            emulateTouch={true}

        >
            <div className="carousel__image">
                <img src={image_1} alt="Zdjęcie 1"/>
            </div>
            <div className="carousel__image">
                <img src={image_2} alt="Zdjęcie 2"/>
            </div>
            <div className="carousel__image">
                <img src={image_3} alt="Zdjęcie 3"/>
            </div>
            <div className="carousel__image">
                <img src={image_4} alt="Zdjęcie 4"/>
            </div>
        </Carousel>
    );
}

export default Home;