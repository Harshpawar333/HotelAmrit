import React, { Component } from 'react';

import Logo from '../assets/images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    constructor () {
        super();
        this.state =  {
            isOpen: false,
        }    
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
   
    render() {
        const { isOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={Logo} alt="Hotel Booking" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/bar">Bar</Link></li>
                        <li><Link to="/fuction-hall">Function hall</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
