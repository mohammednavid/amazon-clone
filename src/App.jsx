import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from './Login';
import { auth } from './firebase';
import { useStateValues } from './ServiceProvider';
// import {loadStripe} from "@stripe/stripe-js"
// import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

// const promise = loadStripe("pk_test_51HUoYOBJmVCJCzdmLojrOMePW9rFuWCaSJt9JQi4uaaYPi535rfjjwap4aravmKWSXmgz4uqjJC9dyWQvng58SR100psvwYw3b")

const App = () => {
    const [{ user }, dispatch] = useStateValues()

    useEffect(() => {
        // will only run once when the app component loads.....
        auth.onAuthStateChanged(authUser => {
            console.log("The user is >>>", authUser)
            if (authUser) {
                // the user is logged in/ the user was logged in
                dispatch({
                    type: "Set_User",
                    user: authUser
                })
            } else {
                // the user logged out
                dispatch({
                    type: "Set_User",
                    user: null,
                })
            }
        })
    }, [])
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/">
                        <Navbar />
                        <Home />
                    </Route>

                    <Route exact path="/home">
                        <Navbar />
                        <Home />
                    </Route>

                    <Route exact path="/checkout">
                        <Navbar />
                        <Checkout />
                    </Route>

                    {/* <Route exact path="/payment">  
                        <Navbar />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route> */}
                    <Route exact path="/orders">
                        <Navbar />
                        <Orders />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
