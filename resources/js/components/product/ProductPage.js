import React from 'react'
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';
import { useParams } from 'react-router';

export default function ProductPage() {

    let { id } = useParams();

    return (
        <div className="projectPage">
            <h1>{id}</h1>
            <div className="tw-grid md:tw-grid-cols-12 tw-gap-4 tw-items-center">
                <div className="md:tw-col-span-6 lg:tw-col-span-5 tw-mt-10">
                    <ProductCarousel />
                </div>
                <div className="md:tw-col-span-6 lg:tw-col-span-7 tw-mt-10">
                    <ProductInfo />
                </div>
            </div>
        </div>
    )
}
