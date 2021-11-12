import { Link, useNavigate } from "react-router-dom";
import '../styles/Nav.css'

const Nav = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    props.setTokenHook('');
    navigate('/');
  }

  if (props.token) {
    return (
      <nav>
        <Link to='/' className='link toLeft'>Home</Link>
        <button onClick={logout}>Logout</button>
        <Link to='/create/posts' className='link'>User Dashboard</Link>
      </nav>
    )
  } 
  else {
    return (
      <nav>
        <Link to='/' className='link toLeft'>Home</Link>
        <Link to='/login' className='link'>Login</Link>
        <Link to='/view/posts' className='link toRight'>View all posts</Link>
      </nav>
    )
  }
}

export default Nav;