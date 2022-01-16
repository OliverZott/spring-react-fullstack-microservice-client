import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';


export default class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            history: createBrowserHistory(),
        };
    }

    render () {
        const { history } = this.state;
        return (
            <Router history={ history }>
                <div>
                    <div className='container'>
                        <Switch></Switch>
                    </div>
                </div>
            </Router>
        )
    }

}
