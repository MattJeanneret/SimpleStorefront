import React, { Component } from 'react';

//TODO add unit tests
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        // Ideally these styles would be in their own module but this app doesn't have a module loader. We should add a module loader such as webpack
        this.loginStyle = {
            'backgroundColor': '#7693D7',
            'borderRadius': '5px',
            'boxShadow': 'rgba(103, 206, 206, 1)',
            color: 'white',
            'font': 'bold 14px Open Sans, sans-serif'
        };
        this.headerStyle = {
            display: 'flex',
            'justifyContent': 'flex-end',
            'flexBasis': '100%',
            padding: '1px',
        };
    }

    /**
     * @name login
     * @description logs in the user
     * @returns {void}
     */
    login() {
        this.setState({isLoggedIn: true});
    }

    /**
     * @name logout
     * @description logs out the user
     * @returns void
     */
    logout() {
        this.setState({isLoggedIn: false});
    }
    render() {
        //TODO add logic to check if the user is logged in or out and changed the name and function on the button
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <button style={this.loginStyle} onClick={this.logout}>Logout</button>
        } else {
            button = <button style={this.loginStyle} onClick={this.login}>Login</button>
        }
        return (
            <header style={this.headerStyle}>{button}</header>
        )
    }
}