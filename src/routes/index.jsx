import FrontLayout from '../FrontLayout.jsx'
import AdminLayout from '../AdminLayout.jsx'
import ProductLayout from '../ProductLayout.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import HomePage from '../pages/front/HomePage.jsx'
import AboutPage from '../pages/front/AboutPage.jsx'
import ProductPage from '../pages/front/ProductPage.jsx'
import ProductDetail from '../pages/front/ProductDetail.jsx'
import CartPage from '../pages/front/CartPage.jsx'
import ProductManagement from '../pages/admin/ProductManagement.jsx'
import OrderManagement from '../pages/admin/OrderManagement.jsx'
import CouponManagement from '../pages/admin/CouponManagement.jsx'


const routes = [
  {
    path:'/',
    element: <FrontLayout />,
    children:[
      {
        path:'',
        element: <HomePage />
      },
      {
        path:'about',
        element:<AboutPage />
      },
      {
        path:'product',
        element:<ProductLayout />,
    children:[
      {
        path:'',
        element:<ProductPage />
      },      {
        path:'product/:id',
        element:<ProductDetail />
      },
    ]
      },

      {
        path:'cart',
        element:<CartPage />
      },
    ]
  },{
    path:'/admin',
    element: <AdminLayout />,
    children:[
      {
        path:'product',
        element: <ProductManagement />
      },
      {
        path:'Order',
        element:<OrderManagement />
      },
      {
        path:'Coupon',
        element:<CouponManagement />
      },
    ]
  },
  {
    path:'/login',
    element:<LoginPage />
  }
]

export default routes