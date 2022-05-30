import React, {useState, useEffect} from 'react';
import firebase from "../../firebase";

function HomeContent() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ref = firebase.firestore().collection('last_minute');

        function getPrices() {
            setLoading(true);
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setInfo(items);
                setLoading(false);
            })
        }

        getPrices();

    }, []);

    if (loading) {
        return <h1 style={{textAlign: "center", color: "white"}}>Loading...</h1>;
    }
    return (
        <div className="content">
            <h2 className="content__title">O Nas</h2>
            <p className="content__description">Miło nam będzie gościć Państwa w&nbsp;dwóch budynkach położonych
                w&nbsp;sosnowym lesie, około 650m
                od morza, w&nbsp;ciszy i&nbsp;spokoju a&nbsp;jednocześnie blisko atrakcji które oferuje Pobierowo.
                <br/>Dla odwiedzających nas turystów przygotowaliśmy 8&nbsp;pokoi, po 4 w&nbsp;każdym domu.</p>
            <p className="content__description"><span>Obiekt jest czynny od 20 czerwca do końca
                sierpnia.</span></p>
            <p className="content__description">Preferowany pobyt tygodniowy: od soboty do soboty
                i&nbsp;wielokrotność.<br/> Obsługujemy Bon Turystyczny na dziecko.</p>
            {info[0] ?
                <>
                    <h2 className="content__title content__title--red">{info[0].title}</h2>
                    <p className="content__description content__description--red">{info[0].desc_1}</p>
                    <p className="content__description content__description--red">{info[0].desc_2}</p>
                    <p className="content__description content__description--red">{info[0].desc_3}</p>
                </>
                : ''}
        </div>
    );
}

export default HomeContent;