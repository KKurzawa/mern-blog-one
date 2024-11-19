import './App.css'
import IndexPage from './pages/IndexPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import EditPost from './pages/EditPost'
import { UserContextProvider } from './UserContext'

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={'/post/:id'} element={<PostPage />} />
          <Route path={'/edit/:id'} element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App