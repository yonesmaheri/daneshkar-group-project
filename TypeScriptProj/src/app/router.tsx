import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Dashboard from '../Pages/Dashboard'
import Projects from '../Pages/Projects'
import ProjectDetails from '../Pages/ProjectDetails'
import Users from '../Pages/Users'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:id', element: <ProjectDetails /> },
      { path: '/users', element: <Users /> }
    ]
  }
])