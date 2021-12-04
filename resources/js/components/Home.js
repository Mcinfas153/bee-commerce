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
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-4 gap-3 tw-my-5 tw-mx-5 lg:tw-mx-10">
                {
                    categories.slice(0, 4).map(category => (
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
            <div>
                <div className="tw-my-20 tw-mx-10 tw-text-center">
                    <p className="tw-text-blue-900 tw-text-2xl tw-font-semibold">Follow <a target="_blank" href="https://www.instagram.com/beeonline2021/" className="tw-underline tw-font-bold hover:tw-text-yellow-500">@beeonline2021</a> on Instagram </p>
                    <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-3 tw-my-10">
                        <img src="https://dummyimage.com/1080x1080/000/fff" alt="" loading="lazy" className="tw-rounded tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105" />
                        <img src="https://dummyimage.com/1080x1080/000/fff" alt="" loading="lazy" className="tw-rounded tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105"/>
                        <img src="https://dummyimage.com/1080x1080/000/fff" alt="" loading="lazy" className="tw-rounded tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105"/>
                        <img src="https://dummyimage.com/1080x1080/000/fff" alt="" loading="lazy" className="tw-rounded tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105"/>
                        <img src="https://dummyimage.com/1080x1080/000/fff" alt="" loading="lazy" className="tw-rounded tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105"/>
                        <img src="https://dummyimage.com/1080x1080/000/fff" alt="" loading="lazy" className="tw-rounded tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105"/>
                    </div>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
