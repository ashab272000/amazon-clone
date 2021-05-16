import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />
                <div className="home__row">
                    <Product 
                        id={1}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg"
                    />
                    <Product 
                        id={2}
                        title="Kenwood Chef Titanium XL Kitchen Machine, 6.7 Litre, 1700W, Silver, KVL8472S- Best Home Baking Machine for Complete Family"
                        price={239.99} 
                        rating={4} 
                        image="https://images-na.ssl-images-amazon.com/images/I/7164p3kzsFL._AC_SX450_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={3}
                        title="AMAZFIT GTS 2e Smartwatch with 24H Heart Rate Monitor, Sleep, Stress and SpO2 Monitor, Activity Tracker Sports Watch with 90 Sports Modes, 14 Day Battery Life, Black"
                        price={99.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51hK5H3U37L._AC_SL1036_.jpg"
                    />
                    <Product 
                        id={4}
                        title="Apple HomePod Mini - A perfect smart speaker (White)"
                        price={39.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81TShSxagcL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id={5}
                        title='Apple iPad 10.2" (2020 - 8th Gen), Wi-Fi, 32GB, Space Gray [With Facetime] - USA Specs'
                        price={429.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71gOkVA6-eL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={6}
                        title="Sony KD-85X9000H Smart TV (Android TV) | 85 inch | Full Array LED | 4K Ultra HD | High Dynamic Range (HDR) | X90H Series"
                        price={2879.99} 
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61F7Fv1C-kL._AC_SL1200_.jpg"
                    />                   
                </div>
            </div>
        </div>
    )
}

export default Home
