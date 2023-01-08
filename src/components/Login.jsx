import React, { useState } from 'react'

const Login = (props) => {

    console.log("Props inside Login", props)

    const [mobile,setMobile] = useState()

    console.log({mobile})

    const verify = (m) => {
        console.log('This is called')
        console.log("mobile value is", m)
        if(m = 9999999999) {
            console.log("Login Success")
            props.callBackFromLogin(true)
            localStorage.setItem('CurrentCondition','true')
        } else console.log("Login failed")
    }

  return (
    <>
    <h1>Login Page</h1>
    <input onChange={(e)=>setMobile(e.target.value)} type='tel' placeholder="Enter Mobile No" />

    <button onClick={()=>{verify(mobile)}}>Login</button>

    </>
  )
}

export default Login