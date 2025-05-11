import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { posts } from './DB/posts.js'
import { comments } from './DB/comments.js'
import { albums } from './DB/albums.js'
import { todos } from './DB/todos.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App
            posts={posts}
            comments={comments}
            albums={albums}
        />
    </BrowserRouter>
)
