import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav.jsx'

import PostsData from './components/PostsData/PostsData.jsx'
import Comments from './components/comments/comments.jsx'
import Albums from './components/albums/albums.jsx'
import Container from './components/container/container.jsx'
import Todo from './components/todo/todo.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

import { posts } from './DB/posts.js'
import { comments } from './DB/comments.js'
import { albums } from './DB/albums.js'
import { todos } from './DB/todos.js'

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <Container
              title="Welcome to the Home Page"
              description=""
            />
          }
        />
        <Route
          path="/posts"
          element={
            <div>
              {posts.map(post => (
                <PostsData key={post.id} post={post} />
              ))}
            </div>
          }
        />
        <Route
          path="/comments"
          element={
            <div>
              {comments.map(comment => (
                <Comments key={comment.id} comment={comment} />
              ))}
            </div>
          }
        />
        <Route
          path="/albums"
          element={
            <div>
              {albums.map(album => (
                <Albums key={album.id} album={album} />
              ))}
            </div>
          }
        />
        <Route path="/todos" element={<Todo initialTodos={todos} />} />
        <Route 
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App