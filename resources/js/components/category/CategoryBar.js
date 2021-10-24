import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import CategoryRound from './CategoryRound';
import { listCategories, test } from '../admin/store/actions/CategoryActions';

export function CategoryBar(props) {

    const { categories } = props?.categories

    useEffect(() => {
        props.listCategories()
    }, [])

    return (
        <div>
            <div className="tw-my-8 tw-mx-7 lg:tw-mx-20">
                <div className="tw-grid tw-grid-cols-3 sm:tw-grid-cols-5 md:tw-grid-cols-6 lg:tw-grid-cols-9 tw-gap-5 tw-mx-auto">
                    {
                        categories.map(category =>
                            <div>
                                <CategoryRound key={category?.id} name={category?.name} />
                            </div>)
                    }
                </div>
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
        test: () => dispatch(test())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar);