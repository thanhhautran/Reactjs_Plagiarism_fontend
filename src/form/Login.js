import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/authentication";
const required = (value) => {
  if (!value) {
    return (
      <div className="error-login" role="alert">Không được bỏ trống</div>
    );
  }
};
class Login extends Component{
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  } 
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

    render(){
      const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/" />;
      }
        return(
            <div className="forms-container">
            
            <div className="signin-signup">
            <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
            className="sign-in-form"
          >
                <h2 className="title">Đăng nhập</h2>
                <div className="input-field">
                  <i className="fa fa-user"></i>
                  <Input type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
                placeholder="Tên tài khoản"/>
                </div>
                <div className="input-field">
                  <i className="fa fa-lock"></i>
                  <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
                placeholder="Mật khẩu"
              />
                </div>
                <Input type="submit" value="Đăng nhập" className="btn solid" />
                <p className="social-text">Hoặc đăng nhập với một nền tảng khác :</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fa fa-google"></i>
                  </a>
                </div>
                <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
              </Form>
            </div>
          </div>
        );
    }
}
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}
export default connect(mapStateToProps)(Login);