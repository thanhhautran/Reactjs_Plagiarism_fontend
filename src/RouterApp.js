import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import FormRegister from './components/form/FormRegister';
import FormLogin from './components/form/FormLogin';
class RouterApp extends Component{
        render(){
            return(
                <div>
                <Router>
                    <Switch>
                        <Route exact path="/login" component ={FormLogin}></Route>
                        <Route exact path= "/register" component={FormRegister}></Route>
                    </Switch>
                </Router>
                </div>
            );
        }
}

export default RouterApp;