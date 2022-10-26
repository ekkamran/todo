import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Import Components
import TodoList from '../components/todo/TodoList'
import FormAddTodo from '../components/todo/FormAddTodo'

// Import Context
import TodosContext from './../context/todos'
import AuthContext from './../context/auth'

// Import axios
import axios from './../axios'
export default function Home() {
  const navigate = useNavigate()
  const todosContext = useContext(TodosContext)
  const authContext = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  let jsonHandler = (data) => {
    setLoading(false)
    //console.log(data)
    let todos = Object.entries(data).map(([key, value]) => {
      console.log(value)
      console.log(key)
      return {
        ...value,
        key
      }
    })
    todosContext.dispatch({ type: 'init_todo', payload: { todos } })
  }

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/todos.json`)
      .then((response) => jsonHandler(response.data))
      .catch((err) => console.log(err))
  }, [])

  let pageHandler = () => {
    if (true) {
      navigate('/contact-us')
    } else {
      navigate('/about')
    }
  }
  return (
    <main>
      <section className='jumbotron'>
        <div>
          <button onClick={pageHandler}>Test Navigate</button>
        </div>
        <div className='container d-flex flex-column align-items-center'>
          <h1 className='jumbotron-heading'>Welcome!</h1>
          <p className='lead text-muted'>
            To get started, add some items to your list:
          </p>

          <FormAddTodo />
        </div>
      </section>
      <div className='todosList'>
        <div className='container'>
          <div className='d-flex flex-column align-items-center '>
            {loading ? (
              <h2>Loading data ...</h2>
            ) : authContext.authenticated ? (
              <TodoList />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  )
}
