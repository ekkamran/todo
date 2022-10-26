import React, { useState, useContext } from 'react'

//Import Context
import Todo from './Todo'

//Import context
import TodosContext from './../../context/todos'

function TodoList(props) {
  const todosContext = useContext(TodosContext)
  const [statusDone, setStatusDone] = useState(false)

  let { todos } = todosContext

  let filterTodos = todos.filter((item) => item.done === statusDone)
  return (
    <>
      <nav className='col-6 mb-3'>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <a
            href='/#'
            className='nav-item nav-link active font-weight-bold'
            id='nav-home-tab'
            onClick={() => setStatusDone(false)}
          >
            undone
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
            done
            <span className='badge badge-success'>
              {todos.filter((item) => item.done === true).length}
            </span>
          </a>
        </div>
      </nav>
      {filterTodos.length === 0 ? (
        <p>this isnt any todos</p>
      ) : (
        filterTodos.map((item) => <Todo key={item.key} item={item} />)
      )}
    </>
  )
}

export default TodoList
