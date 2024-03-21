import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Error from '../pages/Error'
import Home from '../pages/Home'

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home />} />
          
           <Route path="/login" element={<Login />}/>  
            <Route path="/signup" element={<Signup />}/>

            <Route path="*" element={<Error />} />
        </Route>
    )
)

export default Router