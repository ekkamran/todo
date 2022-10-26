import React, { useState, useContext } from 'react'
import axios from '../../axios'

//Import context
import TodosContext from './../../context/todos'
function FormAddTodo(props) {
  const todosContext = useContext(TodosContext)
  const [text, setText] = useState(' ')

  let formHandler = (e) => {
    e.preventDefault()
    if (text.length > 1) {
      let todo = { done: false, text }
      axios
        .post(`/todos.json`, todo)
        .then((response) => {
          todosContext.dispatch({
            type: 'add_todo',
            payload: { todo: { ...todo, key: response.data.name } }
          })
        })
        .catch((err) => console.log(err))
    }

    setText('')
  }

  let inputHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <form className='form-inline' onSubmit={formHandler}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control mx-sm-3'
          placeholder='i want to do ...'
          value={text}
          onChange={inputHandler}
        />
        <button type='submit' className='btn btn-primary'>
          add
        </button>
      </div>
    </form>
  )
}

export default FormAddTodo
