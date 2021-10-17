import React from 'react'
import CategoryBar from './category/CategoryBar'
import CategoryBox from './category/CategoryBox'

export default function Home() {
    return (
        <div>
            <CategoryBar />
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 gap-2 tw-my-8">
                <div>
                    <CategoryBox name="Electronics" />
                </div>
                <div>
                    <CategoryBox name="Home Appliance" />
                </div>
                <div>
                    <CategoryBox name="Clothing" />
                </div>
            </div>
        </div>
    )
}
