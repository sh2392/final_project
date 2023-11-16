import React, {useState, useEffect, useContext} from 'react'
import './ProductList.css'
import {Link} from 'react-router-dom'
import {ProductContext, ProductListContext} from './ProductContext'
// import ProductSlider from './ProductSlider'

export default function ProductList() {
    // const [products, setProducts] = useState([])
    const {setSelectedProduct} = useContext(ProductContext)
    const {products, setProducts} = useContext(ProductListContext)

    // this effect only runs once after ui mounted
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products.splice(0,10)))
    }, [])

    console.log(products)

    return (
        <div className='productListContainer'>
            <div className='heroSection'>
                <div>
                    <h1>Welcome</h1>
                    <h2>to the discount store</h2>
                </div>
                <div className='imageBlur'>
                    <img src={products.length > 0 ? products[0].thumbnail: ''} />
                </div>
            </div>
            <h1>Shop All Products</h1>
            {/* <div className="tooltip">Hover over me
                <span className="tooltiptext">Tooltip text</span>
            </div> */}

            {/* <ProductSlider /> */}
            <div className='productGrid'>
                {products.map((item) => {
                    return (
                        <Link onClick={() => setSelectedProduct(item)} key={item.id} to='/product'>
                            <div className='productCard'>
                                <img src={item.thumbnail}/>
                                <h2>{item.title}</h2>
                                {/* <p>{item.description}</p> */}
                                <span className='oldPrice'>${item.price}</span>
                                <span>${(item.price*(1-item.discountPercentage/100)).toFixed(2)}</span>
                                <p>{item.discountPercentage}% OFF</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}