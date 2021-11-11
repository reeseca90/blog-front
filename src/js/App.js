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


function App() {


  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav /> 
        <section className='mainContent'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/create/posts' element={<Dashboard />} />
            <Route exact path='/view/posts' element={<AllPosts />} />
            <Route exact path='/create/posts/new' element={<CreatePost />} />
            <Route path='/view/posts/:id' element={<ReaderOnePost />} />
            <Route path='/create/posts/:id' element={<UserOnePost />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
