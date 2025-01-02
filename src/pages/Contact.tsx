import ContactPageCompo from '../components/Contact/ContactPageCompo'
import PageHead from '../components/PageHead'
const Contact = () => {
  return (
    <div>
        <PageHead pageName={"Contact Us"} link={"/contact-us"}/>
        <ContactPageCompo/>
    </div>
  )
}

export default Contact