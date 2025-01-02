import FeatureMaxtag from '../components/Maxtag/FeatureMaxtag'
import MaxtagFunctionality from '../components/Maxtag/MaxtagFunctionality'
import OverviewMaxtag from '../components/Maxtag/OverviewMaxtag'
import SlideMaxtag from '../components/Maxtag/SlideMaxtag'
import PageHead from '../components/PageHead'
const MaxTag = () => {
  return (
    <div>
        <PageHead pageName={"MaxTag"} link={"/maxtag"}/>
        <OverviewMaxtag/>
        <SlideMaxtag/>
        <FeatureMaxtag />
        <MaxtagFunctionality/>
    </div>
  )
}

export default MaxTag