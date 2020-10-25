import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <header className="header d-flex">
            <h3>
                <Link to="/">UF APP</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/users-list/">Users List</Link>
                </li>
                <li>
                    <Link to="/add-user/">Add User</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;