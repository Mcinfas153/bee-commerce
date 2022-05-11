import React from 'react'
import truncate from 'truncate'
import { Link } from 'react-router-dom'

export default function CategoryCard(props) {
    const { name, image, id } = props
  return (
    <div className="categoryBox tw-px-8 tw-pt-5 tw-pb-8 tw-rounded-xs tw-bg-white">
        <p className="tw-text-xl tw-font-bold tw-text-black tw-text-left">{name}</p>
        <div className='tw-py-5 tw-grid tw-grid-cols-12 tw-gap-2'>
            <div className='tw-col-span-6'>
                <Link to={`/product/${id}`}>
                    <img src="https://dummyimage.com/400x400/000/fff" alt="" />
                </Link>
            </div>
            <div className='tw-col-span-6'>
                <Link to={`/product/${id}`}>
                    <img src="https://dummyimage.com/400x400/000/fff" alt="" />
                </Link>
            </div>
            <div className='tw-col-span-6'>
                <Link to={`/product/${id}`}>
                    <img src="https://dummyimage.com/400x400/000/fff" alt="" />
                </Link>
            </div>
            <div className='tw-col-span-6'>
                <Link to={`/product/${id}`}>
                    <img src="https://dummyimage.com/400x400/000/fff" alt="" />
                </Link>
            </div>
        </div>
        <Link to={`category/${id}/products`}>
            <button className='btn btn-sm tw-bg-gray-700 tw-transition tw-duration-900 tw-ease-out hover:tw-bg-yellow-300 tw-text-white tw-px-5 tw-rounded-full tw-float-right tw-font-semibold'>See More</button>
        </Link>
    </div>
  )
}
