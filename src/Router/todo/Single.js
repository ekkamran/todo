import React, { useState, useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import axios from './../../axios'

export default function SingleTodo() {
  const [todo, setTodo] = useState(null)
  const [loading, setLoading] = useState(false)
  //const [searchParams, setSearchParams] = useSearchParams()
  const params = useParams()
  console.log(params)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`/todos/${params.id}.json`)
      .then((res) => {
        console.log(res)
        setTodo(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])
  //console.log(searchParams.get('slug'))
  return (
    <main>
      <section className='jumbotron'>
        <div className='container d-flex flex-column align-items-center'>
          <h1 className='jumbotron-heading'>Welcome!</h1>
          <p className='lead text-muted'>
            To get started, add some items to your list:
          </p>
        </div>
      </section>
      <div className='todosList'>
        <div className='container'>
          <div className='d-flex flex-column align-items-center '>
            SingleTodo
          </div>
          {loading ? (
            <h3>Loading data ...</h3>
          ) : (
            todo && (
              <div>
                <h3>{todo.text}</h3>
                <p>{todo.done ? 'its done' : 'its not done yet'}</p>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  )
}
