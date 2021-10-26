import React from 'react'
import CategoryBar from './category/CategoryBar'
import CategoryBox from './category/CategoryBox'

export default function Home() {
    return (
        <div>
            <CategoryBar />
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 gap-2 tw-mb-10 tw-my-8 lg:tw-container lg:tw-mx-auto">
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
