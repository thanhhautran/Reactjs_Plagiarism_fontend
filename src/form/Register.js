import React, { Component } from 'react';
import { isEmail } from "validator";
import { connect } from "react-redux";
import Form from "react-validation/build/form";
import { register } from "../actions/authentication";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
    if (!value) {
      return (
        <div className="error-register" role="alert">Không được bỏ trống</div>
      );
    }
  };
  
  const email = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="error-register" role="alert">Đây không phải là một email</div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="error-register" role="alert">tên tài khoản phải từ 3 đến tối đa là 20 ký tự</div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="error-register" role="alert">mật khẩu phải có độ dài từ 6 đến 40 ký tự</div>
      );
    }
  };
class Register extends Component{
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
          username: "",
          email: "",
          password: "",
          successful: false,
        };
    }
    onChangeUsername(e) {
      this.setState({
        username: e.target.value,
      });
    }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value,
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value,
      });
    }
    handleRegister(e) {
        e.preventDefault();
    
        this.setState({
          successful: false,
        });
    
        this.form.validateAll();
        
        if (this.checkBtn.context._errors.length === 0) {
          this.props.dispatch(
              register(this.state.username, this.state.password, this.state.email)
            )
            .then(() => {
              this.setState({
                successful: true,
              });
            })
            .catch(() => {
              this.setState({
                successful: false,
              });
            });
        }

      }
    render(){
      const { message } = this.props;
        return(
          
            <div className="forms-container">
                <div className="signin-signup">
                    <Form className="sign-up-form" onSubmit={this.handleRegister} ref={(c) => {this.form = c;}}>

                        <h2 className="title">Đăng ký</h2>
                        <div className="input-field">
                        <i className="fa fa-user"></i>
                        <Input type="text" placeholder="Tên đăng nhập" name="username" value={this.state.username}
                        onChange={this.onChangeUsername} validations={[vusername,required]} />
                        </div>
                        <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <Input type="email" placeholder="Email" name="email" value={this.state.email} 
                        onChange={this.onChangeEmail} validations={[required,email]}/>
                        </div>
                        <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <Input type="password" placeholder="Mật khẩu" name="password" value={this.state.password}
                        onChange={this.onChangePassword} validations={[required,vpassword]} />
                        </div>
                        <Input type="submit" className="btn" value="Đăng ký" />
                        <p className="social-text">Hoặc đăng ký với nền tảng khác :</p>
                        <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fa fa-facebook-f"></i>
                        </a>

                        <a href="#" className="social-icon">
                            <i className="fa fa-google"></i>
                        </a>
                        </div>
                  
                        <CheckButton style={{ display: "none" }} ref={(c) => { this.checkBtn = c;}}/>
                    </Form>
                </div>
          </div>
        );
    }
}
function mapStateToProps(state) {
  const { message } = state.message;
  console.log(message)
  return {
    message,
  };
}
export default connect(mapStateToProps) (Register);