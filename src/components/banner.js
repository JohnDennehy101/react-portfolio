import '../scss/banner.scss'
import { Link } from 'react-router-dom'
import { isMobileOnly, isTablet } from 'react-device-detect'

const Banner = () => {
  const bannerSectionId = isMobileOnly ? 'bannerSectionMobile' : isTablet ? 'bannerSectionTablet' : 'bannerSectionDesktop'
  const bannerSectionOverlayId = isMobileOnly ? 'bannerSectionOverlayMobile' : 'bannerSectionOverlayDesktop'
  const heroImageFolder = isMobileOnly ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  return (
    <>
      <div id={bannerSectionId} style={{ backgroundImage: `url('/images/homepage/${heroImageFolder}/image-homepage-hero.jpg')` }}>
        {!isMobileOnly ? (
          <div id={bannerSectionOverlayId}>
            <h1>Hey, I'm John Dennehy, a full-stack software developer.</h1>
            <Link to='/dashboard'>
              <button type='button'>
                <img src='/images/icons/down-arrows.svg' /> <span>ABOUT ME</span>
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
      {isMobileOnly ? (
        <div id={bannerSectionOverlayId}>
          <h1>Hey, I'm John Dennehy, a full-stack software developer.</h1>
          <Link to='/dashboard'>
            <button type='button'>
              <img src='/images/icons/down-arrows.svg' /> <span>ABOUT ME</span>
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Banner
