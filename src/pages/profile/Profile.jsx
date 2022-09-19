import React, {useState, useEffect} from 'react'
import './profile.scss'
import {Link, useNavigate} from 'react-router-dom'
import {BiChevronLeft} from 'react-icons/bi';
import {BsFillGearFill} from 'react-icons/bs'
import MePic from '../../assets/images/me.jpg'
import {useSelector, useDispatch} from 'react-redux'
import {loading} from '../../redux/application/applicationSlice.js'

function Profile() {
  const {darkModeActive} = useSelector(state => state.app)

  const [editImg, setEditImage] = useState(false)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loading(false))
  }, []) 



  const handleGoBack = () => {
    navigate(-1);
  }

  const handleImgEdit = () => {
    setEditImage(prevState => !prevState)
  }

  return (
    <div className={`profilePage ${darkModeActive ? 'darkMode' : ''}`}>
      <div className="topBar">
        <BiChevronLeft className='backBtn' onClick={handleGoBack}/>
        <h3>Profile</h3>
        <Link to='/settings'>
          <BsFillGearFill className='settingsBtn'/>
        </Link>
      </div>
      <div className="profileImg">
          <div className="imgContainer">
            <img src={MePic} alt="" />
          </div>
          <p onClick={handleImgEdit} style={{cursor: "pointer"}}>{editImg ? 'Done' : 'Change'}</p>
      </div>
    </div>
  )
}

export default Profile