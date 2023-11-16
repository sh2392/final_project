import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Cart.css'

export default function Cart() {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
      
    const handleRemoveFromCart = itemId => {
        dispatch(removeFromCart(itemId));
      };

    let subtotal = 0
    for (var i = 0; i < items.length; i++) {
        subtotal += items[i].price*(1-items[i].discountPercentage/100)
    }
    subtotal = subtotal.toFixed(2)

    return (
        <div className='Cart'>
        <h1>Shopping Cart</h1>
        <div className='cartContent'>
            <div>
            {
                items?.map((item) => {
                    return (
                        <div className='cartItem' key={item.id}>
                            <div className='cartItemInfo'>
                                <div className='image'>
                                    <img src={item.thumbnail} />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>Brand: {item.brand}</p>
                                    <p>${(item.price*(1-item.discountPercentage/100)).toFixed(2)}</p>
                                </div>
                            </div>
                            <div>
                                <p>Quantity: 1</p>
                                <p>Subtotal: ${(item.price*(1-item.discountPercentage/100)).toFixed(2)}</p>
                                <button onClick={() => handleRemoveFromCart(item.id)}>delete</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div>
                <div className='orderSummary'>
                    <div className='orderSummaryContent'>
                        <h3>Order Summary</h3>
                        <h3>{items.length} item(s)</h3>
                    </div>
                    <hr />
                    <div className='orderSummaryContent'>
                        <p>Item(s) subtotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <div className='orderSummaryContent'>
                        <p>Shipping</p>
                        <p>TBD</p>
                    </div>
                    <div className='orderSummaryContent'>
                        <p>Subtotal</p> 
                        <p>${subtotal}</p>     
                    </div>
                    <div className='orderSummaryContent'>
                        <p>Estimated tax</p> 
                        <p>TBD</p>
                    </div>
                    <hr />
                    <div className='orderSummaryContent'>
                        <h3>Order total</h3>
                        <h3>${subtotal}</h3>
                    </div>
                </div>

                <button>Proceed to Checkout</button>
            </div>

        </div>
        </div> 
    )
}