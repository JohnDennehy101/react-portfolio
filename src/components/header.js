import '../scss/header.scss'
import { isMobileOnly, isTablet } from 'react-device-detect'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [open, setOpen] = useState(false)
  const headerClass = isMobileOnly ? 'header-mobile' : isTablet ? 'header-tablet' : 'header-desktop'
  const [modalClass, setModalClass] = useState('')

  const handleClick = () => {
    setOpen(!open)
    if (open) {
      setModalClass('modal-slide-out')
    } else {
      setModalClass('modal-slide-in')
    }
  }
  return (
    <>
      {!isMobileOnly ? (
        <header className={headerClass}>
          <img src='/images/logo.svg' alt='Header logo' />

          <ul>
            <li>
              <NavLink exact activeClassName='active' to='/'>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/portfolio'>
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/contact'>
                CONTACT ME
              </NavLink>
            </li>
          </ul>
        </header>
      ) : (
        <>
          <header className={headerClass}>
            <img src='/images/logo.svg' alt='Header logo' />

            {!open ? (
              <img src='/images/icons/hamburger.svg' className='hamburger-icon' alt='Hamburger logo' onClick={handleClick} />
            ) : (
              <img src='/images/icons/close.svg' className='hamburger-icon' alt='Close icon logo' onClick={handleClick} />
            )}
          </header>
          <div id='modalDiv' className={modalClass}>
            <ul>
              <li>
                <a href='#'>HOME</a>
              </li>
              <li>
                <a href='#'>PORTFOLIO</a>
              </li>
              <li>
                <a href='#'>CONTACT ME</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Header
