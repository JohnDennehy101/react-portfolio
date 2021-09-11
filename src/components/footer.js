import '../scss/footer.scss'
import { isMobileOnly } from 'react-device-detect'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const footerId = isMobileOnly ? 'footerMobile' : 'footerDesktop'
  return (
    <footer id={footerId}>
      <div id='footerLogoAndLinks'>
        <img src='/images/logo_bright.svg' alt='Footer logo' />
        <ul>
          <li>
            <NavLink className='footerLink' to='/'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className='footerLink' to='/portfolio'>
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink className='footerLink' to='/contact'>
              CONTACT ME
            </NavLink>
          </li>
        </ul>
      </div>
      <div id='footerSocialMediaIcons'>
        <ul>
          <li>
            <a href='https://github.com/JohnDennehy101' target='_blank'>
              <img src='/images/icons/github.svg' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/john-dennehy/' target='_blank'>
              <img src='/images/icons/linkedin.svg' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
