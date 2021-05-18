import React, { Component } from 'react';
import './footer.css';
class Footer extends Component{
    render(){
        return(
            <div className="main-footer">
                <div className="up-footer">
                    <div className="infor">
                        <ul>
                            <li className="head"> <b>Thông tin</b></li>
                            <li> <i className="fa fa-map-marker" aria-hidden="true"></i><b> Địa chỉ:</b> khu phố 6, phường linh trung, quận thủ đức, tp.hcm</li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i> <b> Email:</b> jackgreenbee@gmail.com</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> <b> Số điện thoại:</b> 0868201768</li>
                            <li><i className="fa fa-facebook-official" aria-hidden="true"></i> <b> Facebook:</b> plagiarismCatcther</li>
                        </ul>
                    </div>
                    <div className="maker">
                        <ul>
                            <li className="head"> <b>Thực hiện bởi</b></li>
                            <li>Sinh viên 1</li>
                            <li>Sinh viên 2</li>
                        </ul>
                    </div>
                </div>
                <div className="down-footer">
                    <p>Một sản phẩm từ đại học Nông Lâm TP.HCM</p>  
                </div>
            </div>
        );
    }
}
export default Footer;