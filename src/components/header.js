import '../scss/header.scss'
import { isMobileOnly, isTablet } from 'react-device-detect'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const headerClass = isMobileOnly ? 'headerMobile' : isTablet ? 'headerTablet' : 'headerDesktop'
  const [modalClass, setModalClass] = useState('')

  const handleClick = () => {
    setOpen(!open)
    if (open) {
      setModalClass('modalSlideOut')
    } else {
      setModalClass('modalSlideIn')
    }
  }
  return (
    <>
      {!isMobileOnly ? (
        <header className={headerClass} id='header'>
          <img src='/images/logo_dark.svg' alt='Header logo' />

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
          <header className={headerClass} id='header'>
            <img src='/images/logo_dark.svg' alt='Header logo' />

            {!open ? (
              <img src='/images/icons/hamburger.svg' className='hamburgerIcon' alt='Hamburger logo' onClick={handleClick} />
            ) : (
              <img src='/images/icons/close.svg' className='hamburgerIcon' alt='Close icon logo' onClick={handleClick} />
            )}
          </header>
          <div id='modalDiv' className={modalClass}>
            <ul>
              <li>
                <NavLink onClick={handleClick} to='/'>HOME</NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to='/portfolio'>PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to='/contact'>CONTACT ME</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Header
