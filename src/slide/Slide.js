import React, { Component } from 'react';
class Slide extends Component{
    render(){
        return(
    <div className="second-slide">
            <h2>Chúng tôi cung cấp những gì?</h2> 
            <p>Đây là phần mềm kiểm tra độ tương đồng giữa các văn bản nhằm hỗ trợ việc xác định đạo văn</p>
            <div className="show">
            <div className="second-slide-text">
                 <h2>Trong Môi trường đại học</h2>
                 <p>Chúng tôi cung cấp một nền tảng đáng tin cậy dựa trên cơ sở dữ liệu sẵn có và các nguồn trên internet giúp cho việc so sánh độ tương đồng của quý khách thêm đa dạng đồng thời cho ra kết quả chính xác nhất nhằm cho ra những văn bản không sao chép làm cho nền giáo dục thêm minh bạch</p>
            </div>
            <div className="second-slide-image">
                 <img src="/assets/image/secondslide.png" alt=""/>
            </div>
             </div>
             <div className="show">
                 <div className="second-slide-image">
                     <img src="/assets/image/secondslide.png" alt=""/>
                </div>
                 <div className="second-slide-text">
                      <h2>Trong Môi trường đại học</h2>
                      <p>Chúng tôi cung cấp một nền tảng đáng tin cậy dựa trên cơ sở dữ liệu sẵn có và các nguồn trên internet giúp cho việc so sánh độ tương đồng của quý khách thêm đa dạng đồng thời cho ra kết quả chính xác nhất nhằm cho ra những văn bản không sao chép làm cho nền giáo dục thêm minh bạch</p>
                 </div>
             </div>
     </div>
        );
    }
}
export default Slide;