import React from 'react'
import PageHead from '../components/PageHead'
import ShopAllCompo from '../components/ShopAll/ShopAllCompo'

const ShopAll = () => {
  return (
    <div className='w-full overflow-x-hidden '>
        <PageHead pageName={"Shop"} link={"/shop"}/>
        <ShopAllCompo/>
    </div>
  )
}

export default ShopAll