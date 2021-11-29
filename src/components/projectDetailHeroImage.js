import '../scss/projectDetailHeroImage.scss'

const ProjectDetailHeroImage = (props) => {
  
  return (
    <div id='projectDetailHeroImageContainer'>
      <img src={props.bannerImage} alt='project screenshot banner display' />
    </div>
  )
}

export default ProjectDetailHeroImage
