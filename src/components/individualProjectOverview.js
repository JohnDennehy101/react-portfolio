import '../scss/individualProjectOverview.scss'
// import { isMobileOnly, isTablet } from 'react-device-detect'
import { Link } from 'react-router-dom'

const IndividualProjectOverview = ({ title, overview, index }) => {
  //   const individualProjectSectionId = isMobileOnly
  //     ? 'individualProjectSectionMobile'
  //     : isTablet
  //     ? 'individualProjectSectionTablet'
  //     : 'individualProjectSectionDesktop'
  //   const imageFolder = isMobileOnly ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  return (
    <>
      {/* <section id={individualProjectSectionId}>
        <div>
            <img src={`/images/portfolio/${imageFolder}/project_${index + 1}.png`} alt='project screenshot' />
        </div> */}
      <div id='individualProjectTextContainer'>
        <h2 className='individualProjectTitle'>{title}</h2>
        <p className='individualProjectOverview'>{overview}</p>
        <Link to={`/portfolio/${index}`}>
          <button type='button' className='secondaryButton'>
            VIEW PROJECT
          </button>
        </Link>
      </div>
      {/* </section> */}
    </>
  )
}

export default IndividualProjectOverview
