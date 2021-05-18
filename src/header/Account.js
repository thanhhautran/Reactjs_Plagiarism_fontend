import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { clearMessage } from "../actions/message";
import { logout } from"../actions/authentication";
import { history } from '../helper/history';
class Account extends Component{
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
          currentUser: undefined,
        };
    
        history.listen((location) => {
          props.dispatch(clearMessage()); // clear message when changing location
        });
      }
      componentDidMount() {
        const user = this.props.user;
    
        if (user) {
          this.setState({
            currentUser: user,
          });
        }
      }
      logOut() {
        this.props.dispatch(logout());
      }
    render(){
        const { currentUser} = this.state;
        return(
            <div>
                 {currentUser ? (
                   <div className="account">
                   <Link to="/register">Chào,{currentUser.username}</Link> | <Link to="/login" onClick={this.logOut}>Đăng Xuất</Link>
                   </div>
                 ): (
                  <div className="account">
                  <Link to="/register">Tạo tài khoản</Link> | <Link to="/login">Đăng nhập</Link>
                  </div>
                 )}
            </div>
        );
    }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(Account);