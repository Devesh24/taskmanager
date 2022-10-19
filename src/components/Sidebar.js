import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  return (
    <>
    <span className='d-flex' style={{color: props.mode==='light' ? 'black' : 'white'}}>

      <span className='sidebar ps-2 pe-2 mt-3'>
        <div className="my-2">
          <Link className="link icon py-3" to="/"><i className="fa-regular fa-clipboard fa-xl px-3 py-4" /></Link>
        </div>
        <div className="my-2">
          <Link className="link icon py-3" to="/remind"><i className="fa-regular fa-bell fa-xl px-3 py-4" /></Link>
        </div>
        <div className="my-2">
          <Link className="link icon py-3" to="/list"><i className="fa-solid fa-list fa-lg px-3 py-4" /></Link>
        </div>
      </span >

      <span id="slider" className='pe-5 pt-3' style={{display: props.slide}}>
        <Link className='link' to="/"><div className="iconText fs-4 py-2 ps-4 my-2">Tasks</div></Link>
        <Link className='link' to="/remind"><div className="iconText fs-4 py-2 ps-4 pe-5 my-2">Reminders</div></Link>
        <Link className='link' to="/list"><div className="iconText fs-4 py-2 ps-4 pe-5 my-3">Lists</div></Link>
      </span>

    </span> 
    </>
  )
}
