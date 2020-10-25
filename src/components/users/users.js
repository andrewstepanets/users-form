import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';

import './users.css';

const Users = ({ users, loading }) => {

    if(loading) {
        return <Spinner />;
    }

    return (
        <div className="row">
            <div className="col-md-8">
                    <ul className="list-group">
                        {users.map((user) => (
                            <li 
                                key={user.id} 
                                className="list-group-item d-flex justify-content-between align-items-center">
                                <Link to={`/users-list/user/${user.id}`}>
                                    <span>{user.name} {user.surname}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default Users;