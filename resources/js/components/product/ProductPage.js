import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { viewProduct } from '../admin/store/actions/ProductAction';
import CommentSection from './CommentSection';

export function ProductPage(props) {

    const { id } = useParams();
    const { products } = props

    useEffect(() => {
        props.viewProduct(id)
    }, [])

    return (
        <div className="projectPage">
            <div className="tw-grid lg:tw-grid-cols-12 tw-gap-4">
                <div className="lg:tw-col-span-7 tw-mt-10">
                    <ProductCarousel />
                    <ProductInfo info={products?.product} />
                </div>
                <div className="lg:tw-col-span-5 tw-mt-10 sm:tw-px-10 lg:tw-px-0">
                    <CommentSection />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        viewProduct: (productId) => dispatch(viewProduct(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
