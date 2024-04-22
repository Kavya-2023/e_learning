
import './index.css'

const AppItem = props => {
  const {appName, imageUrl,des,dur} = props

  return (
   
        <li className="appItemContainer">
        <h1 className="appItemName">{appName}</h1> 
        <p1>{des}</p1> 
        <button className='btn-2'>{dur}</button>
    </li>

  )
}

export default AppItem