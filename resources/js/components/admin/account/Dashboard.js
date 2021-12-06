import React, { useEffect } from 'react'
import InfoBox from '../../InfoBox'
import { connect } from 'react-redux'
import { listOrders } from '../store/actions/OrderActions'

export function Dashboard(props) {

    const { orderCount } = props.orders

    useEffect(() => {
        props.listOrders();
    }, []);

    return (
        <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-p-5">
            <div className="">
                <InfoBox color="red" value={orderCount} text="orders" />
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

function mapStateToProps(state) {
    return {
        orders: state.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listOrders: () => dispatch(listOrders()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
