import React from 'react'
import { Link } from 'react-router-dom';

export default function CatergoryCarouselProductCard() {
  return (
    <div>
        <Link to={`product/2`}>
            <img
                className="d-block w-100"
                src="https://dummyimage.com/1080x1080/000/fff"
                loading='lazy'
                alt="Product Image"
            />
        </Link>
    </div>
  )
}
