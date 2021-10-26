import React, { useEffect } from 'react'
import CategoryBar from './category/CategoryBar'
import CategoryBox from './category/CategoryBox'
import { listCategories } from './admin/store/actions/CategoryActions';
import { connect } from 'react-redux';

export function Home(props) {

    const { categories } = props?.categories

    useEffect(() => {
        props.listCategories()
    }, [])

    return (
        <div>
            <CategoryBar />
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 gap-2 tw-mb-10 tw-my-8 lg:tw-container lg:tw-mx-auto">
                {
                    categories.slice(0, 3).map(category => (
                        <div key={category?.id}>
                            <CategoryBox name={category?.name} image={category?.image_url} />
                        </div>
                    ))
                }
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
