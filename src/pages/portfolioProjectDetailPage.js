import ProjectsData from '../data/projectsData.json'
import { useParams } from 'react-router-dom'
import ProjectDetailHeroImage from '../components/projectDetailHeroImage'
import IndividualProjectOverview from '../components/individualProjectOverview'
import '../scss/projectDetailsPage.scss'
import '../scss/individualProjectOverview.scss'

const PortfolioProjectDetailPage = () => {
  const { id } = useParams()
  const project = ProjectsData[id]

  return (
    <div id={'projectDetailDesktopContainer'}>
      <ProjectDetailHeroImage />

      <div id='projectDetailDesktopInfoContainer'>
        <div id='sidebar'>
          <IndividualProjectOverview title={project.title} overview={project.overview} />
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
          <div className='arrowContainer'>
            <img src='/images/icons/arrow-left.svg' />
          </div>
          <div className='projectNavigatorOption'>
            <h3>Fylo</h3>
            <p>Previous Project</p>
          </div>
        </div>
        <div className='projectNavigatorOptionContainer'>
          <div className='projectNavigatorOption'>
            <h3>Fylo</h3>
            <p>Next Project</p>
          </div>
          <div className='arrowContainer'>
            <img src='/images/icons/arrow-right.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioProjectDetailPage
