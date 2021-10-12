import { Link } from 'react-router-dom'

const DesktopNextNavigator = ({ nextProjectIndex, nextProjectTitle }) => {
  return (
    <div className='projectNavigatorOptionContainer'>
      <Link to={`/portfolio/${nextProjectIndex}`}>
        <div className='projectNavigatorOption'>
          <h3>{nextProjectTitle}</h3>
          <p>Next Project</p>
        </div>
        <div className='arrowContainer'>
          <img src='/images/icons/arrow-right.svg' alt='right arrow' />
        </div>
      </Link>
    </div>
  )
}

export default DesktopNextNavigator
