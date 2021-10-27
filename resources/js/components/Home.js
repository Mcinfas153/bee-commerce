import React, { useEffect } from 'react'
import CategoryBar from './category/CategoryBar'
import CategoryBox from './category/CategoryBox'
import { listCategories } from './admin/store/actions/CategoryActions';
import { connect } from 'react-redux';
import ProductRow from './product/ProductRow';

export function Home(props) {

    const { categories } = props?.categories

    useEffect(() => {
        props.listCategories()
    }, [])

    return (
        <div>
            <div className="tw-my-5 tw-mx-5 lg:tw-mx-10">
                <CategoryBar />
            </div>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 gap-4 tw-my-5 tw-mx-5 lg:tw-mx-10">
                {
                    categories.slice(0, 3).map(category => (
                        <div key={category?.id}>
                            <CategoryBox name={category?.name} image={category?.image_url} />
                        </div>
                    ))
                }
            </div>
            <div className="tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <ProductRow name="Clothing & Accessories" category_id={6} />
            </div>
            <div className="tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <ProductRow name="Electronics" category_id={7} />
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
