import React from 'react'
import OverviewDashboardHolder from './OverviewDashboardHolder'
import FeatureSection from './FeatureSection'
import FunctionalitySection from './FunctionalitySection'
import ProductSection from './ProductSection'

const DashboardHolderCompo = () => {
  return (
    <div className='bg-white text-[#7A7A7A]'>
        <OverviewDashboardHolder/>
        <FeatureSection/>
        <FunctionalitySection/>
        <ProductSection/>
    </div>
  )
}

export default DashboardHolderCompo