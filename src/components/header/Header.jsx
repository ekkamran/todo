import React, { useContext } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'

// Import Context
import AuthContext from './../../context/auth'
function Header() {
  const location = useLocation()
  const authContext = useContext(AuthContext)
  return (
    <header>
      <div className='navbar navbar-dark bg-dark shadow-sm'>
        <div className='container d-flex justify-content-between'>
          <div className='d-flex'>
            <a href='/#' className='navbar-brand d-flex align-items-center'>
              <strong>Todo App</strong>
            </a>
            <ul className='nav'>
              <li className='nav-item'>
                <NavLink className='nav-link text-white' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to={{
                    pathname: '/about',
                    search: '?name=hesam',
                    hash: '#myhash'
                  }}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'red' : 'white'
                    }
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to={`/contact-us` + location.search}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? 'red' : 'white'
                    }
                  }}
                >
                  ContactUs
                </NavLink>
              </li>
            </ul>
          </div>

          {!authContext.authenticated ? (
            <button
              className='btn btn-success btn-sm'
              onClick={() => authContext.dispatch({ type: 'user_login' })}
            >
              login
            </button>
          ) : (
            <button
              className='btn btn-danger btn-sm'
              onClick={() => authContext.dispatch({ type: 'user_logout' })}
            >
              logout
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
