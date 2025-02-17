import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ({url ,icon , itemName}) => {
  const location  = useLocation()
  return (
    <Link to={url} className={`w-full flex justify-between items-center my-3 p-2 rounded-md ${location.pathname === url ? `bg-light-hover` : `` }`}>
      <div className='flex justify-center items-center'>
        <div className='w-5 h-5 mr-3'><img src={icon}/></div>
        <span className='text-main-text'>{itemName}</span>
      </div>
      <FontAwesomeIcon icon={faAngleRight} className='text-main-color' />
    </Link>
  )
}

export default SidebarItem
