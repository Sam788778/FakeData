import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.jsx'
import Nav from './components/nav/nav.jsx';

import { PostsData, Comments, Albums, Todo, NotFound } from './pages';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbums(data));

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of our application.</p>
              </div>
            }
          />
          <Route
            path="posts"
            element={
              <div>
                {posts.map(post => (
                  <PostsData key={post.id} post={post} />
                ))}
              </div>
            }
          />
          <Route
            path="comments"
            element={
              <div>
                {comments.map(comment => (
                  <Comments key={comment.id} comment={comment} />
                ))}
              </div>
            }
          />
          <Route
            path="albums"
            element={
              <div>
                {albums.map(album => (
                  <Albums key={album.id} album={album} />
                ))}
              </div>
            }
          />
          <Route path="todos" element={<Todo initialTodos={todos} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;