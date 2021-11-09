import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import CategoryRound from './CategoryRound';
import { listCategories } from '../admin/store/actions/CategoryActions';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function CategoryBar(props) {

    const { categories } = props?.categories

    let settings = {
        dots: false,
        className: "center",
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            }
        ]
    };

    useEffect(() => {
        props.listCategories()
    }, [])

    return (
        <Slider {...settings}>
            {
                categories.map(category =>
                    <div key={category?.id}>
                        <CategoryRound name={category?.name} image={category?.image_url} id={category?.id} />
                    </div>
                )
            }
        </Slider>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listCategories: () => dispatch(listCategories()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar);