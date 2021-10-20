import '../scss/contactForm.scss'
const ContactForm = () => {
  return (
    <div id='contactFormContainer'>
      <div id='contactFormSidebar'>
        <h3>Contact Me</h3>
      </div>
      <div id='contactFormMain'>
        <form>
          <input type='hidden' name='form-name' value='contact' />
          <div className='formFieldContainer'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='formField' id='name' placeholder='Your Name' />
          </div>
          <div className='formFieldContainer'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='formField' id='email' placeholder='email@example.com' />
          </div>
          <div className='formFieldContainer'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' className='formField' name='w3review' rows='4' cols='50' placeholder='How can I help?'></textarea>
          </div>
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
