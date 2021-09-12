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
        <img src={`/images/homepage/${imageFolder}/image-homepage-profile.jpg`} className={imageClass} alt='Profile Headshot' />

        {/* </div> */}
        <div id='aboutInfoContainer' className='aboutInfoContainerDiv'>
          <h2 className='aboutSectionTitle'>About Me</h2>
          <p className='aboutSectionContent'>
            I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools
            are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding,
            you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out
            my work.
          </p>
          <Link to='/dashboard'>
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
