import React from 'react'
import './Header.sass'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
  return (
    <header>
        <NavLink to="/" className="logo">
            <i className="fa-solid fa-business-time"></i>
            Work Schedule
        </NavLink>

        

        <nav className='page-navigation'>
            <NavLink to="/">
                <i className="fa fa-calendar"></i>
                Schedule
            </NavLink>

            <NavLink to="/404">
                <i className="fa fa-file-contract"></i>
                Services
            </NavLink>
            <NavLink to="/404">
                <i className="fa fa-comment-dots"></i>
                Discussion
            </NavLink>
            <NavLink to="/404">
                <i className="fa fa-cogs"></i>
                Settings
            </NavLink>
        
            <NavLink to="/about">
                <i class="fa-solid fa-circle-info"></i>
                About Me
            </NavLink>
        </nav>

        <NavLink to="/profile" className="avatar">
            <img src="https://ui-avatars.com/api/?name=Tiago+Goncalves" alt="Profile Picture" />
            <div className='user-more'>
                <span className='user'>Tiago G.</span>
                <span className='more'>View profile</span>
            </div>
        </NavLink>
    </header>
  )
}

export default Header