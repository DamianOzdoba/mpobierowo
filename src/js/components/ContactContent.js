import React from 'react';

function ContactContent() {
    return (
        <div className="content">
            <h2 className="content__title">Kontakt</h2>
            <div className="content__box">
                <div className="content__contact">
                    <p className="content__description">Pokoje gościnne</p>
                    <p className="content__description">ul. Leśna 3</p>
                    <p className="content__description">72-346 Pobierowo</p>
                    <p className="content__description">tel. <a href="tel:+48601870165">+48601870165</a></p>
                    <p className="content__description">tel. <a href="tel:+48915626778">+48915626778</a></p>
                    <p className="content__description">email: <a href="mailto:mpobierowo@o2.pl">mpobierowo@o2.pl</a></p>
                </div>
                <div className="content__map">
                    <p className="content__description">Lokalizacja obiektu:</p>
                    <iframe
                        className="map"
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.3066353279241!2d14.940891651761753!3d54.056757300058315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa9d1728b262eb%3A0x57c531f1d62f3b45!2sLe%C5%9Bna%203%2C%2072-346%20Pobierowo!5e0!3m2!1spl!2spl!4v1653479150877!5m2!1spl!2spl"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    );
}

export default ContactContent;