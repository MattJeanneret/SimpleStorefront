class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.isLoggedIn = false;
        this.login = this.login.bind(this);
    }

    login() {
        this.isLoggedIn = true;
    }
    render() {
        //TODO add logic to check if the user is logged in or out and changed the name and function on the button
        return (
            <div id="store-header"><button id="login" onclick={this.login}>Login</button></div>
        )
    }
}