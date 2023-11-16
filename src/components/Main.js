import React from 'react'
import './Main.css'
import ProductList from './ProductList'
import Product from './Product'
import Cart from './Cart'
import {Routes, Route} from 'react-router-dom'

export default function Main() {
    return(
        <main className="main_container">
            {/* show individual product */}
            <Routes>
                <Route path='/' element={<ProductList />}/>
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </main>
    )
}