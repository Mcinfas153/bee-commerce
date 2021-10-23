import React from 'react'
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';

export default function ProductPage() {
    return (
        <div className="projectPage">
            <div className="tw-grid md:tw-grid-cols-12 tw-gap-4 tw-items-center">
                <div className="md:tw-col-span-6 lg:tw-col-span-5 tw-mt-10">
                    <ProductCarousel/>
                </div>
                <div className="md:tw-col-span-6 lg:tw-col-span-7 tw-mt-10">
                    <ProductInfo/>
                </div>
            </div>
        </div>
    )
}
