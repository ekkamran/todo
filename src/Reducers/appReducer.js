function appReducer(state, action) {
  switch (action.type) {
    case 'init_todo':
      let { todos } = action.payload
      return {
        ...state,
        todos
      }
    case 'add_todo':
      return addTodo(state, action)
    case 'delete_todo':
      return deleteTodo(state, action)
    case 'toggle_todo':
      return toggleTodo(state, action)
    case 'edit_todo':
      return editTodo(state, action)
    case 'user_login':
      return {
        ...state,
        authenticated: true
      }
    case 'user_logout':
      return {
        ...state,
        authenticated: false
      }
  }
}

export default appReducer

let addTodo = (state, action) => {
  console.log(action.payload)
  let { todo } = action.payload
  return {
    ...state,
    todos: [...state.todos, todo]
  }
}

let deleteTodo = (state, action) => {
  let { key } = action.payload
  let newTodos = state.todos.filter((item) => item.key !== key)
  return {
    ...state,
    todos: [...newTodos]
  }
}

let toggleTodo = (state, action) => {
  let { key, done } = action.payload
  let item = state.todos.find((item) => item.key === key)
  item.done = done
  let newTodos = state.todos.filter((item) => item.key !== key)
  return {
    ...state,
    todos: [...newTodos, item]
  }
}

let editTodo = (state, action) => {
  let { key, text } = action.payload
  let item = state.todos.find((item) => item.key === key)
  item.text = text

  let newTodos = state.todos.filter((item) => item.key !== key)
  return {
    ...state,
    todos: [...newTodos, item]
  }
}
