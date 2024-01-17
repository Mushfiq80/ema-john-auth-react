import React, { useContext, useEffect } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logged out successfully');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link>
                {
                    user && <span style={{ color: 'red'}}> Welcome! {user.email} <button onClick={handleLogOut}> Sign Out</button> </span>
                }
            </div>
        </nav>
    );
};

export default Header;