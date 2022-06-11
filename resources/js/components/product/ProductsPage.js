import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import ProductBox from './ProductBox';
import { connect } from 'react-redux';
import { getCategoryProducts } from '../admin/store/actions/CategoryActions';
import Spinner from '../Spinner';
import FilterSidebar from './FilterSidebar';

export function ProductsPage(props) {
    let { catid } = useParams();

    const { getProducts, discount } = props;
    const { products, listSpinner } = props?.categoryProducts;

    useEffect(() => {
        getProducts(catid)
    }, [catid])

    return (
        listSpinner ?
            <>
                <div className="tw-flex tw-justify-center tw-my-5 md:tw-my-10 tw-mx-5">
                    <Spinner />
                </div>
            </>
            :
            <>
               <div className='tw-grid md:tw-grid-cols-12 tw-gap-1 tw-my-5 md:tw-my-10'>
                    <div className='md:tw-col-span-4 lg:tw-col-span-3 tw-mx-2 tw-mb-5'>
                        <FilterSidebar/>
                    </div>
                    <div className='md:tw-col-span-8 lg:tw-col-span-9'>
                        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-1">
                            {
                                products.map(product =>
                                    <div>
                                        <ProductBox key={product?.id} discount={product?.discount} id={product?.id} name={product?.title} image={product?.picture_url} price={product?.price} />
                                    </div>)
                            }
                        </div>
                    </div>
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