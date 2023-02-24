import React from 'react';
import Navbar from '../components/Navbar'
import './styles/login.css'
import imgUrl from '/loginbg.png'
const Login = () => {
    return (<>
        <Navbar/>
     <main className="login-container">
        {/* <img className="login-img" src={imgUrl} alt='loginbg'/> */}
        <div className="login-box">
            <form className='form-credentials'>
                <label for='email'>Email</label>
                <input id='email' placeholder='joe@mail.com'></input>
                <label>Password</label>
                <input type='password' placeholder='********'/>
            </form>

        </div>
    </main>

    </>)
}

export default Login;   