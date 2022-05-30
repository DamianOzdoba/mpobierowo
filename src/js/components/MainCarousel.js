import React, {useState, useEffect} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import firebase from "../../firebase";
import img1 from '../../images/banner/banner1.jpg';
import img2 from '../../images/banner/banner2.jpg';
import img3 from '../../images/banner/banner3.jpg';
import img4 from '../../images/banner/banner4.jpg';

function Home() {
    // const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const ref = firebase.storage().ref('banner');
    //
    //     const fetchImages = async () => {
    //         setLoading(true);
    //
    //         let result = await ref.listAll();
    //         let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
    //
    //         return Promise.all(urlPromises);
    //     }
    //     const loadImages = async () => {
    //         const urls = await fetchImages();
    //         setImages(urls);
    //         setLoading(false);
    //     }
    //     loadImages().then();
    // }, []);
    //
    // if (loading) {
    //     return <h1 style={{textAlign: "center", color: "white"}}>Loading...</h1>;
    // }

    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={4000}
            transitionTime={2000}
            swipeable={false}
            dynamicHeight={false}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            animationHandler={'fade'}
        >
            {/*{images.map((item, idx) =>*/}
            {/*    <div key={idx}>*/}
            {/*        <img src={item} alt={`Zdjęcie ${idx + 1}`}/>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div>
                <img src={img1} alt="zdjęcie 1"/>
            </div>
            <div>
                <img src={img2} alt="zdjęcie 2"/>
            </div>
            <div>
                <img src={img3} alt="zdjęcie 3"/>
            </div>
            <div>
                <img src={img4} alt="zdjęcie 4"/>
            </div>
        </Carousel>
    );
}

export default Home;