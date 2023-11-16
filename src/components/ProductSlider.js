import React, {useState, useContext} from 'react';
import './ProductSlider.css'

export default function ProductSlider() {
        const [slideIndex, setSlideIndex] = useState(0)
        const {products, setProducts} = useContext(ProductListContext)

        const nextSlide = () => {
            if (slideIndex === 8) {
                setSlideIndex(slideIndex + 1)
            } else {
                setSlideIndex(0)
            }
        }
        console.log(slideIndex)

        const prevSlide = () => {
            
        }
    
        return (
            <div className='productListContainer'>

            <button onClick={prevSlide}>left</button>
            <button onClick={nextSlide}>right</button>
                {
                    products.map((item, index) => {
                        if (index === slideIndex) {
                        return (
                            <div key={item.id} className='slide'>
                                <img src={item.thumbnail}/>
                                <h2>{item.title}</h2>
                                {/* <p>{item.description}</p> */}
                                <p>${item.price}</p>
                            </div>
                        )
                        }
                    })
                }
            </div>
    )
}