import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {

    return (
        <>
            <nav>
                <div className="nav-logo">
                    <Link to={"/"}><h1>qpick</h1></Link>
                </div>

                <div className="search">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder='Search' />
                </div>

                <div className="nav-icons">
                    <i className="bi bi-bag-heart"></i>
                    <Link to="/cartPage" ><i className="bi bi-cart3" ></i></Link>
                </div>

            </nav>
        </>
    );

}

export default Navbar;
