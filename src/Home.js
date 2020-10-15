import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__containerTop">
                    <img 
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/Events/2020/APDHF/AMZ_PD20_UK_EN_GW005_Day2_NonGifting_08_1500x300._CB403915030_.jpg" 
                        alt="" 
                        className="home__image"
                    />
                    <div className="home__gradient"/>

                </div>

                <div className="home__row">
                    <Product
                        id="11145328"
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone Fabric"
                        price={18.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Ca1bFuAhL._AC_SY355_.jpg"
                        rating={3}
                    />
                    <Product
                        id="21253489"
                        title="Echo Show 5 –Stay in touch with the help of Alexa, Black"
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61oyFsIqBqL._AC_SY355_.jpg"
                        rating={4}
                    />
                    <Product
                        id="31253489"
                        title="Acer Chromebook Spin 13 CP713-1WN - (Intel Core i5-8250U, 8GB RAM, 128GB eMMC, 13.5 inch Full HD touchscreen display, Wacom stylus, Chrome OS, Iron)"
                        price={599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61BLLZJbtGL._AC_SX679_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12253489"
                        title="Hasbro Gaming Monopoly Classic Game"
                        price={14.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81f9Q3%2BbQxL._AC_SY355_.jpg"
                        rating={5}
                    />
                    <Product
                        id="22253489"
                        title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Qt, 5.7 Litre, 1000 W, Brushed Stainless Steel/Black"
                        price={59.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81ykuGJoCeL._AC_SX522_.jpg"
                        rating={4}
                    />
                    <Product
                        id="32253489"
                        title="Bosch 06039A3371 PSB 1800 LI-2 Cordless Combi Drill with Two 18 V Lithium-Ion Batteries, Green"
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71RPw4t6TiL._AC_SY355_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="32253489"
                        title="HISENSE 43AE7000FTUK 43-inch 4K UHD HDR Smart TV with Freeview play, and Alexa Built-in (2020 series) [Amazon Exclusive] [Energy Class A]"
                        price={268.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/91Cue529B6L._AC_SX679_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
