import AboutPageCompo from '../components/About/AboutPageCompo'
import PageHead from '../components/PageHead'
const AboutPage = () => {
  return (
    <div>
        <PageHead pageName={"About"} link={"/about-us"}/>
        <AboutPageCompo/>
    </div>
  )
}

export default AboutPage