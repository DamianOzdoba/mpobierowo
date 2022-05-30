import React, {useState} from 'react';
import {Carousel} from "react-responsive-carousel";
import firebase from "../../firebase";

function GalleryThumbnail({image, url}) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleClick(e) {
        const ref = firebase.storage().ref(url);

        const fetchImages = async () => {
            setLoading(true);

            let result = await ref.listAll();
            let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

            return Promise.all(urlPromises);
        }
        const loadImages = async () => {
            const urls = await fetchImages();
            setImages(urls);
            setLoading(false);
        }
        loadImages().then();

        if (loading) {
            return <h1 style={{textAlign: "center", color: "white"}}>Loading...</h1>;
        }
        e.target.parentElement.nextElementSibling.classList.add('gallery__container--open');
    }

    function handleClose(e) {
        e.target.classList.remove('gallery__container--open');
    }

    function handleBtnClose () {
        document.querySelector('.gallery__container--open').classList.remove('gallery__container--open');
    }

    function handleEscClick(e) {
        if (e.keyCode === 27) {
            document.querySelector('.gallery__container--open').classList.remove('gallery__container--open');
        }
    }

    return (
        <>
            <div className="gallery__thumbnail" onClick={handleClick}>
                <img className="gallery__thumbnail--img" src={image} alt={image}/>
            </div>
            <div className="gallery__container" onClick={handleClose} onKeyUp={handleEscClick}>
                <div className="gallery__carousel">
                    <Carousel
                        autoFocus={true}
                        infiniteLoop={true}
                        dynamicHeight={true}
                        emulateTouch={true}
                        useKeyboardArrows={true}
                        showThumbs={false}
                    >
                        {images.map((item, idx) =>
                            <div key={idx} className="carousel__image">
                                <img src={item} alt={`Zdjęcie ${idx + 1}`}/>
                            </div>
                        )}
                    </Carousel>

                </div>
                <button className="gallery__button" onClick={handleBtnClose}>x</button>
            </div>
        </>

    );
}

export default GalleryThumbnail;