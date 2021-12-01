import '../scss/banner.scss'
import { isMobileOnly, isTablet } from 'react-device-detect'

const Banner = () => {
  const bannerSectionId = isMobileOnly ? 'bannerSectionMobile' : isTablet ? 'bannerSectionTablet' : 'bannerSectionDesktop'
  const bannerSectionOverlayId = isMobileOnly ? 'bannerSectionOverlayMobile' : 'bannerSectionOverlayDesktop'
  const heroImageFolder = isMobileOnly ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  return (
    <section>
      <div
        id={bannerSectionId}
        className='bannerSectionDiv'
        style={{ backgroundImage: `url('/images/homepage/${heroImageFolder}/image-homepage-hero.jpg')` }}
      >
        {!isMobileOnly ? (
          <div id={bannerSectionOverlayId} className='bannerSectionOverlayDiv'>
            <h1 className='bannerSectionTitle'>Hey, I'm John Dennehy, a full-stack software developer.</h1>
            <a href='#aboutInfoContainer'>
              <button type='button'>
                <div id='dropdownButtonDiv' style={{ backgroundImage: 'url(/images/icons/down-arrows.svg)' }}>
                  <img src='/images/icons/down-arrows.svg' alt='Down arrows icon' />
                </div>
                <span>ABOUT ME</span>
              </button>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
      {isMobileOnly ? (
        <div id={bannerSectionOverlayId} className='bannerSectionOverlayDiv'>
          <h1>Hey, I'm John Dennehy, a full-stack software developer.</h1>
          <a href='#aboutInfoContainer'>
            <button type='button'>
              <div id='dropdownButtonDiv' style={{ backgroundImage: 'url(/images/icons/down-arrows.svg)' }}>
                <img src='/images/icons/down-arrows.svg' alt='Banner hero shot of computer monitor' />
              </div>{' '}
              <span>ABOUT ME</span>
            </button>
          </a>
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}

export default Banner
