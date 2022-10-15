import React from 'react'
import Logo from '../assets/niu-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ zIndex: 1000 }} className="fixed top-8 mx-auto w-screen">
      <div  className='flex w-5/6 p-3 px-6 justify-center sm:justify-between  mx-auto max-w-600 items-center rounded-full drop-shadow bg-white '>

        <Link to="/">
          <div className="logo flex flex-row items-center gap-2 cursor-pointer">
              <span className='h-8'><img className='h-full w-auto object-cover' src={Logo} alt="" /></span>
              <h2 className='text-2xl font-bold'>note it up</h2>
          </div> 
        </Link>

          <div className=" hidden sm:block join text-xl rounded-full bg-[#1D1D1F] text-white px-5 py-1 cursor-pointer">
              join in
          </div>

      </div>
    </div>
  )
}

export default Navbar