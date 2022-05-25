import React, {useEffect, useState} from 'react';
import firebase from "../../firebase";

function PriceListContent() {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ref = firebase.firestore().collection('prices');

        function getPrices() {
            setLoading(true);
            ref.get().then((item) => {
                const items = item.docs.map((doc) => doc.data());
                setPrices(items);
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
            <h2 className="content__title">Cennik</h2>
            <div className="content__box">
                <table className="content__table">
                    <thead>
                    <tr>
                        <th>Pokój</th>
                        <th>Cena za pokój</th>
                    </tr>
                    </thead>
                    <tbody>
                    {prices.map((item, idx) =>
                        <tr key={idx}>
                            <td className="content__table--room">{item.rooms}</td>
                            <td className="content__table--price">{item.price}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div className="content__text">
                    <p className="content__description">Cena nie zawiera opłaty klimatycznej.<br/>
                        Wysokość opłaty klimatycznej ustala gmina Rewal.<br/>
                        Nr konta bankowego:<br/>
                        <span>86&nbsp;1020&nbsp;4795&nbsp;0000&nbsp;9702&nbsp;0041&nbsp;7550</span><br/>
                        (w tytule przelewu proszę podać termin rezerwacji)<br/>
                        Preferowany pobyt tygodniowy: od soboty do soboty i wielokrotność.<br/>
                        Doba hotelowa od godz. 14:00&nbsp;do&nbsp;10:00.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PriceListContent;