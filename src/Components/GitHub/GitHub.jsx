import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    //this hook loades the data faster than useeffect while fetching from api
    const data= useLoaderData() //due to this hook no need to use usestate and useffect

    // const [data , setData]=useState([])

    // useEffect( ()=> {
    //     // fetch('https://api.github.com/users/pratapmajge')
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then( (data) => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='text-white m-3 text-3xl p-4 bg-gray-400 text-center'>
      GitHub Followers: {data.followers}

      <img src={data.avatar_url} alt='git pic' width={300}/>
    </div>
  )
}

export default GitHub

export const GitHubloader = async () =>{
    const response =await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
