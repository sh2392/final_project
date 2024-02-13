import React, {useContext, useEffect} from 'react'
import {ProductContext} from './ProductContext'
import ReactStars from 'react-rating-stars-component'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart, removeFromCart} from './actions/cartAction'
import './Product.css'
import {useNavigate} from 'react-router-dom'

export default function Product() {
    const {selectedProduct, setSelectedProduct} = useContext(ProductContext)
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = item => {
        dispatch(addToCart(item));
      };
      
    const handleRemoveFromCart = itemId => {
        dispatch(removeFromCart(itemId));
      };

    if (!selectedProduct) {
        // useEffect(() => {
        //     // Automatically navigate when the component mounts
        //     navigate('/');
        //   }, []);
        return (
        <h1>Error: product not found</h1>)
    }
       

    console.log(selectedProduct)
    return (
        <div className='product'>
            <div className='imgSlider'>
                <img src={selectedProduct.images[0]}/>
            </div>
            <div className='productInfo'>
                <p id='brand'>{selectedProduct.brand}</p>
                <h2>{selectedProduct.title}</h2>
                <div className='rating'>
                    <p>Rating: </p>
                    <ReactStars readOnly={true} showNumaric={true} count={5} value={selectedProduct.rating} size={20} activeColor='#ffd700'/>
                    <p>{selectedProduct.rating}</p>
                </div>
                <h4>
                    <span className='oldPrice'>${selectedProduct.price}</span>
                    <span>${(selectedProduct.price*(1-selectedProduct.discountPercentage/100)).toFixed(2)}</span>
                </h4>
                <span className='discount'>{selectedProduct.discountPercentage}% OFF</span>
                <p>Description:<br />{selectedProduct.description}</p>
                
                <label htmlFor="quantity">Quantity:</label>
                <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
            </div>
        </div>
    )
}