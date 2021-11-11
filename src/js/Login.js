import axios from 'axios';
import '../styles/Login.css';
const { useState } = require("react")

const Login = (props) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  async function submit() {
    axios.post('http://localhost:3000/login', { username, password })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <form method='POST'>
      <label htmlFor='username'>Username: </label>
      <input type='text' name='username' required={true} onChange={handleUsername} value={username} />

      <label htmlFor='password'>Password: </label>
      <input type='password' name='password' required={true} onChange={handlePassword} value={password} />

      <button type='button' onClick={submit}>Submit</button>
    </form>
  )
}

export default Login;