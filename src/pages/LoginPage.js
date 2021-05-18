import React, { Component } from 'react';
import ContentRegist from '../form/ContentRegist';
import ContentLogin from '../form/ContentLogin';
import Login from '../form/Login';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SiteBar from '../siteBar/SiteBar';


class FormLogin extends Component{
    
    render(){
        return(
      <div>
        <Header></Header>
          <SiteBar></SiteBar>
          <div className="container">
              <div className="panels-container">            
                <Login></Login>
                <ContentRegist></ContentRegist>
                <ContentLogin></ContentLogin>
              </div>          
          </div>
        <Footer></Footer>
      </div>
        );
    }
}
export default FormLogin;