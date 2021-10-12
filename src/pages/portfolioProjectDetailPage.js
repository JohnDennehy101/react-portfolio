import ProjectsData from '../data/projectsData.json'
import { useParams } from 'react-router-dom'
import ProjectDetailHeroImage from '../components/projectDetailHeroImage'
import IndividualProjectOverview from '../components/individualProjectOverview'
import ContactMeCallToAction from '../components/contactMeCallToAction'
import '../scss/projectDetailsPage.scss'
// import '../scss/individualProjectOverview.scss'
import { Link } from 'react-router-dom'

const PortfolioProjectDetailPage = () => {
  const { id } = useParams()
  let previousProjectIndex, nextProjectIndex
  const allProjects = ProjectsData
  const project = ProjectsData[id]

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
      <div id={'projectDetailDesktopContainer'}>
        <ProjectDetailHeroImage />

        <div id='projectDetailDesktopInfoContainer'>
          <div id='sidebar'>
            <IndividualProjectOverview
              title={project.title}
              overview={project.overview}
              projectCategories={project.categories}
              projectTechnologies={project.technologies}
            />
          </div>
          <div id='main'>
            <article>
              <h3>Project Background</h3>
              <p>{project.description}</p>
            </article>
            <article>
              <h3>Static Previews</h3>
              <img src='/images/detail/desktop/image-bookmark-preview-1.jpg' />
              <img src='/images/detail/desktop/image-bookmark-preview-2.jpg' />
            </article>
          </div>
        </div>

        <div id='projectNavigator'>
          <div className='projectNavigatorOptionContainer'>
            <Link to={`/portfolio/${previousProjectIndex}`}>
              <div className='arrowContainer'>
                <img src='/images/icons/arrow-left.svg' />
              </div>
              <div className='projectNavigatorOption'>
                <h3>{ProjectsData[previousProjectIndex].title}</h3>
                <p>Previous Project</p>
              </div>
            </Link>
          </div>
          <div className='projectNavigatorOptionContainer'>
            <Link to={`/portfolio/${nextProjectIndex}`}>
              <div className='projectNavigatorOption'>
                <h3>{ProjectsData[nextProjectIndex].title}</h3>
                <p>Next Project</p>
              </div>
              <div className='arrowContainer'>
                <img src='/images/icons/arrow-right.svg' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ContactMeCallToAction />
    </>
  )
}

export default PortfolioProjectDetailPage
