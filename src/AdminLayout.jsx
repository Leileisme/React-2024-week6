import { Outlet } from "react-router"
import { NavLink } from "react-router"
import { ToastContainer } from 'react-toastify'


const AdminLayout = () => {
  const routes = [
    {
      path:'/admin/product',
      name:'產品管理'
    },
    {
      path:'/admin/order',
      name:'訂單管理'
    },
    {
      path:'/admin/coupon',
      name:'優惠券管理'
    },
    {
      path:'/',
      name:'返回前台'
    },
  ]

  return(<>
 <header className="fixed-top bg-white">
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <a className="navbar-brand">管理員</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              routes.map((route) => (
                <li className="nav-item" key={route.path}>
                    <NavLink className={()=> `nav-link`} aria-current="page" to={route.path} >{route.name}</NavLink>
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

  </>)
}

export default AdminLayout