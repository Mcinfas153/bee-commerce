import React from 'react'
import ProductBox from './ProductBox'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductRow() {

    let settings = {
        dots: false,
        className: "center",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            }
        ]
    };


    return (
        <div className="">
            <p className="tw-text-xl tw-font-bold tw-uppercase tw-tracking-wide tw-mb-3">Electronics</p>
            <Slider {...settings}>
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
            </Slider>
        </div>
    )
}
