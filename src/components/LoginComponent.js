import React from 'react';
import {connect} from "react-redux";
import {navigateActions} from "../actions/NavigationActions";
import {userActions} from "../actions/UserActions";

class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.loginHandler = this.loginHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    loginHandler(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const {username, password} = this.state;
        dispatch(userActions.login(username, password));
    }

    inputChangeHandler(e){
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {username, password} = this.state;
        const {authenticated, error} = this.props.login;
        if(authenticated){
            const {dispatch} = this.props;
            dispatch(navigateActions.userProfilePage());
            return(<div></div>)
        }else{
            return(
                <div>
                    <h1>LOGIN</h1>
                    <form onSubmit={this.loginHandler}>
                        <input type="text" name="username" value={username} placeholder="username" onChange={this.inputChangeHandler}/>
                        <input type="password" name="password" value={password} placeholder="password" onChange={this.inputChangeHandler}/>
                        <button name="loginBtn">Login</button>
                    </form>
                    {error ? <h4>{error}</h4> : ''}
                </div>
            )
        }
    }


}

const mapStateToProps = (store) => {
    return{
        login: store.login
    }
};

export default connect(mapStateToProps)(LoginComponent);