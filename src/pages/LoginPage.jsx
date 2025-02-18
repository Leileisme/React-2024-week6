import { useNavigate } from "react-router"

const LoginPage = () => {
  const navigate = useNavigate()
  return(<>
  <div className="container">
    <div>管理員登入</div>
    <button type="button" onClick={()=>  navigate(-1)}>返回前台</button>
  </div>
  </>)
}

export default LoginPage
