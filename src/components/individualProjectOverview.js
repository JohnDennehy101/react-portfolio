import '../scss/individualProjectOverview.scss'
import { isMobileOnly, isTablet } from 'react-device-detect'
import { Link } from 'react-router-dom'

const IndividualProjectOverview = () => {
  const individualProjectSectionId = isMobileOnly
    ? 'individualProjectSectionMobile'
    : isTablet
    ? 'individualProjectSectionTablet'
    : 'individualProjectSectionDesktop'
  const imageFolder = isMobileOnly ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  return (
    <>
      <section id={individualProjectSectionId}>
        <div>
          <img src={`/images/portfolio/${imageFolder}/image-portfolio-insure.jpg`} alt='project screenshot' />
        </div>
        <div id='individualProjectTextContainer' style={{ order: 2 }}>
          <h2 className='individualProjectTitle'>Manage</h2>
          <p className='individualProjectOverview'>
            This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the testimonial slider.
          </p>
          <Link to='/dashboard'>
            <button type='button' className='secondaryButton'>
              VIEW PROJECT
            </button>
          </Link>
        </div>
      </section>

      <section id={individualProjectSectionId}>
        <div>
          <img src={`/images/portfolio/${imageFolder}/image-portfolio-insure.jpg`} alt='project screenshot' />
        </div>
        <div id='individualProjectTextContainer' style={{ order: 2 }}>
          <h2 className='individualProjectTitle'>Manage</h2>
          <p className='individualProjectOverview'>
            This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the testimonial slider.
          </p>
          <Link to='/dashboard'>
            <button type='button' className='secondaryButton'>
              VIEW PROJECT
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default IndividualProjectOverview
