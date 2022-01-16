import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login'
import RegisterPage from './pages/register/register.page'
import ProfilePage from './pages/profile/profile.page'
import DefaultPage from './pages/detail/detail.page'

export default class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            history: createBrowserHistory(),
        };
    }

    render () {
        const { history } = this.state;  // extract history from state
        return (
            <Router history={ history }>
                <div>
                    <div className='container'>
                        <Switch>
                            <Route exact path="/" Component={ HomePage } />
                            <Route exact path="/home" Component={ HomePage } />
                            <Route exact path="/login" Component={ LoginPage } />
                            <Route exact path="/register" Component={ RegisterPage } />
                            <Route exact path="/profile" Component={ ProfilePage } />
                            <Route exact path="/detail/:id" Component={ DefaultPage } />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }

}
