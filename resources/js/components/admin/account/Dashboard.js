import React from 'react'
import InfoBox from '../../InfoBox'

export default function Dashboard() {
    return (
        <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-p-5">
            <div className="">
                <InfoBox color="red" value="40" text="orders" />
            </div>
            <div className="">
                <InfoBox color="blue" value="160" text="returns" />
            </div>
            <div className="">
                <InfoBox color="green" value="2" text="claims" />
            </div>
        </div>
    )
}
