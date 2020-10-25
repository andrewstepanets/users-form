import React from  'react';
import Header from '../header';
import MainPage from '../pages';
import UsersList from '../users-list';
import AddUser from '../add-user';
import UserDetails from '../user-details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () =>  {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/"
                        render={() => <MainPage />}
                        exact />
                    <Route path="/users-list" exact component={UsersList} />
                    <Route path="/users-list/user/:id"
                        render={({ match }) => {
                            const { id } = match.params;
                            return <UserDetails userId={id} />;
                        }} />
                    <Route path="/add-user" component={AddUser} />
                    <Route render={() => <h2 className="text-danger">Something went wrong! Page not found!</h2>} />
                </Switch>
            </Router>
        </>
    )
} 

export default App;