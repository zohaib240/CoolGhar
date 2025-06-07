import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './Home.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx'
import Blog from './Blogs.jsx'


const router = createBrowserRouter(
  [
    {
      path : '',
    element : <Layout />,
    children :[
       {
      path: '',
      element: <Home />
    },
     {
      path: 'services',
      element: <Services />
    },
     {
      path: 'contact',
      element: <Contact />
    },
     {
      path: 'blogs',
      element: <Blog />
    }
    ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
 <RouterProvider router ={router}></RouterProvider>
)
