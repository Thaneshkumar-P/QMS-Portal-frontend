import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Cookies from 'js-cookie'
import Home from './Home'
import Error404 from './pages/404'
// import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Activity from './pages/Activity'
import Employees from './pages/Employees'
import Project from './pages/Project'
import AdminLogin from './pages/AdminLogin'

const ProtectedRoute = ({ component: Component }) => (
    Cookies.get('token') ? <Component /> : <Navigate to='/login' />
)

const LoginRedirect = ({ component: Component }) => (
    Cookies.get('token') ? <Navigate to='/' /> : <Component />
)


const App = () => {
     return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginRedirect component={Login} />} />
                <Route path='/admin' element={<LoginRedirect component={AdminLogin}/>} />
                <Route path="/" element={<ProtectedRoute component={Home}/>}>
                    {/* <Route path='/dashboard' element={<ProtectedRoute component={Dashboard}/>} /> */}
                    {/* <Route path='/chats' element={<ProtectedRoute component={Chat}/>} /> */}
                    {/* <Route path='/activity' element={<ProtectedRoute component={Activity}/>} /> */}
                    <Route path='/employees' element={<ProtectedRoute component={Employees}/>} />
                    <Route path='/projects' element={<ProtectedRoute component={Project}/>} />
                </Route>
                <Route path='/*' element={<Error404 />} />
            </Routes>
        </Router>
     )
}

export default App;