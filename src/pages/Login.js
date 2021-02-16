import React from "react";
import "../style/login.scss";
import { connect } from "react-redux";
import loginUser from "../actionCreators/loginUser";

const Login = ({ dispatchLogin }) => {
    const handleLogin = () => {
        dispatchLogin();
    };
    return (
        <div className="login-page">
            <form className="form">
                <h3>Login</h3>
                <input
                    value="olekakamsy@gmail.com"
                    type="email"
                    readOnly
                    placeholder="Enter your email"
                />
                <input
                    value="netherminds"
                    readOnly
                    type="password"
                    placeholder="Enter your password"
                />

                <button
                    type="button"
                    className="cstm-btn"
                    onClick={handleLogin}>
                    <span>Log in</span>
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatchLogin: () => dispatch(loginUser())
});

export default connect(null, mapDispatchToProps)(Login);
