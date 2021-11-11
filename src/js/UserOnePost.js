import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UserOnePost = (props) => {
  let location = useLocation().pathname.split('/');
  let id = location[3];

  const [onePost, setOnePost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/create/posts/' + id)
      .then(data => setOnePost(data.data))
      .catch(err => console.log(err))
  }, []);

  if (onePost.post != null ) {
    return(
      <div>
        <Link to='/create/posts' className='link'>User All Posts</Link>
        <h2>{onePost.post.title}</h2>
        <p>{onePost.post.createDate}</p>
        <p>{onePost.post.content}</p>
        <h3>comments</h3>
        <ul>
          {onePost.comments.map((comment) => {
            return (
              <li>
                <div className='commentCard'>
                  <p>{comment.name}, {comment.createDate}</p>
                  <p>{comment.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Link to='/create/posts' className='link'>User All Posts</Link>
      <p>Post not found</p>
    </div>
  )
}

export default UserOnePost;