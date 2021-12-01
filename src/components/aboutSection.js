import '../scss/aboutSection.scss'
import { Link } from 'react-router-dom'
import { isMobileOnly, isTablet } from 'react-device-detect'

const AboutSection = () => {
  const { innerWidth: width } = window

  const imageClass = Number(width) < 321 ? 'smallMobileImage' : 'normalMobileImage'

  const aboutSectionId = isMobileOnly ? 'aboutSectionMobile' : isTablet ? 'aboutSectionTablet' : 'aboutSectionDesktop'
  const aboutSectionClassName = isMobileOnly ? 'sectionMobile' : isTablet ? 'sectionTablet' : 'sectionDesktop'
  const imageFolder = isMobileOnly ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  return (
    <section className={aboutSectionClassName}>
      <div id={aboutSectionId} className='aboutSection'>
        {/* <div> */}
        <img src={`/images/homepage/${imageFolder}/headshot-profile.jpg`} className={imageClass} alt='Profile Headshot' />

        {/* </div> */}
        <div id='aboutInfoContainer' className='aboutInfoContainerDiv'>
          <h2 className='aboutSectionTitle'>About Me</h2>
          <p className='aboutSectionContent'>
            Full-stack software developer with extensive experience in the full software development lifecycle in an agile environment. I am
            an articulate communicator with a flexible approach to work. Seeking my second role in software development, I am an innovative
            team player with a passion for technology and continuous learning. I aim to apply my Computer Science skills to real-world
            problems through collaboration with colleagues.
          </p>
          <Link to='/portfolio'>
            <button type='button' className='secondaryButton'>
              GO TO PORTFOLIO
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
