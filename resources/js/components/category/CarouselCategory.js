import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CatergoryCarouselProductCard from './CatergoryCarouselProductCard';

export default function CarouselCategory() {
  return (
    <div className="productCarousel tw-bg-white tw-py-5 tw-px-5 tw-rounded">
            <p className='tw-text-gray-700 tw-text-lg tw-font-bold tw-pb-2'>Frequently repurchased in Supplies</p>
           <Carousel indicators={false}>
                <Carousel.Item>
                    <div className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-6 tw-gap-2'>
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-6 tw-gap-2'>
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-6 tw-gap-2'>
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                        <CatergoryCarouselProductCard />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
  )
}
