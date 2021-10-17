import React from 'react'

export default function CategoryBox() {
    return (
        <div className="categoryBox tw-mt-10 lg:tw-container lg:tw-mx-auto">
            <div className="tw-grid md:tw-grid-cols-3">
                <div className="tw-px-10 tw-py-10 md:tw-mx-4 tw-mx-5 tw-mb-4 tw-rounded-md tw-bg-gradient-to-r tw-from-blue-200 tw-via-pink-400 tw-to-red-500">
                    <p className="tw-text-2xl tw-font-bold tw-text-white">Vaprorizer Charger</p>
                    <button type="button" className="tw-w-auto tw-py-2 tw-px-6 md:tw-px-7 tw-rounded-full tw-bg-blue-900 hover:tw-bg-yellow-500 tw-text-white tw-font-bold tw-mt-10 md:tw-mt-20">Shop Now</button>
                </div>
            </div>
        </div>
    )
}
