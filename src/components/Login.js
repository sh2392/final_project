import React, {useState} from 'react'
import './Login.css'

//this usually comes from our back-end api, stores in our data base
const userInfo ={
    name: 'Shan',
    password: '123123'
}


export default function Login({onSetIsLogin}) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        console.log('click', userName, password)
        if (userName === userInfo.name && password === userInfo.password) {
            console.log('Login suceeded')
            onSetIsLogin(true)
            localStorage.setItem('isLogin', true)
        }
        else {
            console.log('Login failed')
            onSetIsLogin(false)
        }
    }

    return(
        <form onSubmit={(e) => e.preventDefault()} className='login_form'>
            <h1>Login</h1>
            <div className='form_input'>
                <label>User Name</label>
                <input type='text' onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className='form_input'>
                <label>Password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* <input id='submit_button' type='submit' value='Login' /> */}
            <button id='submit_button' onClick={handleSubmit}>Login</button>
        </form>

    )
}