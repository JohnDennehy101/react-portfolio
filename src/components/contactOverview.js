import '../scss/contactOverview.scss'
const ContactOverview = () => {
  return (
    <div id='contactOverview'>
      <div id='sidebarContact'>
        <h3>Get In Touch</h3>
      </div>
      <div id='mainContact'>
        <p>
          I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a software
          development position with a hybrid working model in a company in Cork. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and
          attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
        </p>
        {/* <div id="icons"> */}
        <ul>
          <li>
            <a href='https://github.com/JohnDennehy101' target='_blank' rel='noreferrer'>
              <img src='/images/icons/github_dark.svg' alt='github icon' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/john-dennehy/' target='_blank' rel='noreferrer'>
              <img src='/images/icons/linkedin_dark.svg' alt='linkedin icon' />
            </a>
          </li>
        </ul>

        {/* </div> */}
      </div>
    </div>
  )
}

export default ContactOverview
