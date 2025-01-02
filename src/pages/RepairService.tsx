import React from 'react'
import PageHead from '../components/PageHead'
import RepairServiceCompo from '../components/Repair/RepairServiceCompo'
const RepairService = () => {
  return (
    <div>
        <PageHead pageName={"Repair"} link={"/repair"}/>
        <RepairServiceCompo/>
    </div>
  )
}

export default RepairService