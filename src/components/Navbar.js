import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Apartments Rental</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/home" activeClassName={"active"}>Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/administration" activeClassName={"active"}>Administration</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/administration">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;