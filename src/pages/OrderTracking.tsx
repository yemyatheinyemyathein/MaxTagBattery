import React from 'react'
import PageHead from '../components/PageHead'
import OrderTrackingCompo from '../components/OrderTracking/OrderTrackingCompo'

const OrderTracking = () => {
  return (
    <div>
        <PageHead pageName={"Order Tracking"} link={"/order-tracking"}/>
        <OrderTrackingCompo/>
    </div>
  )
}

export default OrderTracking