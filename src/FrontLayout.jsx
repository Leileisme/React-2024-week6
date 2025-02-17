import { Outlet } from "react-router"
import { NavLink } from "react-router"
import { ToastContainer } from 'react-toastify'



const FrontLayout = () => {
  const routes = [
    {
      path:'/',
      name:'首頁'
    },
    {
      path:'/about',
      name:'關於'
    },
    {
      path:'/product',
      name:'線上商城'
    },
    {
      path:'/cart',
      name:'購物車'
    },
    {
      path:'/login',
      name:'管理員登入'
    },
  ]

  return(<>
  <header className="fixed-top bg-white">
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              routes.map((route) => (
                <li className="nav-item" key={route.path}>
                    <NavLink className="nav-link active" aria-current="page" to={route.path} >{route.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  <div className="container mt-3">
    <Outlet />
  </div>

  <ToastContainer />

  </>)
}

export default FrontLayout