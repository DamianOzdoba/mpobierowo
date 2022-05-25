import React, {useState} from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import HeaderBtn from "./HeaderBtn";

function Header() {
    const [expanded, setExpanded] = useState(false);

    function hideMenu() {
        return setExpanded(false);
    }

    return (
        <div className="header">
            <div className="header__title">
                <div className="header__title-container">
                    <h1>POKOJE GOŚCINNE</h1>
                    <p>POBIEROWO, UL. LEŚNA 3</p>
                    <p>tel. <a href="tel:+48915626778">+48915626778</a>,
                        <a href="tel:+48601870165"> +48601870165</a></p>
                </div>
            </div>
            <nav className="header__nav">
                <Hamburger
                    type={'Squash'}
                    color={'white'}
                    rounded
                    toggled={expanded}
                    toggle={setExpanded}
                />
                <div className={
                    expanded ? "header__nav-container expanded" : "header__nav-container"}>
                    <HeaderBtn hide={hideMenu} url={'/'} text={'O Nas'}/>
                    <HeaderBtn hide={hideMenu} url={'/offer'} text={'Oferta'}/>
                    <HeaderBtn hide={hideMenu} url={'/price-list'} text={'Cennik'}/>
                    <HeaderBtn hide={hideMenu} url={'/gallery'} text={'Galeria'}/>
                    <HeaderBtn hide={hideMenu} url={'/contact'} text={'Kontakt'}/>
                </div>

            </nav>
        </div>
    );
}

export default Header;