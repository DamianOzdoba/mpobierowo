import React from 'react';

function OfferContent() {
    return (
        <div className="content">
            <h2 className="content__title">Oferta</h2>
            <p className="content__description">Oferujemy dla Państwa dwa domy:</p>
            <div className="content__box">
                <p className="content__description"><span>Mniejszy dom</span> to 4 pokoje. Dwa na parterze i&nbsp;dwa na
                    piętrze. Każdy z oddzielnym wejściem z&nbsp;zewnątrz. Wszystkie posiadają łazienki z&nbsp;prysznicem
                    i&nbsp;pełny aneks kuchenny (lodówka, kuchenka elektryczna, zlewozmywak, czajnik elektryczny,
                    podstawowe wyposażenie do gotowania i&nbsp;jedzenia), telewizor.
                </p>
                <p className="content__description"><span>Większy dom</span> to 4 pokoje na piętrze, z&nbsp;balkonami.
                    W&nbsp;każdym pokoju łazienka z&nbsp;prysznicem, telewizor, aneks kuchenny z&nbsp;lodówką,
                    czajnikiem elektrycznym, podstawowym wyposażenie do gotowania i&nbsp;jedzenia. Kuchenki elektryczne
                    dostępne w&nbsp;części wspólnej dla 4 pokoi. Przy każdym domu miejsce z&nbsp;biesiadnym stołem.
                    Możliwość grillowania.
                </p>
            </div>
            <p className="content__description content__description--amenities">
                <span>Udogodnienia:</span><br/>
                Dla dzieci: trampolina, piaskownica i&nbsp;huśtawka.<br/>
                Blisko sklep sieciowy.<br/>
                Bezpłatny parking na terenie obiektu - wskazana rezerwacja.<br/>
                Bezpłatne Wi-Fi.<br/>
                Przyjmujemy gości z małymi zwierzętami, po wcześniejszym uzgodnieniu.</p>
        </div>
    );
}

export default OfferContent;