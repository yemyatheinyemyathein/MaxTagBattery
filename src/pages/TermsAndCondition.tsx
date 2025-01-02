import PageHead from '../components/PageHead'
import TermsConditionCompo from '../components/TermsAndConditions/TermsConditionCompo'
const TermsAndCondition = () => {
  return (
    <div>
        <PageHead pageName={"Terms & Conditions"} link={"/terms-conditions"}/>
        <TermsConditionCompo/>
    </div>
  )
}

export default TermsAndCondition
