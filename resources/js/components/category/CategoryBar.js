import React from 'react'
import CategoryRound from './CategoryRound';

export default function CategoryBar() {
    return (
        <div>
            <div className="tw-my-8 tw-mx-7 lg:tw-mx-20">
                <div className="tw-grid tw-grid-cols-3 sm:tw-grid-cols-5 md:tw-grid-cols-6 lg:tw-grid-cols-9 tw-gap-5 tw-mx-auto">
                    <div>
                        <CategoryRound name="Trending" />
                    </div>
                    <div>
                        <CategoryRound name="Offers" />
                    </div>
                    <div>
                        <CategoryRound name="Clothes" />
                    </div>
                    <div>
                        <CategoryRound name="Electronics" />
                    </div>
                    <div>
                        <CategoryRound name="Furnitures" />
                    </div>
                    <div>
                        <CategoryRound name="Men" />
                    </div>
                    <div>
                        <CategoryRound name="Women" />
                    </div>
                    <div>
                        <CategoryRound name="Mobiles" />
                    </div>
                    <div>
                        <CategoryRound name="Groceries" />
                    </div>
                </div>
            </div>
        </div>
    )
}
