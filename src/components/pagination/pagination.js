import React from 'react';

import './pagination.css';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="row mt-4">
            <div className="col-md-8">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <span className="page-link">&laquo;</span>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item" onClick={() => paginate(number)}>
                            <span 
                                className="page-link">
                                {number}
                            </span>
                        </li>
                    ))}
                    <li className="page-item disabled">
                        <span className="page-link">&raquo;</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination;