import React from 'react'
import "./login.scss"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1> This is Social media app</h1>
                <p> This is the react js app to pracktice real time 
                    social react projects 
                </p>
                <span> if you dont have a acoount then click here</span>
                <Link to="/registor">
                <button>Signup</button>
                </Link>
                
            </div>
            <div className='right' >
                <h1> login page</h1>
                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <button>login</button>
                </form>
            </div>
        </div>



    </div>
  )
}

export default Login