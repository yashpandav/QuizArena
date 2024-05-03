import { Routes , Route} from "react-router-dom";
import Navbar from "./componenets/navbar";
import Home from "./componenets/home";
import Login from "./componenets/login";
import Signin from "./componenets/signin";
import Dashboard from "./componenets/dashboard";
import Account from "./componenets/accountInfo";
import { useEffect , useState } from "react";
import PrivateRoute from "./componenets/PrivateRoute";
import { Navigate } from "react-router-dom";
function App() {

  const [isLogin , setLogin] = useState(false);

  return(
    <div className="main">
      <Navbar isLogin = {isLogin} setLogin = {setLogin}></Navbar>
      <Routes>
        <Route path = '/' element = {<Home isLogin = {isLogin}></Home>}></Route>
        <Route path="/login" element = {<Login isLogin = {isLogin} setLogin = {setLogin}></Login>}></Route>
        <Route path="/signin" element = {<Signin isLogin = {isLogin}></Signin>}></Route>
        <Route path="/exam" element = {<exam isLogin = {isLogin}></exam>}></Route>
        {isLogin ?
              <><Route path="/dashboard" element = {<Dashboard></Dashboard>}></Route> 
              <Route path="/userInfo" element = {<Account></Account>}></Route>
        </> 
                  : 
            <Route path="/login" element = {<Login isLogin = {isLogin} setLogin = {setLogin}></Login>}></Route>
        } 
        {/* <Route path='/dashboard' element={
            <PrivateRoute isLogin={isLogin}>
                <Dashboard />
            </PrivateRoute>
        } /> */}
        <Route path="*" element = {<Navigate to='/'></Navigate>}></Route>
      </Routes>
    </div> 
  )
}

export default App;



//#149eca
//#087ea4