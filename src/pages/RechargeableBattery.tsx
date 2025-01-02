import PageHead from '../components/PageHead'
import RechargeableBatteryCompo from '../components/RechargeableBattery/RechargeableBatteryCompo'
const RechargeableBattery = () => {
  return (
    <div>
        <PageHead pageName={"Rechargeable Battery"} link={"/rechargeable-battery-page"}/>
        <RechargeableBatteryCompo/>
    </div>
  )
}

export default RechargeableBattery