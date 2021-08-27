import '../scss/header.scss'
import { isMobile, isTablet } from 'react-device-detect'
import { useState } from 'react'

const Header = (props) => {
  const [open, setOpen] = useState(false)
  const headerClass = isMobile ? 'header-mobile' : isTablet ? 'header-tablet' : 'header-desktop'

  const handleClick = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <>
      {!isMobile ? (
        <header className={headerClass}>
          <img src='/images/logo.svg' alt='Header logo' />

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
          {open ? (
            <div>
              <p>Modal content to go here</p>
            </div>
          ) : (
            <></>
          )}{' '}
        </>
      )}
    </>
  )
}

export default Header
