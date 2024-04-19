import {Link} from 'react-scroll'
import React from 'react'

const NavLink = ({ href, title, setNavbarOpen }) => {
  return (
    <Link to={href} onClick={() => setNavbarOpen(false)} smooth={true} duration={1000}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded cursor-pointer md:p-0 hover:text-white'
    >
      {title}
    </Link>
  )
}

export default NavLink;