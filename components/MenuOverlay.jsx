import React from 'react'
import NavLink from './NavLink'
import { animate, motion } from 'framer-motion'

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <motion.ul initial={{x: 100}} animate={{x: 0}} className='flex flex-col py-4 bg-black items-center w-[50%] h-screen absolute'>
      {
        links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} setNavbarOpen={setNavbarOpen} />
          </li>
        ))
      }
    </motion.ul>
  )
}

export default MenuOverlay