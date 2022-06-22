import React, { useEffect } from 'react'
import CategoryBar from './category/CategoryBar'
import CategoryBox from './category/CategoryBox'
import { listCategories } from './admin/store/actions/CategoryActions';
import { connect } from 'react-redux';
import ProductRow from './product/ProductRow';
import Carousel from 'react-bootstrap/Carousel';
import CategoryCard from './category/CategoryCard';
import Instagram from './Instagram';
import CarouselCategory from './category/CarouselCategory';

export function Home(props) {

    const { categories } = props?.categories

    useEffect(() => {
        props.listCategories()
    }, [])

    return (
        <div>
            <div className='tw-mb-8 md:tw-mt-2'>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/slide-1.jpg" alt="First slide" loading='lazy'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/slide-2.jpg" alt="Second slide" loading='lazy'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/images/banner/slide-3.jpg" alt="Third slide" loading='lazy'/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="tw-my-5 tw-mx-5 lg:tw-mx-10">
                <CategoryBar />
            </div>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-4 gap-3 tw-my-5 tw-mx-5 lg:tw-mx-10">
                {
                    categories.slice(0, 4).map(category => (
                        <div key={category?.id}>
                            <CategoryBox name={category?.name} image={category?.image_url} id={category?.id} />
                        </div>
                    ))
                }
            </div>
            <div className="tw-mx-8 tw-mt-5">
                <ProductRow id="3" name="Clothing & Accessories" category_id={6} />
            </div>
            <div className="tw-mx-8 tw-mt-5">
                <ProductRow id="4" name="Electronics" category_id={12} />
            </div>
            <div className='tw-mx-5 tw-mt-5'>
                <CarouselCategory />
            </div>
            <div className="tw-mx-8 tw-mt-5">
                <ProductRow id="1" name="Health & Beauty" category_id={8} />
            </div>
            <div className="tw-mx-8 tw-mt-5">
                <ProductRow id="2" name="Business & Industrial" category_id={9} />
            </div>
            <div className="tw-mx-5 tw-mt-5">
                <div className='tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4'>
                    <CategoryCard name="Business & Industrial" id="1"/>
                    <CategoryCard name="Health & Beauty" id="2" />
                    <CategoryCard name="Clothing & Accessories" id="3" />
                    <CategoryCard name="Electronics" id="4" />
                </div>
            </div>
            <div className="tw-my-20 tw-mx-10 ">
                <Instagram />
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
