import React from 'react'

export default function CategoryIcon(props) {
    const { Image,Name } = props
    return (
        <div>
            <div className='tw-cursor-pointer tw-mb-3'>
                <img src={Image} className='mx-auto tw-mb-3'/>
                <p className='tw-text-center tw-font-bold tw-text-medium tw-text-yellow-500 hover:tw-text-blue-900'>{Name}</p>
            </div>
        </div>
    )
}
