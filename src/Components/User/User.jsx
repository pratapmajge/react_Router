import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() // this hook is to display userid on page it will take from url 
  return (
    <div className='bg-gray-300 text-3xl m-2 '>
      User: {userid}
    </div>
  )
}

export default User
