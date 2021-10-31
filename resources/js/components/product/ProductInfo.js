import React from 'react'

export default function ProductInfo(props) {

    const { title, description, price } = props.info

    return (
        <div className="productInfo">
            <div className="tw-container tw-mx-auto tw-px-5 sm:tw-px-10">
                <p className="tw-text-3xl tw-font-bold tw-text-blue-900 tw-my-3">{title}</p>
                <hr className="tw-w-16 tw-mb-5" />
                <p className="tw-text-blue-900 tw-my-3">
                    {description}
                </p>
                <ul className="tw-my-5">
                    <li className="d-flex tw-my-1 tw-text-blue-900 tw-font-semibold"><img src="https://img.icons8.com/emoji/20/000000/check-mark-emoji.png" className="tw-mr-2" /> Study history up to 30 days</li>
                    <li className="d-flex tw-my-1 tw-text-blue-900 tw-font-semibold"><img src="https://img.icons8.com/emoji/20/000000/check-mark-emoji.png" className="tw-mr-2" /> Up to 5 users simultaneously</li>
                    <li className="d-flex tw-my-1 tw-text-blue-900 tw-font-semibold"><img src="https://img.icons8.com/emoji/20/000000/check-mark-emoji.png" className="tw-mr-2" /> Has HEALTH certificate</li>
                </ul>
                <div className="d-flex">
                    <p className="tw-text-2xl tw-font-bold tw-text-yellow-500 tw-m-3">{price}</p>
                    <p className="tw-text-2xl tw-font-bold tw-text-yellow-500 tw-my-3">/</p>
                    <p className="tw-text-2xl tw-font-bold tw-text-gray-300 tw-m-3">{price}</p>
                </div>
                <div className="lg:tw-flex tw-items-center tw-mb-2 lg:tw-mb-0">
                    <p className="tw-text-xl tw-text-blue-900 tw-font-semibold tw-m-3">Color : </p>
                    <div className="tw-flex tw-items-center tw-m-3">
                        <div className="tw-bg-yellow-400 tw-w-8 tw-h-8 rounded-circle tw-cursor-pointer tw-mr-2"></div>
                        <div className="tw-bg-green-500 tw-w-8 tw-h-8 rounded-circle tw-cursor-pointer tw-mr-2"></div>
                        <div className="tw-bg-blue-500 tw-w-8 tw-h-8 rounded-circle tw-cursor-pointer tw-mr-2"></div>
                        <div className="tw-bg-red-500 tw-w-8 tw-h-8 rounded-circle tw-cursor-pointer tw-mr-2"></div>
                    </div>
                </div>
                <div className="lg:tw-flex tw-items-center tw-mb-2 lg:tw-mb-0">
                    <p className="tw-text-xl tw-text-blue-900 tw-font-semibold tw-m-3">Size : </p>
                    <div className="tw-flex tw-items-center tw-m-3">
                        <button className="tw-border tw-border-blue-900 hover:tw-bg-blue-800 tw-text-yellow-500 tw-font-bold tw-px-6 tw-py-1 tw-rounded-full tw-mr-2">Small</button>
                        <button className="tw-border tw-border-blue-900 hover:tw-bg-blue-800 tw-text-yellow-500 tw-font-bold tw-px-6 tw-py-1 tw-rounded-full tw-mr-2">Medium</button>
                        <button className="tw-border tw-border-blue-900 hover:tw-bg-blue-800 tw-text-yellow-500 tw-font-bold tw-px-6 tw-py-1 tw-rounded-full tw-mr-2">Large</button>
                    </div>
                </div>
                <div className="lg:tw-flex tw-items-center tw-mb-2 lg:tw-mb-0">
                    <p className="tw-text-xl tw-text-blue-900 tw-font-semibold tw-m-3">Quantity : </p>
                    <div className="tw-w-3/12 md:tw-w-4/12 lg:tw-w-2/12 tw-flex tw-justify-evenly items-center tw-bg-gray-200 tw-rounded-full tw-py-2 tw-ml-2">
                        <a href="#" className="tw-text-yellow-500 tw-font-bold">-</a>
                        <a href="#" className="tw-text-blue-900">1</a>
                        <a href="#" className="tw-text-yellow-500 tw-font-bold">+</a>
                    </div>
                </div>
                <div className="lg:tw-flex lg:tw-justify-between tw-my-5">
                    <button className="tw-bg-yellow-500 tw-px-10 tw-py-3 tw-rounded-full hover:tw-bg-blue-900 tw-text-white tw-font-bold tw-m-2 tw-w-full lg:tw-w-auto">Add to Wishlist</button>
                    <button className="tw-bg-blue-900 tw-px-10 tw-py-3 tw-rounded-full hover:tw-bg-yellow-500 tw-text-white tw-font-bold tw-m-2 tw-w-full lg:tw-w-auto">Add to Compare</button>
                </div>
            </div>
        </div>
    )
}
