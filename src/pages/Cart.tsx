import React from 'react'
import PageHead from '../components/PageHead'
import CartCompo from '../components/Cart/CartCompo'

const Cart = () => {
  return (
    <div className='bg-white'>
        <PageHead pageName={"Cart"} link={"/cart"}/>
        <CartCompo/>
    </div>
  )
}

export default Cart