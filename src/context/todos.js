import React from 'react'

let todosContext = React.createContext({
  todos: [],
  add: () => {},
  delete: () => {},
  done: () => {},
  edit: () => {}
})

export default todosContext
