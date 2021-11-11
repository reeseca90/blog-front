import { Link } from "react-router-dom";
import '../styles/Nav.css'

const Nav = (props) => {

  return (
    <nav>
      <Link to='/' className='link toLeft'>Home</Link>
      <Link to='/login' className='link'>Login</Link>
      <Link to='/create/posts' className='link'>User Dashboard</Link>
      <Link to='/view/posts' className='link toRight'>Reader all posts</Link>
    </nav>
  )
}

export default Nav;