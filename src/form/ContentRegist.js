import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ContentLogin extends Component{
    render(){
        return(
            <div className="panel left-panel">
              <div className="content">
                <h3>Mới đến ư ?</h3>
                <p>
                  Đăng ký một tài khoản và bắt đầu với chúng tôi nào!
                </p>
                <Link to="/register" className="btn transparent" id="sign-up-btn">Đăng ký</Link>
              </div>
              <img src="img/log.svg" class="image" alt="" />
            </div>
        );
    }
}
export default ContentLogin;