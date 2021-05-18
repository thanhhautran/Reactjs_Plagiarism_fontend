import React, { Component } from 'react';

class TopHeaderLeft extends Component{
    render(){
        return(
            <div className="top-header-left">
                        Thay đổi ngôn ngữ
                        <select name="" id="">
                            <option value="">Tiếng việt</option>
                            <option value="">Tiếng Anh</option>
                        </select>      
            </div>
        );
    }
}
export default TopHeaderLeft;