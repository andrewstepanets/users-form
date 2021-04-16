import React, { useState, useEffect } from 'react';
import Users from '../users';
import Pagination from '../pagination';
import axios from 'axios';


const UsersList = () => {
    const resultsPerPage = 30;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);


    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            axios.get(`https://randomuser.me/api/?results=${resultsPerPage}`)
                // axios.get(`https://api.sampleapis.com/futurama/characters`)
                .then(res => {
                    console.log(res.data);
                    setUsers(res.data);
                    setLoading(false);
                })
                .catch(err => console.log(err));

        }
        fetchUsers();
    }, []);


    // Get curent users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


    // Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <h2>Users list</h2>
            <Users users={currentUsers} loading={loading} />
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
        </div>
    )
}

export default UsersList;