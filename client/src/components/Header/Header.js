import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this)
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
            button = <button className="login" onClick={this.logout}>Logout</button>
        } else {
            button = <button className="login" onClick={this.login}>Login</button>
        }
        return (
            <div id="store-header">{button}</div>
        )
    }
}