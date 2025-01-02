import React from 'react'
import PageHead from '../components/PageHead'
import UserGuideLineCompo from '../components/UserGuideLine/UserGuideLineCompo'

const UserGuideLine = () => {
  return (
    <div>
        <PageHead pageName={"User Guideline"} link={"/user-guide"}/>
        <UserGuideLineCompo/>
    </div>
  )
}

export default UserGuideLine