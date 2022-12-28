import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import AddTask from './pages/AddTask/AddTask'
import CompleteTask from './pages/CompleteTask/CompleteTask'
import Login from './pages/Login/Login'
import MyTask from './pages/MyTask/MyTask'
import Register from './pages/Register/Register'
import Theme from './sharedPages/theme'
import './style.scss'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<AddTask></AddTask>
        },
        {
          path:'/mytask',
          element:<MyTask></MyTask>
        },
        {
          path:'/completetask',
          element:<CompleteTask></CompleteTask>
        },
        {
          path:'/theme',
          element:<Theme></Theme>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
