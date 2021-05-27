import React, { useContext } from 'react';
import CarouselBanner from "./banners/CarouselBanner";
import { ItemCard } from './Items/ItemCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductContext } from '../context/ProductContext';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Main = (props) => {
    const [product] = useContext(ProductContext);
    return (
        <div>
            <div className="ui yellow message">
                <div className="header">
                    Curbside Service NOW AVAILABLE! Call us to place your order at <a href="tel:1-860-223-9133" >+1(860) 223-9133. </a>
                </div>
            </div>
            <CarouselBanner />
            {/* <div className="ui piled segment" > */}
            <div className="ui piled " >
                <h3 className="ui header" style={{ textAlign: 'center' }}>Concerning COVID-19</h3>
                <p>With the recent outbreak of the novel COVID-19 virus we wanted to take the time to let you know that all of the staff here at Central Wine and Spirit are following the CDC guidelines to help prevent it's spread. These include the use of disinfecting wipes, hand sanitizer, and proper hand washing.</p>
                <p>Due to concerns involving the spread of Covid-19 through used cans/bottles, we will no longer be able to accept bottle returns until further notice. We are sorry for any inconveniences this may cause.</p>
            </div>
            <div className="ui header" style={{ textAlign: 'center' }}>
                Recommanded Top Selling Products
                </div>

            <Carousel responsive={responsive} swipeable={false} style={{ position: 'relative', zIndex: 1 }}>
                {product.map((item) => {
                    return (
                        <div className="ui cards" key={item.id}>
                            <ItemCard title={item.title} index={item.index} price={item.price} img={item.img} quantity={item.quantity} desc={item.desc} id={item.id} />
                            {/* <ItemCard item={item} /> */}
                        </div>
                    );
                })}
            </Carousel>
            <div className="ui header" style={{ textAlign: 'center' }}>
                Our Customer's Favorite
            </div>
            <Carousel responsive={responsive} swipeable={false} style={{ position: 'relative', zIndex: 1 }}>
                {product.map(item => {
                    return (
                        <div className="ui cards" key={item.id}>
                            <ItemCard title={item.title} price={item.price} img={item.img} desc={item.desc} id={item.id} />
                            {/* <ItemCard item={item} /> */}
                        </div>
                    );
                })}
            </Carousel>
        </div >
    );

}

export default Main;