import DashboardHolderCompo from '../components/DashboardHolder/DashboardHolderCompo'
import PageHead from '../components/PageHead'
const DashboardHolder = () => {
  return (
    <div>
        <PageHead pageName={"Dashboard Holder"} link={"/dashboard-holder"}/>
        <DashboardHolderCompo/>
    </div>
  )
}

export default DashboardHolder