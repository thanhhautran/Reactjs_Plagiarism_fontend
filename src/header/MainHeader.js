import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainHeader extends Component{
    render(){
        return(
        <div class="main-header">
            <Link to="/" class="main-header-logo">MyLoGo</Link>
            <div class="main-header-right">
                <Link to="/" className="active">Trang chủ</Link>
                <a href="">Quét tài liệu</a>
                <a href="">Trợ giúp</a>
                <a href="">Liên hệ</a>
            </div>
        </div>
        );
    }
}
export default MainHeader;