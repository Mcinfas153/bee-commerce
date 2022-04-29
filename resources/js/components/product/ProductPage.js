import React, { useEffect, useState } from 'react'
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { viewProduct } from '../admin/store/actions/ProductAction';

export function ProductPage(props) {

    const { id } = useParams();
    const { products } = props

    useEffect(() => {
        props.viewProduct(id)
    }, [])

    return (
        <div className="projectPage">
            <div className="tw-grid lg:tw-grid-cols-12 tw-gap-4 tw-items-baseline">
                <div className="lg:tw-col-span-5 tw-mt-10">
                    <ProductCarousel />
                </div>
                <div className="lg:tw-col-span-7 tw-mt-10">
                    <ProductInfo info={products?.product} />
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
