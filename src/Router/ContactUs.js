import { Outlet, Link } from 'react-router-dom'
export default function ContactUs() {
  return (
    <section className='jumbotron'>
      <div className='container d-flex flex-column align-items-center'>
        <h1 className='jumbotron-heading'>Welcome to ContactUs!</h1>
        <p className='lead text-muted'>
          To get started, add some items to your list:
        </p>
      </div>
      <Link to='/contact-us/form'>back to form</Link>
      <Outlet />
    </section>
  )
}
