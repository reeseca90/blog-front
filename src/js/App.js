import '../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Dashboard from './Dashboard';
import AllPosts from './AllPosts';
import CreatePost from './CreatePost';
import ReaderOnePost from './ReaderOnePost';
import UserOnePost from './UserOnePost';
import Login from './Login';
import EditPost from './EditPost';
import { useState, useEffect } from 'react/cjs/react.development';

function getToken() {
  const token = localStorage.getItem('token');
  if (token != null) {
    return token;
  } 
  else {
    return null;
  }
}

function App() {

  const [tokenHook, setTokenHook] = useState();

  function setToken(token) {
    localStorage.setItem('token', token.token);
    setTokenHook(token.token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav token={getToken()} setTokenHook={setTokenHook} /> 
        <section className='mainContent'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login setToken={setToken} />} />
            <Route exact path='/create/posts' element={<Dashboard token={getToken()} />} />
            <Route exact path='/view/posts' element={<AllPosts />} />
            <Route exact path='/create/posts/new' element={<CreatePost token={getToken()} />} />
            <Route path='/view/posts/:id' element={<ReaderOnePost />} />
            <Route path='/create/posts/:id' element={<UserOnePost token={getToken()} />} />
            <Route path='/create/posts/:id/edit' element={<EditPost token={getToken()} />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
