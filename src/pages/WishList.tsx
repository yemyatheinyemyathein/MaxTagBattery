import React from 'react'
import PageHead from '../components/PageHead'
import WishlistCompo from '../components/Wishlist/WishlistCompo'

const WishList = () => {
  return (
    <div>
        <PageHead pageName={"Wishlist"} link={"/wishlist"}/>
        <WishlistCompo/>
    </div>
  )
}

export default WishList