import React from 'react'

export default function ProductBox() {
    return (
        <div className="tw-transition tw-transform tw-duration-500 hover:tw-scale-105 tw-bg-white hover:tw-border-gray-200 tw-cursor-pointer tw-p-5 tw-full md:tw-w-80 tw-transition tw-duration-200 tw-ease-in-out tw-shadow-sm">
            <div className="tw-bg-yellow-500 tw-text-blue-900 tw-font-bold tw-text-sm tw-uppercase tw-px-3 tw-py-1 tw-w-16 tw-text-center tw-rounded-md">new</div>
            <img className="tw-transform tw-transition tw-duration-1000 hover:tw-scale-75" src="https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06539619_1_1.png" />
            <p className="tw-text-center tw-text-yellow-500 hover:tw-text-blue-900 tw-transition tw-duration-500 tw-font-medium break-words tw-mt-3 tw-text-md">3-layer mask with an elastic band (1 piece)</p>
            <p className="tw-text-center tw-text-blue-900 hover:tw-text-yellow-500 tw-transition tw-duration-500 tw-font-bold tw-text-lg tw-mt-1">$119.00 <span className="tw-text-red-500 tw-font-medium tw-ml-1 tw-line-through tw-text-sm">$129.00</span></p>
            <div className="tw-flex tw-justify-center tw-my-3">
                <button className="tw-transition tw-duration-500 tw-bg-blue-900 hover:tw-bg-yellow-500 tw-text-yellow-500 hover:tw-text-blue-900 tw-transform hover:tw-scale-110 tw-font-bold tw-px-5 tw-py-1">Add to Cart</button>
            </div>
        </div>
    )
}
