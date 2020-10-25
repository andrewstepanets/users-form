import React from 'react';

const MainPage = () => {
    return (
        <div className="container">
                <h2>Welcome to The Users Form App</h2>
                    <hr className="my-4"></hr>
                <p>
                    This app solved several tasks 
                </p>
                <ul>
                    <li>Return list of users</li>
                    <li>Add a new user information</li>
                    <li>Remove the user from the server</li>
                </ul>
        </div>
    )
}

export default MainPage;