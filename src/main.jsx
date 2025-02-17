import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import routes from './routes'
import './App.css'
const router = createHashRouter(routes)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
