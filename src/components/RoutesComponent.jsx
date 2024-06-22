import { useLocation, Routes, Route } from "react-router-dom"
import Layout from "../components/base/Layout"
import Home from "../views/Home"
import Chart from "../views/Chart"
import Login from "../views/auth/Login"
import Register from "../views/auth/Register"
import Form from "../views/Form"
import Error from "../views/Error"
import About from "../views/About"
import Team from "../views/Team"

export default function RoutesComponent() {
const location = useLocation()
const noLayoutPaths = ['/login', '/register']
const shouldShowlayout = !noLayoutPaths.includes(location.pathname)
  return (
    <div>
        {shouldShowlayout ?(
            <Layout>
                <Routes>
                    <Route path = "/" element={<Home/>} />
                    <Route path = "/Team" element={<Team/>} />
                    <Route path = "/chart" element={<Chart/>} />
                    <Route path = "/form" element={<Form/>} />
                    <Route path = "/about" element={<About/>} />
                    <Route path = "/*" element={<Error/>} />
                </Routes>
            </Layout>
        ):(
            
            <Routes>
                <Route path = "/register" element={<Register/>} />
                <Route path = "/login" element={<Login/>} />
            </Routes>
        )}
    </div>
  )
}
