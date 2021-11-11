import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AllPosts = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/view/posts')
      .then(data => setPosts([...data.data.posts]))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id}><Link to={post._id}>{post.title}</Link>, {post.createDate}</li>
          );
        })}
      </ul> 
    </div>
  )
}

export default AllPosts;