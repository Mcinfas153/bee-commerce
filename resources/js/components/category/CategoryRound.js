import React from 'react'

export default function CategoryRound(props) {

    const { name } = props

    return (
        <div className="categoryRound mx-auto tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-105">
            <img src="../images/Category/electronics.jpg" className="rounded-circle tw-cursor-pointer mx-auto tw-w-20 lg:tw-w-full" />
            <p className="tw-font-bold text-center">{name}</p>
        </div>
    )
}
