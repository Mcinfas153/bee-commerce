import React from 'react'
import LeftBarItem from './LeftBarItem'
import { Link, useRouteMatch } from 'react-router-dom'

export default function LeftBar() {
    let { url } = useRouteMatch();
    return (
        <div className="LeftBar tw-my-10 tw-mx-5">
            <Link to={`${url}`}><LeftBarItem className="tw-border tw-rounded-t-lg" SideBarItem="My Account" Image="https://img.icons8.com/flat-round/20/000000/positive-dynamic.png" Classes="LeftBarItem tw-border tw-border-opacity-100 tw-cursor-pointer hover:tw-bg-yellow-500 hover:tw-border-none tw-rounded-t-lg" /></Link>
            <Link to={`${url}/profile`}><LeftBarItem SideBarItem="My Profile" Image="https://img.icons8.com/office/20/000000/user.png" Classes="LeftBarItem tw-border tw-border-opacity-100 tw-cursor-pointer hover:tw-bg-yellow-500 hover:tw-border-none" /></Link>
            <LeftBarItem SideBarItem="My Orders" Image="https://img.icons8.com/flat-round/20/000000/list--v1.png" Classes="LeftBarItem tw-border tw-border-opacity-100 tw-cursor-pointer hover:tw-bg-yellow-500 hover:tw-border-none" />
            <LeftBarItem SideBarItem="My Items" Image="https://img.icons8.com/color/20/000000/add-shopping-cart--v1.png" Classes="LeftBarItem tw-border tw-border-opacity-100 tw-cursor-pointer hover:tw-bg-yellow-500 hover:tw-border-none" />
            <LeftBarItem className="tw-border tw-rounded-b-lg" SideBarItem="My Wishlist" Image="https://img.icons8.com/flat-round/20/000000/hearts.png" Classes="LeftBarItem tw-border tw-border-opacity-100 tw-cursor-pointer hover:tw-bg-yellow-500 hover:tw-border-none" />
            <LeftBarItem SideBarItem="My Informations" Image="https://img.icons8.com/office/20/000000/info.png" Classes="LeftBarItem tw-rounded-b-lg tw-border tw-border-opacity-100 tw-cursor-pointer hover:tw-bg-yellow-500 hover:tw-border-none" />
        </div>
    )
}
