import React from 'react'
import { Link } from 'react-router-dom'
import truncate from 'truncate'
import '../styles/product-card.css'

export default function ProductBox(props) {

    const { id, name, image, price, discount } = props

    return (
        <div>
            <div className="tw-rounded-sm tw-mr-2 tw-border tw-border-gray-200 tw-bg-white tw-drop-shadow-2xl">
                <div className="productlabel tw-font-bold tw-text-xs tw-w-6/12 tw-relative tw-rounded-tl-sm tw-py-1"><p>{discount}% Discount</p></div>
                <div className="tw-pt-3">
                    <div className="tw-flex tw-justify-center">
                        <Link to={`/product/${id}`}>
                            <img loading="lazy" className="tw-w-44" src={image} alt="Product Image" title='Product Image' />
                        </Link>
                    </div>
                    <Link to={`/product/${id}`}>
                        <p className="tw-text-center tw-text-gray-600 hover:tw-text-yellow-300 tw-transition tw-duration-500 tw-font-medium tw-mt-3 tw-text-lg tw-px-2">{truncate(name, 20)}</p>
                    </Link>
                    <p className="tw-text-center tw-text-gray-600 tw-transition tw-duration-500 tw-font-bold tw-text-sm tw-my-2">${price} <span className="tw-text-red-500 tw-font-medium tw-ml-1 tw-line-through tw-text-sm">${price}</span></p>
                    <p className="tw-text-center tw-text-gray-600 hover:tw-text-yellow-300 tw-transition tw-duration-500 tw-font-medium tw-text-md tw-px-2">Cosmetics</p>
                    <p className="tw-text-center tw-text-gray-600 tw-font-normal tw-text-xs tw-my-2 tw-px-2">${price} with Subscribe & Save discount</p>
                    <p className="tw-text-center tw-text-gray-600 tw-font-bold tw-text-xs tw-my-2">Ships to Sri lanka</p>
                    <div className="tw-flex tw-justify-between tw-items-center tw-pt-1 tw-px-5">
                        <button className="tw-bg-gray-600 hover:tw-bg-yellow-500 tw-px-2 tw-py-2 tw-rounded-full tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-110"><img src="https://img.icons8.com/material-outlined/20/ffffff/like--v2.png" className="" title='Add to wishlist'/></button>
                        <div className="tw-flex tw-justify-center tw-items-center tw-px-2">
                            <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                            <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                            <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                            <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                            <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                        </div>
                        <button className="tw-bg-gray-600 hover:tw-bg-yellow-500 tw-px-2 tw-py-2 tw-rounded-full tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-110"><img src="https://img.icons8.com/material-outlined/20/ffffff/shopping-cart--v1.png" title='Add to cart'/></button>
                    </div>
                    <div className="tw-pt-3">
                        <Link to={`/product/${id}`}>
                            <button className="tw-bg-yellow-400 hover:tw-bg-gray-600 tw-w-full tw-text-white tw-py-2 tw-rounded-bl-sm tw-rounded-br-sm tw-flex tw-justify-center tw-items-center tw-transition tw-duration-500"><img src="https://img.icons8.com/material-outlined/18/ffffff/info.png" className="tw-mr-1" title='View more'/> More Info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
