import React, { useEffect } from 'react'
import ProductBox from './ProductBox'
import Slider from "react-slick";
import { connect } from 'react-redux';
import { listProducts } from '../admin/store/actions/ProductAction';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ProductRow(props) {

    const { name, category_id } = props
    const { products } = props.products

    let settings = {
        dots: false,
        className: "center",
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    useEffect(() => {
        props.listProducts(category_id)
    }, [])

    return (
        <div className="tw-my-10">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                <p className="tw-text-xl tw-font-bold tw-uppercase tw-tracking-wide">{name}</p>
                <button className="tw-bg-yellow-500 hover:tw-bg-blue-900 tw-text-white tw-font-bold tw-py-2 tw-px-8 tw-hidden sm:tw-block">Show All 🠒</button>
            </div>
            <Slider {...settings}>
                {
                    products.map(product => <ProductBox key={product?.id} id={product?.id} name={product?.title} price={product?.price} image={product?.picture_url} />)
                }
            </Slider>
            <button className="tw-bg-yellow-500 hover:tw-bg-blue-900 tw-text-white tw-font-bold tw-my-3 tw-py-2 sm:tw-hidden tw-rounded tw-w-full">Show All 🠒</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listProducts: (category_id) => dispatch(listProducts(category_id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
