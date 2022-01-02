import React from 'react';

export default function CategoryBox(props) {

    const { name, image } = props

    return (
        <div className="categoryBox tw-px-10 tw-py-10 tw-rounded-md tw-bg-cover bg-center bg-fixed tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-105" style={{ 'background': 'url(' + image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className="tw-text-2xl tw-font-bold tw-text-white tw-text-left">{name}</p>
        </div>
    )
}
