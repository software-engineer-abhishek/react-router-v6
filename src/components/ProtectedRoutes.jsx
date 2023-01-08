import React, { useState, useEffect } from "react";
import Login from "./Login";

const ProtectedRoutes = (props) => {
  const [login, setLogin] = useState(false);

  console.log("Login Value on protected route", login)

  const callBackFromLogin = (received) => {
    if(received == true) {
        setLogin(true)
    }
  }

  useEffect(() => {
   let val = localStorage.getItem('CurrentCondition')

   if(val == 'true') {
    setLogin(true)
   }

  }, [])
  

  const { Component } = props;
  return (
    <>
      {login ? (
        <div>
          <Component />
        </div>
      ) : (
        <div>
          <Login callBackFromLogin = {callBackFromLogin} />
        </div>
      )}
    </>
  );
};

export default ProtectedRoutes;
