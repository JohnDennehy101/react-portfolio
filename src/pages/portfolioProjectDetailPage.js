import ProjectsData from '../data/projectsData.json'
import { useParams } from 'react-router-dom'
import ProjectDetailHeroImage from '../components/projectDetailHeroImage'
import IndividualProjectOverview from '../components/individualProjectOverview'
import ContactMeCallToAction from '../components/contactMeCallToAction'
import '../scss/projectDetailsPage.scss'
import { isMobileOnly, isTablet } from 'react-device-detect'
import DesktopNextNavigator from '../components/desktopNextNavigator'
import MobileNextNavigator from '../components/mobileNextNavigator'
import DesktopPreviousNavigator from '../components/desktopPreviousNavigator'
import IndividualProjectBackground from '../components/individualProjectBackground'
import IndividualProjectStaticPreview from '../components/individualProjectStaticPreview'

const PortfolioProjectDetailPage = () => {
  const { id } = useParams()
  let previousProjectIndex, nextProjectIndex
  const allProjects = ProjectsData
  const project = ProjectsData[id]

  const bannerImagePath = isMobileOnly ? project.bannerImage.mobile : isTablet ? project.bannerImage.tablet : project.bannerImage.desktop
  const previewImagePaths = isMobileOnly ? project.imagePreviews.mobile : isTablet ? project.imagePreviews.tablet : project.imagePreviews.desktop

  if (Number(id) !== allProjects.length - 1) {
    nextProjectIndex = Number(id) + 1
  } else {
    nextProjectIndex = 0
  }

  if (Number(id) !== 0) {
    previousProjectIndex = Number(id) - 1
  } else {
    previousProjectIndex = ProjectsData.length - 1
  }

  return (
    <>
      <div id={'projectDetailContainer'}>
        <ProjectDetailHeroImage bannerImage={bannerImagePath} />

        <div id='projectDetailInfoContainer'>
          <div id='sidebar'>
            <IndividualProjectOverview
              title={project.title}
              overview={project.overview}
              projectCategories={project.categories}
              projectTechnologies={project.technologies}
              projectWebLink={project.webLink}
              projectCodeLink={project.codeLink}
            />
          </div>
          <div id='main'>
            <IndividualProjectBackground background={project.description} />
            <IndividualProjectStaticPreview imagePaths={previewImagePaths} />
          </div>
        </div>

        <div id='projectNavigator'>
          <DesktopPreviousNavigator
            previousProjectIndex={previousProjectIndex}
            previousProjectTitle={ProjectsData[previousProjectIndex].title}
          />
          {!isMobileOnly ? (
            <DesktopNextNavigator nextProjectIndex={nextProjectIndex} nextProjectTitle={ProjectsData[nextProjectIndex].title} />
          ) : (
            <MobileNextNavigator nextProjectIndex={nextProjectIndex} nextProjectTitle={ProjectsData[nextProjectIndex].title} />
          )}
        </div>
      </div>
      <ContactMeCallToAction />
    </>
  )
}

export default PortfolioProjectDetailPage
