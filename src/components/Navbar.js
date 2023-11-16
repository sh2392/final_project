import React from 'react'
import './Navbar.css'
import {
    Routes,
    Route,
    Link
  } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

export default function Navbar({isLogin, onSetIsLogin}) {
    const items = useSelector(state => state.cart.items)

    return(
        <nav>
            <div>
                {isLogin ? <Link to='/' >Home</Link> : ''}              
            </div>
            <div className='nav_right'>
                {isLogin ?   
                <Link to='/cart'>
                    <span>🛒</span>
                    {
                        items.length !== 0 && <span calss='cartNumber'>({items.length})</span>
                    }              
                </Link> : ''}
                {isLogin ? <Link onClick={()=>{
                    onSetIsLogin(false)
                    localStorage.removeItem('isLogin')}}>Logout</Link> : <Link>Login</Link>}
            </div>
        </nav>
    )

}