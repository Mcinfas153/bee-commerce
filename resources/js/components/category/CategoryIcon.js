import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryIcon(props) {
    const { Image, Name, id } = props
    return (
        <Link to={`/category/${id}/products`}>
            <div className='tw-cursor-pointer tw-mb-3 tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-105'>
                <img src={Image} className='mx-auto tw-mb-3'/>
                <p className='tw-text-center tw-font-bold tw-text-medium tw-text-yellow-500 hover:tw-text-blue-900'>
                    {Name}
                </p>
            </div>
        </Link>
    )
}
