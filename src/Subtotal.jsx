import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValues } from './ServiceProvider'
import { AddTotal } from './reducer'
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
    const history = useHistory()
    const [{basket}, dispatch] = useStateValues()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                     <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={AddTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={e => history.push("/payment")}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
