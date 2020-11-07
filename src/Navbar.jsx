import React, { useState } from 'react';
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { useStateValues } from './ServiceProvider';
import { auth } from './firebase';

const Navbar = (props) => {
    const [{ basket, user }, dispatch] = useStateValues()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link exact to='/'>
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header_search">
                <input type="text" className="header_search_input" />
                <SearchIcon className="search_icon" />
            </div>
            <div onClick={handleAuthentication} className="header_nav">
                <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
                    <div className="header_option">
                        <span className="header_option_one">Hello
                        {/*!user ? "Guest" : user.email*/}{user?.email || "Guest"}
                        </span>
                        <span className="header_option_two">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_option_one">Returns</span>
                    <span className="header_option_two">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option_one">Your</span>
                    <span className="header_option_two">Prime</span>
                </div>
                <Link exact to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className="header_option_basket">
                        <ShoppingCartIcon />
                        <span className="header_option_two header_basket_count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar

