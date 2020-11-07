import React, { useState, useEffect } from 'react'
import { useStateValues } from './ServiceProvider'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { AddTotal } from './reducer'
import CurrencyFormat from "react-currency-format"
import axios from 'axios'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValues()
    const history = useHistory()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState(true)
    useEffect(() => {
        // Generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async() => {
            const response = await axios({
                method: "post",
                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${AddTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])

    const handleSubmit =  async(e) => {
        e.preventDefault()
        {/*do all the stripe stuff... */ }
        
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: "Empty_Basket"
            })

            history.replace('/orders')
        })
    }

    const handleChange = e => {
        // Listen for changes in the CardElement
        // and display any error as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout" className="link">
                        {basket?.length} items</Link>)
                </h1>
                {/*Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>srno. 230/B/102</p>
                        <p>Sanjay Park, Viman Darshan</p>
                    </div>
                </div>

                {/*Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>   
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(items => {
                                return<CheckoutProduct
                                    id = {items.id}
                                    title = {items.title}
                                    img = {items.img}
                                    price = {items.price}
                                    rating={items.rating}
                                />
                            })}
                    </div>
                </div>

                {/*Payment section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*stripe magic will go here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>
                                            Order Total: {value}
                                        </h3>
                                    )}
                                decimalScale={2}
                                value={AddTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
