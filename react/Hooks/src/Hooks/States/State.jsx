import React, { useState, useEffect } from 'react';
import './../../App.css';
function State() {
  const [posts, setPosts] = useState([]);
  const [postId ,setPostId] = useState(1);

  useEffect(() => {
    // Fetch posts from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []); // The empty array [] makes this effect run only once when the component mounts
  const inc = () =>{
    setPostId(postId + 1)
  }
  const dec = () =>{
    if (postId > 0)
    setPostId(postId - 1)
  }
  return (
    <div>
      <h1>
        Posts with id : {postId}
      </h1>
      <div className="buttons">
        <button className='prev' onClick={dec}>prev</button>
      
        <button onClick={inc}>next</button>
      </div>
      <ul>
        {posts.map((post) => (
          <>
          {
            post.id === postId
            ?
            (
              <li>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            )
            :
            ("")
          }
          </>
        ))}
      </ul>
    </div>
  );
}

export default State;
