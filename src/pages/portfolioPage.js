import IndividualProjectOverview from '../components/individualProjectOverview'
import ProjectsData from '../data/projectsData.json';

const PortfolioPage = () => {


  return (ProjectsData.map((project, i) => <IndividualProjectOverview title={project.title} overview={project.overview} key={i} index={i} />))
}

export default PortfolioPage
