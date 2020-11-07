import React from 'react'
import "./Product.css"
import { useStateValues } from './ServiceProvider'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';
const Product = ({id, title, img, img1, img2, img3, price, rating }) => {
    const [state, dispatch] = useStateValues()
    
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "Add_To_Basket",
            items: {
                id: id,
                title: title,
                img: img,
                img1: img1,
                img2: img2,
                img3: img3,
                price: price,
                rating: rating,
            },
        })
    }
    const wishlisht = (e) => {
        const style = {
            color: red,
        }
    }
    const changeImage = () => {}
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <span className="like" onClick={wishlisht} >
                    <FavoriteIcon />
                </span>
                <p className="product__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            return <p>🌟</p>
                        })}   
                </div>
            </div>
            <img src={img} className="remote1" alt=""/>
            <div className="content-2">
                <div className="sub-image">
                    <a><img onClick={changeImage} src={img} alt="" /></a>
                    <a><img onClick={changeImage} src={img1} alt="" /></a>
                    <a><img onClick={changeImage} src={img2} alt="" /></a>
                    <a><img onClick={changeImage} src={img3} alt="" /></a>
                </div>
            </div>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
