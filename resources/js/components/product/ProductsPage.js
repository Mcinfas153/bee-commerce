import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import ProductBox from './ProductBox';
import { connect } from 'react-redux';
import { getCategoryProducts } from '../admin/store/actions/CategoryActions';
import Spinner from '../Spinner';

export function ProductsPage(props) {
    let { catid } = useParams();

    const { getProducts } = props;
    const { products, listSpinner } = props?.categoryProducts;

    useEffect(() => {
        getProducts(catid)
    }, [catid])

    return (
        listSpinner ?
            <>
                <div className="tw-flex tw-justify-center tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                    <Spinner />
                </div>
            </>
            :
            <>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 gap-3 tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                    {
                        products.map(product =>
                            <div>
                                <ProductBox key={product?.id} id={product?.id} name={product?.title} image={product?.picture_url} price={product?.price} />
                            </div>)
                    }
                </div>
            </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { categoryProducts: state.category }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching actions returned by action creators
        getProducts: (catid) => dispatch(getCategoryProducts(catid)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)