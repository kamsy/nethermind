import React from "react";
import "../style/login.scss";
import { connect } from "react-redux";
import loginUser from "../actionCreators/loginUser";
import { history } from "../App";

const Login = ({ loginUser }) => {
    const callLogin = () => {
        loginUser();
    };
    return (
        <div className="login-page">
            <form className="form" onSubmit={callLogin}>
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
                    data-testid="login-btn"
                    className="cstm-btn"
                    onClick={callLogin}>
                    <span>Login</span>
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    loginUser
};

export default connect(null, mapDispatchToProps)(Login);
