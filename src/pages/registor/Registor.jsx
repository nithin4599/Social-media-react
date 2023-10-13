import React from 'react'
import "./registor.scss"
import {Link} from "react-router-dom"
const Registor = () => {
  return (
    <div className='registor'>
        <div className='card'>
            <div className='left'>
                <h1> Join the Fam</h1>
                <p> You can signup here to join the family
                </p>
                <span> if you already have a acoount then click here</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className='right' >
                <h1> Signup here</h1>
                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <input type='name' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    <button>Signup</button>
                </form>
            </div>
        </div>



    </div>
  )
}

export default Registor