import React, { useEffect, useState } from 'react'
import './Home.css'
import NavBar from "/src/components/NavBar/Navbar"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
const Home = () => {

  const [session, setSession] = useState(null)
  const navigate = useNavigate()
  useEffect(() => { 
    if(!auth.currentUser){
      navigate('/')
    }
    

  }, [])

  return (
    <>
      {/* <NavBar /> */}
      <div className='flex flex-col lg:flex-row  lg:justify-between items-center mt-[10%] m-20'>

      <div className="card cursor-pointer">
            <Link to='/plant'><h1 className='flex justify-center items-center font-bold text-xl rounded-2xl border-[2px] border-solid border-black w-[300px] h-[150px] m-10 lg:w-[500px] lg:h-[300px] shadow-xl shadow-black-900 hover:shadow-black'>Plant Disease Detection</h1></Link>
      </div>

      <div className="card cursor-pointer">
        <Link to='/chicken'><h1 className='flex justify-center items-center font-bold text-xl rounded-2xl border-[2px] border-solid border-black m-10 w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] shadow-xl shadow-black-900 hover:shadow-black'>Chicken Disease Detection</h1></Link>
      </div>
        {/* <button className='border-solid border-[4px] border-[red]'><Link to='/main'>Go to Main</Link></button> */}
      </div>
    </>
  )
}

export default Home
