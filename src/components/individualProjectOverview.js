import '../scss/individualProjectOverview.scss'
import { isMobileOnly, isTabletOnly } from 'react-device-detect'
import { Link } from 'react-router-dom'

const IndividualProjectOverview = ({ title, overview, index, projectCategories, projectTechnologies, projectWebLink, projectCodeLink }) => {
  let portfolioDetailPage = false;
  let projectCategoriesString = ''
  let projectTechnologiesString = ''
  let projectTextContainerId = 'individualProjectTextContainer'

  if (projectCategories != null) {
    portfolioDetailPage = true;
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
  return (
    <>
      {!isTabletOnly || !isMobileOnly ? (
        <div id={projectTextContainerId}>
          <h2 className='individualProjectTitle'>{title}</h2>
          <p className='individualProjectOverview'>{overview}</p>
          {portfolioDetailPage === true ?
          <><p className='individualProjectTags'> {projectCategoriesString} </p>
          <p className='individualProjectTags' id='projectTagsText'>
            {' '}
            {projectTechnologiesString}{' '}
          </p> </> : <></>
          }
          
          {portfolioDetailPage === true ? <><a href={projectWebLink} target="_blank" rel="noreferrer" style={{marginBottom: '10px'}}>
            <button type='button' className='primaryButton'>
              VIEW LIVE
            </button> </a>
          <a href={projectCodeLink} target="_blank" rel="noreferrer">
            <button type='button' className='secondaryButton'>
              VIEW CODE
            </button>
          </a> </> : <Link to={`/portfolio/${index}`}> <button type='button' className='secondaryButton'>
              VIEW PROJECT
            </button></Link>}
          
        </div>
      ) : (
        <div id={projectTextContainerId}>
          <h2 className='individualProjectTitle'>{title}</h2>
          <p className='individualProjectTags'> {projectCategoriesString} </p>
          <p className='individualProjectTags' id='projectTagsText'>
            {' '}
            {projectTechnologiesString}{' '}
          </p>

          {portfolioDetailPage === true ? <><a href={projectWebLink} target="_blank" rel="noreferrer" style={{marginBottom: '10px'}}>
            <button type='button' className='primaryButton'>
              VIEW LIVE
            </button> </a>
          <a href={projectCodeLink} target="_blank" rel="noreferrer">
            <button type='button' className='secondaryButton'>
              VIEW CODE
            </button>
          </a> </> : <Link to={`/portfolio/${index}`}> <button type='button' className='secondaryButton'>
              VIEW PROJECT
            </button></Link>}
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
