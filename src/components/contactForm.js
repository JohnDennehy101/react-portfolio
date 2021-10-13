import '../scss/contactForm.scss'
const ContactForm = () => {
  return (
    <div id='contactFormContainer'>
      <div id='contactFormSidebar'>
        <h3>Contact Me</h3>
      </div>
      <div id='contactFormMain'>
        <form>
          <div className='formFieldContainer'>
            <label for='name'>Name</label>
            <input type='text' className='formField' id='name' placeholder='Your Name' />
          </div>
          <div className='formFieldContainer'>
            <label for='email'>Email</label>
            <input type='email' className='formField' id='email' placeholder='email@example.com' />
          </div>
          <div className='formFieldContainer'>
            <label for='message'>Message</label>
            <textarea id='message' className='formField' name='w3review' rows='4' cols='50' placeholder='How can I help?'></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
