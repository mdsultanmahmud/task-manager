import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import AddTask from './pages/AddTask/AddTask'
import CompleteTask from './pages/CompleteTask/CompleteTask'
import Login from './pages/Login/Login'
import EditTask from './pages/MyTask/EditTask'
import MyTask from './pages/MyTask/MyTask'
import Register from './pages/Register/Register'
import PrivateRoutes from './privateRoutes/PrivateRoutes'
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
          element:<PrivateRoutes><MyTask></MyTask></PrivateRoutes>
        },
        {
          path:'/mytask/:id',
          element:<EditTask></EditTask>,
          loader: ({params}) => fetch(`http://localhost:5000/alltask/${params.id}`)
        },
        {
          path:'/completetask',
          element:<PrivateRoutes><CompleteTask></CompleteTask></PrivateRoutes>
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
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
