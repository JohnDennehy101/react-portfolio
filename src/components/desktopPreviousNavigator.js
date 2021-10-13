import { Link } from 'react-router-dom'

const DesktopPreviousNavigator = ({ previousProjectIndex, previousProjectTitle }) => {
  return (
    <div className='projectNavigatorOptionContainer'>
      <Link to={`/portfolio/${previousProjectIndex}`}>
        <div className='arrowContainer'>
          <img src='/images/icons/arrow-left.svg' alt='left arrow' />
        </div>
        <div className='projectNavigatorOption'>
          <h3>{previousProjectTitle}</h3>
          <p>Previous Project</p>
        </div>
      </Link>
    </div>
  )
}

export default DesktopPreviousNavigator
