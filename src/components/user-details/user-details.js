import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './user-details.css';


const UserDetails = ({ userId }) => {

    const [user, setUser] = useState(userId);

    useEffect(() => {
        const fetchUser = async () => {
            axios.get('http://77.120.241.80:8911/api/users')
                .then(res => {
                    setUser(res.data.filter(item => item.id === parseInt(userId)));
                })
                .catch(err => console.log(err));

        }
        fetchUser();
    }, [userId]);


    const handleDeleteUser = event => {
        event.preventDefault();
        const deleteUser = async () => {
            axios.delete('http://77.120.241.80:8911/api/users', { 
                id: user[0].id,
                name: user[0].name,
                surname: user[0].surname,
                desc: user[0].desc
            })
                .catch(err => console.log(err));
        };
        deleteUser();
    }

    return(
        <div className="container">
            <h2>User Details</h2>
            <p>There is detail information of selected user</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-success">
                        <th scope="row">{user[0].id}</th>
                        <td>{user[0].name}</td>
                        <td>{user[0].surname}</td>
                        <td>{user[0].desc}</td>
                    </tr>
                </tbody>
            </table>
            <p>If you want to delete user, press a button below</p>
            <button onClick={handleDeleteUser} className="btn btn-outline-danger">Delete User</button>
        </div>
    );
}


export default UserDetails;