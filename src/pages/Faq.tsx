import ContactPageCompo from '../components/Contact/ContactPageCompo'
import PageHead from '../components/PageHead'
const Faq = () => {
  return (
    <div>
        <PageHead pageName={"FAQ"} link={"/faq"}/>
        <ContactPageCompo/>
    </div>
  )
}

export default Faq