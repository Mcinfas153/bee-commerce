import React from 'react'

export default function LeftBarItem(props) {
    const { SideBarItem,Image,Classes } = props
    return (
        <div className={Classes}>
            <div className="tw-w-full tw-mx-auto tw-py-4 tw-px-10">
                <div className="tw-flex tw-justify-between tw-items-center">
                    <div className="tw-flex tw-items-center">
                        <img src={Image} className="tw-mr-2"/>
                        <p className="tw-text-blue-900 tw-font-bold">{SideBarItem}</p>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/18/1E3A8A/chevron-right.png"/>
                    </div>
                </div>                
            </div>
        </div>
    )
}
