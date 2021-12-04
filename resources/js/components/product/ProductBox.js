import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductBox(props) {

    const { id, name, image, price } = props

    return (
        <div className="tw-rounded-md tw-mr-2 tw-border tw-border-gray-200 tw-bg-white">
            <div className="tw-bg-yellow-500 tw-text-blue-900 tw-rounded-t-md tw-font-bold tw-text-xs tw-w-full tw-uppercase tw-px-1 tw-py-1 tw-text-center tw-mb-2">14% Discount</div>
            <div className="tw-pt-5">
                <div className="tw-flex tw-justify-center">
                    <Link to={`/product/${id}`}>
                        <img loading="lazy" className="tw-w-40 tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-110" src={image} />
                    </Link>
                </div>
                <Link to={`/product/${id}`}>
                    <p className="tw-text-center tw-text-yellow-500 hover:tw-text-blue-900 tw-transition tw-duration-500 tw-font-medium tw-mt-3 tw-text-lg">{name}</p>
                </Link>
                <p className="tw-text-center tw-text-blue-900 hover:tw-text-yellow-500 tw-transition tw-duration-500 tw-font-bold tw-text-sm tw-my-2">${price} <span className="tw-text-red-500 tw-font-medium tw-ml-1 tw-line-through tw-text-sm">${price}</span></p>
                <div className="tw-flex tw-justify-center tw-items-center tw-px-2">
                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                </div>
                <div className="tw-flex tw-justify-center tw-items-center tw-pt-5 tw-px-5">
                    <button className="tw-bg-blue-900 hover:tw-bg-yellow-500 tw-p-2 tw-rounded-full tw-mr-3 tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-110"><img src="https://img.icons8.com/material-outlined/20/ffffff/like--v2.png" className=""/></button>
                    <button className="tw-bg-blue-900 hover:tw-bg-yellow-500 tw-px-2 tw-py-2 tw-rounded-full tw-mr-3 tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-110"><img src="https://img.icons8.com/material-outlined/20/ffffff/favorite-cart.png" className=""/></button>
                    <button className="tw-bg-blue-900 hover:tw-bg-yellow-500 tw-px-2 tw-py-2 tw-rounded-full tw-mr-3 tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-110"><img src="https://img.icons8.com/material-outlined/20/ffffff/shopping-cart--v1.png"/></button>
                </div>
                <div className="tw-pt-3">
                    <button className="tw-bg-blue-900 hover:tw-bg-yellow-500 tw-w-full tw-text-white tw-py-2 tw-rounded-b-md tw-flex tw-justify-center tw-items-center"><img src="https://img.icons8.com/material-outlined/18/ffffff/buy.png" className="tw-mr-1"/> Buy Now</button>
                </div>
            </div>
        </div>
    )
}
