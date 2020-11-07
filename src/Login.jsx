import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import "./login.css"
import {auth} from "./firebase"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
    }
    const SignUp = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                if (auth) {
                    history.push("/")
                }
                // console.log(auth);
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src='https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png'
                />
            </Link>
            <div className="login__container">
                <h2>Sign-in</h2>
                <form action="">
                    <h3>E-mail</h3>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h3>Password</h3>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    <button className="login__signinButton" onClick={SignIn} type="submit">Sign In</button>
                </form>
                <p>
                    By signing-in you agrre to the AMAZON FAKE CLONE Conditions of use &
                    Sale. Please see our privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button onClick={SignUp} className='login__registerButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login 
