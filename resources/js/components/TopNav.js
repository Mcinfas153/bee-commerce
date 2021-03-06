import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSignal, faHeart, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export function TopNav(props) {

    const { user } = props

    return (
        <div className="tw-grid tw-grid-cols-12 tw-gap-1 tw-bg-white tw-px-5 tw-py-2">
            <div className="tw-col-span-full md:tw-col-span-2 tw-flex tw-justify-center md:tw-justify-start tw-items-center tw-gap-3">
                <Link to="/" className="tw-flex gap-2">
                    <img src="/images/logo.png" />
                </Link>
            </div>
            <div className="tw-col-span-full md:tw-col-span-7 tw-flex tw-flex-col md:tw-flex-row md:tw-flex tw-justify-center md:tw-justify-center tw-items-center tw-gap-5 tw-mt-5 md:tw-mt-0">
                <p className="tw-text-gray-700">Need help? <span className="tw-font-medium">0020 500</span></p>
                <input type="text" className="tw-bg-gray-100 focus:tw-bg-white tw-rounded-full tw-py-2 tw-px-10 searchInput" placeholder="Search for products..." />
            </div>
            <div className="tw-col-span-full md:tw-col-span-3 tw-hidden md:tw-flex tw-justify-center md:tw-justify-end tw-items-center tw-gap-4 tw-mt-5 md:tw-mt-0">
                {
                    user?.isAuthenticated ?
                        <>
                            <Link to="/my-account"><span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-lg"><FontAwesomeIcon icon={faUser} /></span></Link>
                            <span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-lg"><FontAwesomeIcon icon={faHeart} /></span>
                            <Link to="/cart"><span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-lg"><FontAwesomeIcon icon={faShoppingCart} /></span></Link>
                            <span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-lg"><FontAwesomeIcon icon={faSignal} /></span>
                            <span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-lg"><FontAwesomeIcon title="Logout" icon={faSignInAlt} /></span>
                        </>
                        :
                        <>
                            <Link to="/login"><span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-sm ">Sign In <FontAwesomeIcon title="Login" icon={faUser} className="tw-ml-2" /></span></Link>
                            <div className="tw-border-r-2 tw-border-yellow-300 tw-h-5"></div>
                            <Link to="/cart"><span className="tw-cursor-pointer tw-text-yellow-300 hover:tw-text-gray-700 tw-text-lg"><FontAwesomeIcon title='My Cart' icon={faShoppingCart} /></span></Link>
                        </>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TopNav)