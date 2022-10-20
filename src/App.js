import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

// Import components
import Header from './components/header/Header'
import FormAddTodo from './components/todo/FormAddTodo'
import Todo from './components/todo/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const [statusDone, setStatusDone] = useState(false)

  let addTodo = (text) => {
    setTodos((prevState) => {
      return [...prevState, { key: Date.now(), done: false, text }]
    })
  }

  let filterTodos = todos.filter((item) => item.done === statusDone)

  return (
    <div className='App'>
      <Header />
      <main>
        <section className='jumbotron'>
          <div className='container d-flex flex-column align-items-center'>
            <h1 className='jumbotron-heading'>Welcome!</h1>
            <p className='lead text-muted'>
              To get started, add some items to your list:
            </p>
            <FormAddTodo add={addTodo} />
          </div>
        </section>
        <div className='todosList'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center '>
              <nav className='col-6 mb-3'>
                <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                  <a
                    href='/#'
                    className='nav-item nav-link active font-weight-bold'
                    id='nav-home-tab'
                    onClick={() => setStatusDone(false)}
                  >
                    undone{' '}
                    <span className='badge badge-secondary'>
                      {todos.filter((item) => item.done === false).length}
                    </span>
                  </a>
                  <a
                    href='/#'
                    className='nav-item nav-link font-weight-bold'
                    id='nav-profile-tab'
                    onClick={() => setStatusDone(true)}
                  >
                    done{' '}
                    <span className='badge badge-success'>
                      {todos.filter((item) => item.done === true).length}
                    </span>
                  </a>
                </div>
              </nav>
              {filterTodos.length === 0 ? (
                <p>this isnt any todos</p>
              ) : (
                filterTodos.map((item) => (
                  <Todo key={item.key} text={item.text} />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
