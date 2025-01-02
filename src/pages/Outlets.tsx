import React from 'react'
import PageHead from '../components/PageHead'
import OutletsCompo from '../components/Outlets/OutletsCompo'

const Outlets = () => {
  return (
    <div>
        <PageHead pageName={"Outlets"} link={"/outlet-2"}/>
        <OutletsCompo/>
    </div>
  )
}

export default Outlets