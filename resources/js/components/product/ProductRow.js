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
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
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
        <div className="">
            <p className="tw-text-xl tw-font-bold tw-uppercase tw-tracking-wide tw-mb-3">{name}</p>
            <Slider {...settings}>
                {
                    products.map(product => <ProductBox key={product?.id} id={product?.id} name={product?.title} price={product?.price} image={product?.picture_url} />)
                }
            </Slider>
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
