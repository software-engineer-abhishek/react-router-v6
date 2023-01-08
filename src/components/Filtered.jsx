import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'



const Filtered = () => {
  const navigate = useNavigate()

    const [searchParam, setSearchParam] = useSearchParams()
    const age = console.log(searchParam.get('age'))

    const NavClick = (val) => {
      console.log("This is called")
      navigate(val)
    }
  return (
    <>
    <h1>Filter</h1>
    <button onClick={()=>{setSearchParam({fil:40})}}>Set age in Query Param</button>
    <input onChange={(e)=>{setSearchParam({new:e.target.value})}} placeholder="Set Query Params"/>

    {/* Navigation on a button click */}
    <button onClick={()=>NavClick('/about')}>Button Navigation</button>
    </>
  )
}

export default Filtered