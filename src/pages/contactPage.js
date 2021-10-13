import ContactOverview from '../components/contactOverview'
import ContactForm from '../components/contactForm'
import '../scss/contactPage.scss'

const ContactPage = (props) => {
  return (
    <div id='contact'>
      <ContactOverview />
      <ContactForm />
    </div>
  )
}

export default ContactPage
