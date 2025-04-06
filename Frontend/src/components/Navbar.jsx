import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ShinyText from './ShinyText'

const Navbar = () => {
  const location = useLocation()

  const links = [
    { label: "Home", value: "home", path: "/" },
    { label: "Process", value: "process", path: "/process" },
    { label: "About", value: "about", path: "/about" },
    { label: "Team", value: "team", path: "/team" },
  ]

  return (
    <div className='flex justify-between items-center'>
      <div>
        <button className='invisible whitespace-nowrap text-white text-xl font-semibold'>
          Memory Lane
        </button>
      </div>

      <ul className='flex mx-[450px] text-neutral-600 bg-neutral-900 rounded-lg py-3'>
        {links.map(link => {
          const isActive = location.pathname === link.path

          return (
            <li
              key={link.value}
              className={`cursor-pointer px-6 transition-colors duration-300 hover:text-neutral-300 ${
                isActive ? 'text-neutral-300' : ''
              }`}
            >
              <Link to={link.path} className="block w-full h-full">
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>

      <div>
        <button className='text-white whitespace-nowrap text-md border-2 px-3 py-[6px] rounded-xl border-neutral-600 hover:border-neutral-400 '>
          <ShinyText text="Sign In" disabled={false} speed={2} className='custom-class' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
