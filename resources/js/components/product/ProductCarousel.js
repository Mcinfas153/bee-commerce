import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ProductCarousel() {
    return (
        <div className="productCarousel tw-px-10 tw-pt-5">
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/product/Nature Power.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/product/Aloe vera powder.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/product/Whitening Cream for Face and Body.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
