import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ProductCarousel() {
    return (
        <div className="productCarousel tw-px-10 tw-pt-5">
           <div>
                <Carousel interval='1000' className='tw-mb-5'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://dummyimage.com/400x300/000/fff"
                        alt="First slide"
                        loading='lazy'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://dummyimage.com/400x300/000/fff"
                        alt="Second slide"
                        loading='lazy'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://dummyimage.com/400x300/000/fff"
                        alt="Third slide"
                        loading='lazy'
                        />
                    </Carousel.Item>
                </Carousel>
            </div>         
        </div>
    )
}
