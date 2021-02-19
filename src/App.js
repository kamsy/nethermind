import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import Cats from "./pages/Cats";
import Login from "./pages/Login";
import "./style/global.scss";
import { connect } from "react-redux";
import { persistor } from "./store";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// Private Router function
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                <Component
                    {...{
                        ...props,
                        ...rest
                    }}
                />
            )}
        />
    );
};
const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => <Component {...{ ...props, ...rest }} />}
    />
);

const NotFound = () => <div>404 PAGE</div>;

function App({ loggedIn }) {
    useEffect(() => {
        if (loggedIn) {
            history.push("/cats");
        } else {
            persistor.flush().then(() => {
                history.push("/login");
            });
        }
    }, [loggedIn]);

    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>
                        loggedIn ? (
                            <Redirect
                                push
                                to={{
                                    pathname: "/cats"
                                }}
                            />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/login"
                                }}
                            />
                        )
                    }
                />

                <AuthRoute exact path="/login" component={Login} />

                <PrivateRoute exact path="/cats" component={Cats} />

                <Route exact path="/#/404" component={NotFound} />
                <Route
                    path="*"
                    render={props => (
                        <Redirect
                            to={{
                                pathname: "/#/404"
                            }}
                            {...props}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
}

const mapStateToProps = ({ auth }) => {
    return {
        loggedIn: auth.loggedIn
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
