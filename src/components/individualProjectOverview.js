import '../scss/individualProjectOverview.scss'
import { isMobileOnly, isTabletOnly } from 'react-device-detect'
import { Link } from 'react-router-dom'

const IndividualProjectOverview = ({ title, overview, index, projectCategories, projectTechnologies }) => {
  let projectCategoriesString = ''
  let projectTechnologiesString = ''
  let projectTextContainerId = 'individualProjectTextContainer'

  if (projectCategories != null) {
    for (let categoryIndex in projectCategories) {
      if (Number(categoryIndex) !== projectCategories.length - 1) {
        projectCategoriesString += ` ${projectCategories[categoryIndex]} /`
      } else {
        projectCategoriesString += ` ${projectCategories[categoryIndex]} `
      }
    }
  }
  if (projectTechnologies != null) {
    for (let technologyIndex in projectTechnologies) {
      if (Number(technologyIndex) !== projectTechnologies.length - 1) {
        projectTechnologiesString += ` ${projectTechnologies[technologyIndex]} /`
      } else {
        projectTechnologiesString += ` ${projectTechnologies[technologyIndex]} `
      }
    }
  }
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
      {!isTabletOnly || !isMobileOnly ? (
        <div id={projectTextContainerId}>
          <h2 className='individualProjectTitle'>{title}</h2>
          <p className='individualProjectOverview'>{overview}</p>
          <p className='individualProjectTags'> {projectCategoriesString} </p>
          <p className='individualProjectTags' id='projectTagsText'>
            {' '}
            {projectTechnologiesString}{' '}
          </p>

          <Link to={`/portfolio/${index}`}>
            <button type='button' className='secondaryButton'>
              VIEW PROJECT
            </button>
          </Link>
        </div>
      ) : (
        <div id={projectTextContainerId}>
          <h2 className='individualProjectTitle'>{title}</h2>
          <p className='individualProjectTags'> {projectCategoriesString} </p>
          <p className='individualProjectTags' id='projectTagsText'>
            {' '}
            {projectTechnologiesString}{' '}
          </p>

          <Link to={`/portfolio/${index}`}>
            <button type='button' className='secondaryButton'>
              VIEW PROJECT
            </button>
          </Link>
        </div>
      )}
      <div id={'projectOverviewNonDesktop'}>
        <p className='individualProjectOverview'>{overview}</p>
      </div>

      {/* </section> */}
    </>
  )
}

export default IndividualProjectOverview
