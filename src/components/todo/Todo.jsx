import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from './../../axios'

//Import context
import TodosContext from './../../context/todos'

//Import Components
import EditTodo from './EditTodo'

function Todo(props) {
  const todosContext = useContext(TodosContext)
  let [edit, setEdit] = useState(false)
  let { item } = props

  let doneHandler = () => {
    axios
      .put(`/todos/${item.key}.json`, { done: !item.done, text: item.text })
      .then((response) =>
        todosContext.dispatch({
          type: 'toggle_todo',
          payload: { key: item.key, done: !item.done ? true : false }
        })
      )

    /*  todosContext.dispatch({
      type: 'toggle_todo',
      payload: {
        key: item.key,
        done: !item.done ? true : false
      }
    }) */
  }

  let deleteHandler = () => {
    axios
      .delete(`/todos/${item.key}.json`)
      .then((response) => {
        todosContext.dispatch({
          type: 'delete_todo',
          payload: { key: item.key }
        })
      })
      .catch((err) => console.log(err))
  }

  let editHandler = (text) => {
    axios
      .put(`/todos/${item.key}.json`, { done: item.done, text })
      .then((response) =>
        todosContext.dispatch({
          type: 'edit_todo',
          payload: { key: item.key, text }
        })
      )
      .catch((err) => console.log(err))

    setEdit(false)
  }

  return (
    <>
      {!edit ? (
        <div className='col-6 mb-2'>
          <div className='d-flex justify-content-between align-items-center border rounded p-3'>
            <Link to={`/todos/${item.key}`}>{item.text}</Link>
            <div>
              <button
                type='button'
                className={`btn btn-sm mr-1 ${
                  !item.done ? 'btn-success' : 'btn-warning'
                }`}
                onClick={doneHandler}
              >
                {item.done ? 'undone' : 'done'}
              </button>
              <button
                type='button'
                className='btn btn-info btn-sm'
                onClick={() => setEdit(true)}
              >
                edit
              </button>
              <button
                type='button'
                className='btn btn-danger btn-sm ml-1'
                onClick={deleteHandler}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EditTodo text={item.text} edit={editHandler} />
      )}
    </>
  )
}

export default Todo
