import { Link } from 'react-router-dom'
import './index.css'

const TabItem = props => {
  const {tabId, displayText,imgUrl,title} = props
  return (
    <li className="tabContainer">
      <div className='tab'>
        <h3>{title}</h3>
        <img src={imgUrl} alt="course" />
        <p>{displayText}</p>
        <Link to={`/${tabId}`}>
           <button className='tab-button'>
            Explore..
           </button>
        </Link>
      </div>
    </li>
  )
}
export default TabItem