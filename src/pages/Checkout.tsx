import React from 'react'
import PageHead from '../components/PageHead'
import CheckoutCompo from '../components/Checkout/CheckoutCompo'

const Checkout = () => {
  return (
    <div>
        <PageHead pageName={"Checkout"} link={"/checkout"}/>
        <CheckoutCompo/>
    </div>
  )
}

export default Checkout