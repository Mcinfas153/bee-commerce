import React from 'react'

export default function CategoryBox(props) {

    const { name } = props

    return (
        <div className="categoryBox">
            <div className="tw-px-10 tw-py-10 md:tw-mx-4 tw-mx-5 tw-mb-4 tw-rounded-md tw-bg-category-box-image tw-bg-cover bg-center bg-fixed tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-105">
                <p className="tw-text-2xl tw-font-bold tw-text-white">{name}</p>
                <button type="button" className="tw-w-auto tw-py-2 tw-px-6 md:tw-px-7 tw-rounded-full tw-bg-blue-900 hover:tw-bg-yellow-500 tw-text-white tw-font-bold tw-mt-10 md:tw-mt-20">Shop Now</button>
            </div>
        </div>
    )
}
