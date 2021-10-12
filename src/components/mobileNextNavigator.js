import { Link } from 'react-router-dom'
const MobileNextNavigator = ({ nextProjectIndex, nextProjectTitle }) => {
  return (
    <div className='projectNavigatorOptionContainer'>
      <Link to={`/portfolio/${nextProjectIndex}`}>
        <div className='arrowContainer'>
          <img src='/images/icons/arrow-right.svg' alt='right arrow' />
        </div>
        <div className='projectNavigatorOption'>
          <h3>{nextProjectTitle}</h3>
          <p>Next Project</p>
        </div>
      </Link>
    </div>
  )
}

export default MobileNextNavigator
