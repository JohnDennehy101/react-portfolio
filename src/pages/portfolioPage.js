import IndividualProjectOverview from '../components/individualProjectOverview'
import ProjectsData from '../data/projectsData.json'
import { isMobileOnly, isTablet } from 'react-device-detect'
import '../scss/individualProjectOverview.scss'

const PortfolioPage = () => {
  const individualProjectSectionId = isMobileOnly
    ? 'individualProjectSectionMobile'
    : isTablet
    ? 'individualProjectSectionTablet'
    : 'individualProjectSectionDesktop'
  const imageFolder = isMobileOnly ? 'mobile' : isTablet ? 'tablet' : 'desktop'

  return ProjectsData.map((project, i) => (
    <section id={individualProjectSectionId}>
      <div>
        <img src={`/images/portfolio/${imageFolder}/project_${i + 1}.png`} alt='project screenshot' />
      </div>
      <IndividualProjectOverview title={project.title} overview={project.overview} key={i} index={i} />{' '}
    </section>
  ))
}

export default PortfolioPage
