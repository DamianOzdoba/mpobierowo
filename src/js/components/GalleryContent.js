import React from 'react';
import pokoj1 from '../../images/thumbnails/pokoj1.jpg';
import pokoj2 from '../../images/thumbnails/pokoj2.jpg';
import pokoj3 from '../../images/thumbnails/pokoj3.jpg';
import pokoj4 from '../../images/thumbnails/pokoj4.jpg';
import pokoj5 from '../../images/thumbnails/pokoj5.jpg';
import pokoj6 from '../../images/thumbnails/pokoj6.jpg';
import pokoj7 from '../../images/thumbnails/pokoj7.jpg';
import pokoj8 from '../../images/thumbnails/pokoj8.jpg';
import zew from '../../images/thumbnails/zew.jpg';
import {textContent} from "./text_content/TextContent";
import GalleryThumbnail from "./GalleryThumbnail";


function GalleryContent() {

    return (
        <div className="gallery">
            <div className="content">
                <h2 className="content__title">Galeria</h2>
                <h2 className="content__title content__title--blue content__title content__title--blue--blue">
                    Dom mniejszy.
                </h2>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj1} url="pokoj_1"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[0].title}</h2>
                        <p className="thumbnail__desc">{textContent[0].desc}</p>
                    </div>
                </div>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj2} url="pokoj_2"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[1].title}</h2>
                        <p className="thumbnail__desc">{textContent[1].desc}</p>
                    </div>
                </div>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj3} url="pokoj_3"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[2].title}</h2>
                        <p className="thumbnail__desc">{textContent[2].desc}</p>
                    </div>
                </div>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj4} url="pokoj_4"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[3].title}</h2>
                        <p className="thumbnail__desc">{textContent[3].desc}</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <h2 className="content__title content__title--blue content__title content__title--blue--blue">
                    Dom większy.
                </h2>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj5} url="pokoj_5"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[4].title}</h2>
                        <p className="thumbnail__desc">{textContent[4].desc}</p>
                    </div>
                </div>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj6} url="pokoj_6"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[5].title}</h2>
                        <p className="thumbnail__desc">{textContent[5].desc}</p>
                    </div>
                </div>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj7} url="pokoj_7"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[6].title}</h2>
                        <p className="thumbnail__desc">{textContent[6].desc}</p>
                    </div>
                </div>
                <div className="thumbnail">
                    <GalleryThumbnail image={pokoj8} url="pokoj_8"/>
                    <div className="thumbnail__content">
                        <h2 className="thumbnail__title">{textContent[7].title}</h2>
                        <p className="thumbnail__desc">{textContent[7].desc}</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <h2 className="content__title content__title--blue">Galeria zewnętrzna.</h2>
                <GalleryThumbnail image={zew} url="zewnetrzna"/>
            </div>
        </div>
    );
}

export default GalleryContent;