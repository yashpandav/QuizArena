import { Routes , Route} from "react-router-dom";
import Navbar from "./componenets/navbar";
import Home from "./componenets/home";
import Login from "./componenets/login";
import Signin from "./componenets/signin";
import Dashboard from "./componenets/dashboard";
import { useEffect , useState } from "react";

function App() {

  const [isLogin , setLogin] = useState(false);

  return(
    <div className="main">
      <Navbar></Navbar>
      <Routes>
        <Route path = '/' element = {<Home></Home>}></Route>
        <Route path="/login" element = {<Login isLogin = {isLogin} setLogin = {setLogin}></Login>}></Route>
        <Route path="/signin" element = {<Signin></Signin>}></Route>
        <Route path="/exam" element = {<exam></exam>}></Route>
        <Route path="/dashboard" element = {<Dashboard></Dashboard>}></Route>
      </Routes>
    </div> 
  )
}

export default App;



//#149eca
//#087ea4