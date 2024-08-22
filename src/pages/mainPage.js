import React from 'react'
import "./mainPage.css"
import { Link } from 'react-router-dom'

const MainPage = () => {
  return ( 
  <div className='MainBg'> 
           <h1 className='textCenter' >Hush kelibsiz</h1>
      <Link className='textLink' to="/landshaft">Landshaft</Link>
 
  </div>
  )
}

export default MainPage
