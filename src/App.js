import { Routes , Route} from "react-router-dom";
import Navbar from "./componenets/navbar";
import Home from "./componenets/home";
import Login from "./componenets/login";
import Signin from "./componenets/signin";
import Dashboard from "./componenets/dashboard";
import Account from "./componenets/accountInfo";
import Exam from "./componenets/exam";
import { useEffect , useState } from "react";
import PrivateRoute from "./componenets/PrivateRoute";
import { Navigate } from "react-router-dom";
function App() {

  // const [date , setDate] = useState(new Date());s
  const [isLogin , setLogin] = useState(false);
  const [showNavigation , setNavigation] = useState(true);
  const [userData , setUser] = useState([]);
  const [dashboardData , setDashboardData] = useState({
      date : "" ,
      examCategory : "" ,
      score : ""
  })

  useEffect(()=>{
    setUser([])
  } , []);

  function setUserHandler(user){
    setUser(user)
  }

  function dashboardScoreHandler(getScore){
      console.log(getScore);
      setDashboardData((prev) => {
        return{
          ...prev ,
          score : getScore
        }
      })
  }
  
  return(
    <div className="main">
      <Navbar isLogin = {isLogin} setLogin = {setLogin} showNavigation = {showNavigation}></Navbar>
      <Routes>
        <Route path = '/' element = {<Home isLogin = {isLogin}></Home>}></Route>
        <Route path="/login" element = {<Login userHandler = {setUserHandler} isLogin = {isLogin} setLogin = {setLogin}></Login>}></Route>
        <Route path="/signin" element = {<Signin isLogin = {isLogin}></Signin>}></Route>
        <Route path="/exam" element = {<Exam isLogin = {isLogin} showNavigation = {showNavigation} setNavigation = {setNavigation} setDashboardData = {setDashboardData}dashboardScorePasssedHandler = {dashboardScoreHandler}></Exam>}></Route>
        {isLogin ?
              <><Route path="/dashboard" element = {<Dashboard userData = {userData}></Dashboard>}></Route> 
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