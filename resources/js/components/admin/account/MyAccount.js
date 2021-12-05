import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import LeftBar from './LeftBar'
import Dashboard from './Dashboard'
import Profile from './Profile';

export default function MyAccount() {

    let { path } = useRouteMatch();

    return (
        <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-12 tw-gap-4">
            <div className="md:tw-col-span-5 lg:tw-col-span-4">
                <LeftBar className="tw-fixed tw-top-0" />
            </div>
            <div className="md:tw-col-span-7 lg:tw-col-span-8 tw-hidden md:tw-block">
                <p className="tw-my-10 tw-mx-5">
                    <Switch>
                        <Route exact path={path}>
                            <Dashboard />
                        </Route>
                        <Route path={`${path}/profile`}>
                            <Profile />
                        </Route>
                    </Switch>
                </p>
            </div>
        </div>
    )
}
