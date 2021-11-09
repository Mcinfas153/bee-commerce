import React from 'react'
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';

export default function CategoryRound(props) {

    const { id, name, image } = props

    return (
        <Link to={`/category/${id}/products`}>
            <div className="categoryRound mx-auto tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-translate-y-1 hover:tw-scale-105">
                <img src={image} className="rounded-circle tw-cursor-pointer mx-auto tw-w-20 lg:tw-w-full" />
                <p className="tw-font-bold tw-text-xs text-center tw-my-3">
                    <TextTruncate line={2} element="span" truncateText="…" text={name} />
                </p>
            </div>
        </Link>
    )
}
