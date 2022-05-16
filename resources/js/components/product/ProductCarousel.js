import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ProductCarousel() {
    return (
        <div className="productCarousel tw-px-10 tw-pt-5">
           <Carousel interval='1000'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/Instagram/2.png"
                    alt="First slide"
                    loading='lazy'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/product/2.png"
                    alt="Second slide"
                    loading='lazy'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/product/3.png"
                    alt="Third slide"
                    loading='lazy'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
