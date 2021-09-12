import '../scss/contactMeCallToAction.scss'
import { Link } from 'react-router-dom'
import { isMobileOnly, isTablet } from 'react-device-detect'

const ContactMeCallToAction = () => {
  const contactMeCallToActionSectionId = isMobileOnly
    ? 'contactMeCallToActionSectionMobile'
    : isTablet
    ? 'contactMeCallToActionSectionTablet'
    : 'contactMeCallToActionSectionDesktop'
  return (
    <section id={contactMeCallToActionSectionId}>
      <h2>Interested in doing a project together?</h2>
      <div id='divider'></div>
      <Link to='/dashboard'>
        <button type='button'>CONTACT ME</button>
      </Link>
    </section>
  )
}

export default ContactMeCallToAction
