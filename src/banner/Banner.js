import React, { Component } from 'react';
import './banner.css';
class Banner extends Component{
    render(){
        return(
            <div className="first-slide">
            <div className="first-slide-col-1">
                <div className="part">
                    <ul>
                        <li>Không quảng cáo</li>
                        <li>Tìm kiếm chuyên sâu</li>
                        <li>Báo cáo chính xác</li>
                        <li>Hỗ trợ tốt</li>
                        <li>Hỗ trợ nhiều dạng tài liệu</li>
                    </ul>
                </div>
                <div className="part">
                    <ul>
                        <li>Dễ dàng sử dụng</li>
                        <li>Đảm bảo an toàn dữ liệu</li>
                        <li>Sử dụng công nghệ mới nhất</li>
                        <li>Kiểm tra nhiều từ</li>
                    </ul>
                </div>
            </div>
            <div className="first-slide-col-2">
                <h3>Bắt đầu với chúng tôi</h3>
                <a href="">Bắt đầu</a>
            </div>
            <div className="first-slide-col-3">
                <img src="/assets/image/firstslide.png"/>
            </div>
        </div>
        );
    }
}
export default Banner;