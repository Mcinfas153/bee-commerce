import React from 'react'

export default function CategoryRound(props) {

    const { name } = props

    return (
        <div className="categoryRound mx-auto">
            <img src="../images/Category/electronics.jpg" className="rounded-circle tw-cursor-pointer mx-auto tw-w-20 lg:tw-w-full" />
            <p className="tw-font-bold text-center">{name}</p>
        </div>
    )
}
