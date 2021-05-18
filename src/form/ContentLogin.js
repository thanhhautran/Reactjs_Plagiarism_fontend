import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ContentLogin extends Component{
    render(){
        return(
            <div className="panel right-panel">
              <div className="content">
                <h3>Đã có tài khoản rồi ?</h3>
                <p>
                  Nếu đã có tài khoản rồi xin hãy đăng nhập
                </p>
                <Link to="/login" className="btn transparent" id="sign-in-btn">Đăng nhập</Link>
              </div>
              <img src="img/register.svg" class="image" alt="" />
            </div>
        );
    }
}
export default ContentLogin;