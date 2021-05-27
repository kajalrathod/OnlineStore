import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from './hp_banner_edited.png';
import './carouselBanner.css';

const images = [
    {
        id: 1,
        name: 'photo-1',
        url: banner
    },
    {
        id: 2,
        name: 'photo-1',
        url: banner
    },
    {
        id: 3,
        name: 'photo-1',
        url: banner
    },
    {
        id: 4,
        name: 'photo-1',
        url: banner
    },
    {
        id: 5,
        name: 'photo-1',
        url: banner
    }
];

const CarouselBanner = () => {
    return (
        <Carousel autoPlay infiniteLoop transitionTime={250}>
            {images.map((image => {
                return (
                    <div key={image.id}>
                        <img src={image.url} alt={image.name} />
                    </div>
                )
            }))}
        </Carousel>
    );

}

export default CarouselBanner;