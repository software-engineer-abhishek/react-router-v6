import { useParams } from 'react-router'
import React from 'react'

const User = () => {
    const params = useParams();
    const {name} = params
  return (
    <h1>{name}</h1>
  )
}

export default User