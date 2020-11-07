import React from 'react'
import "./CheckoutProduct.css"
import { useStateValues } from './ServiceProvider'


const CheckoutProduct = ({ id, title, img, price, rating }) => {
    const [{basket}, dispatch] = useStateValues()
    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: "Remove_From_Basket",
            id: id,
            
        })
    }
    return (
        <div className="CheckoutProduct">
            <img src={img} alt="" className="CheckoutProduct__img" />
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct_title">{title}</p>
                <p className="CheckoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {Array(rating)
                            .fill()
                            .map((i) => {
                                return <p>🌟</p>
                            })}   
                </div>
                <button onClick={removeFromBasket}> Remove From Basket </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
