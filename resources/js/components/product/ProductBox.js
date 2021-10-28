import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductBox(props) {

    const { id, name, image, price } = props

    return (
        <Link to={`/product/${id}`}>
            <div className="tw-transition tw-transform tw-duration-500 hover:tw-scale-105 tw-bg-white hover:tw-border-gray-200 tw-cursor-pointer tw-p-5 tw-transition tw-duration-200 tw-ease-in-out tw-shadow-sm">
                <div className="tw-bg-yellow-500 tw-text-blue-900 tw-font-bold tw-text-xs tw-w-12 tw-uppercase tw-px-1 tw-py-1 tw-text-center tw-rounded-md tw-mb-2">new</div>
                <div className="tw-flex tw-justify-center">
                    <img className="tw-transform tw-transition tw-duration-1000 tw-w-24 hover:tw-scale-75" src={image} />
                </div>
                <p className="tw-text-center tw-text-yellow-500 hover:tw-text-blue-900 tw-transition tw-duration-500 tw-font-medium tw-mt-3 tw-text-sm">{name}</p>
                <p className="tw-text-center tw-text-blue-900 hover:tw-text-yellow-500 tw-transition tw-duration-500 tw-font-bold tw-text-md tw-my-2">${price} <span className="tw-text-red-500 tw-font-medium tw-ml-1 tw-line-through tw-text-sm">${price}</span></p>
                <div className="tw-flex tw-justify-center">
                    <button className="tw-transition tw-duration-500 tw-bg-blue-900 hover:tw-bg-yellow-500 tw-text-yellow-500 hover:tw-text-blue-900 tw-transform hover:tw-scale-110 tw-font-bold tw-px-5 tw-py-1">Add to Cart</button>
                </div>
            </div>
        </Link>
    )
}
