import { Routes, Route } from 'react-router-dom';
import Navbar from './componenets/navbar';
import Home from './componenets/home';
import Login from './componenets/login';
import Signin from './componenets/signin';
import Dashboard from './componenets/dashboard';
import Account from './componenets/accountInfo';
import Exam from './componenets/exam';
import { useEffect, useState } from 'react';
import PrivateRoute from './componenets/PrivateRoute';
import { Navigate } from 'react-router-dom';

export default function App() {
  const [isLogin, setLogin] = useState(false);
  const [showNavigation, setNavigation] = useState(true);
  const [userData, setUser] = useState({
    fn: '',
    ln: '',
    number: '',
    email: '',
    confmpasswd: '',
    userName: '',
    dashboard: [],
  });


  console.log(userData);

  function setUserHandler(user) {
    setUser(user);
  }

  return (
    <div className="main">
      <Navbar isLogin={isLogin} setLogin={setLogin} showNavigation={showNavigation} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route
          path="/login"
          element={<Login userHandler={setUserHandler} isLogin={isLogin} setLogin={setLogin} />}
        />
        <Route path="/signin" element={<Signin isLogin={isLogin} />} />
        <Route
          path="/exam"
          element={
            <Exam
              isLogin={isLogin}
              showNavigation={showNavigation}
              setNavigation={setNavigation}
              setUser={setUser}
            />
          }
        />
        {isLogin ? (
          <>
            <Route path="/dashboard" element={<Dashboard userData={userData} />} />
            <Route path="/userInfo" element={<Account />} />
          </>
        ) : (
          <Route path="/login" element={<Login isLogin={isLogin} setLogin={setLogin} />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}