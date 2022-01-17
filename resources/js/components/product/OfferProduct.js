import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryBox(props) {

    const { name, Price, OriginalPrice,id } = props

    return (
        <Link to={`product/${id}`}>
            <div className="categoryBox tw-bg-green-500 tw-px-10 tw-py-10 tw-rounded-md tw-bg-cover bg-center bg-fixed tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-105">
                <p className="tw-text-2xl tw-font-semibold tw-text-blue-900 tw-text-left tw-cursor-pointer">{name}</p>
                <p className='tw-text-3xl tw-font-bold tw-text-yellow-500 tw-text-left tw-my-2'>{Price}</p>
                <p className='tw-text-1xl tw-text-gray-300 tw-text-white tw-text-left tw-line-through'>{OriginalPrice}</p>
                {/* <button type="button" className="tw-w-auto tw-py-2 tw-px-6 md:tw-px-7 tw-rounded-full tw-bg-blue-900 hover:tw-bg-yellow-500 tw-text-white tw-font-bold tw-mt-10 md:tw-mt-20">Shop All</button> */}
            </div>
        </Link>
    )
}
