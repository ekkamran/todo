import React, { useState, useReducer, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

// Import components
import Header from './components/header/Header'

// Import context
import TodosContext from './context/todos'
import AuthContext from './context/auth'

// Import Reducers
import AppReducer from './Reducers/appReducer'

// Import Router
import Home from './Router/Home'

const About = lazy(() => import('./Router/About'))
const ContactUs = lazy(() => import('./Router/ContactUs'))
const Single = lazy(() => import('./Router/todo/Single'))
const NotFound = lazy(() => import('./Router/NotFound'))

function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    todos: [],
    authenticated: false
  })

  return (
    <AuthContext.Provider
      value={{
        authenticated: state.authenticated,
        dispatch
      }}
    >
      <TodosContext.Provider
        value={{
          todos: state.todos,
          dispatch
        }}
      >
        <div className='App'>
          <Header />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/about'
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='/contact-us'
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <ContactUs />
              </Suspense>
            }
          >
            <Route path='form' element={<h2>Contact Us Form</h2>} />
            <Route path='address' element={<h2>Contact Us Address</h2>} />
          </Route>
          <Route
            path='/todos/:id'
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <Single />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<h2>Loading</h2>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </TodosContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
