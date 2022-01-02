import React, { useEffect } from 'react'
import CategoryBar from './category/CategoryBar'
import CategoryBox from './category/CategoryBox'
import CategoryIcon from './category/CategoryIcon'
import OfferProduct from './product/OfferProduct';
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
                <ProductRow id="3" name="Clothing & Accessories" category_id={6} />
            </div>
            <div className="tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <ProductRow id="4" name="Electronics" category_id={12} />
            </div>
            <div className="tw-my-8 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <div className='tw-grid md:tw-py-5 tw-grid-cols-2 sm:tw-grid-cols-4 md:tw-grid-cols-5 lg:tw-grid-cols-7 tw-gap-5 tw-items-center'>
                    <CategoryIcon id="1" Name="Best Deals" Image="https://img.icons8.com/fluency-systems-regular/40/1E3A8A/best-sales.png"/>
                    <CategoryIcon id="2" Name="Medicines" Image="https://img.icons8.com/ios/40/1E3A8A/aed.png"/>
                    <CategoryIcon id="3" Name="Health & Beauty" Image="https://img.icons8.com/material-outlined/40/1E3A8A/lipstick.png"/>
                    <CategoryIcon id="4" Name="Home Appliances" Image="https://img.icons8.com/material-outlined/40/1E3A8A/insurance-furniture.png"/>
                    <CategoryIcon id="5" Name="Accessories" Image="https://img.icons8.com/material-outlined/40/1E3A8A/accessibility2.png"/>
                    <CategoryIcon id="6" Name="Office Suppliances" Image="https://img.icons8.com/material-outlined/40/1E3A8A/home-office.png"/>
                    <CategoryIcon id="7" Name="Best Offers" Image="https://img.icons8.com/material-outlined/40/1E3A8A/price-tag.png"/>
                </div>
            </div>
            <div className="tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <ProductRow id="1" name="Health & Beauty" category_id={8} />
            </div>
            <div className="tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <ProductRow id="2" name="Business & Industrial" category_id={9} />
            </div>
            <div className="tw-my-5 md:tw-my-10 tw-mx-5 lg:tw-mx-10">
                <p className='tw-text-center tw-text-blue-900 tw-text-3xl tw-font-semibold tw-mb-5'>Offer Products</p>
                <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-10'>
                    <OfferProduct name="Candid Whitening Kit" Price="$129.00" OriginalPrice="$150.00"/>
                    <OfferProduct name="Honest Multi-surface Pro" Price="$49.00" OriginalPrice="$55.00"/>
                    <OfferProduct name="SuperBrush X200 Higenic" Price="$97.00" OriginalPrice="$105.00"/>
                    <OfferProduct name="Somersung Sonic X2000" Price="$39.00" OriginalPrice="$46.00"/>
                </div>
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
