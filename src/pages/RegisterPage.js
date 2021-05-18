import React, { Component } from 'react';
import ContentRegist from '../form/ContentRegist';
import ContentLogin from '../form/ContentLogin';
import Login from '../form/Login';
import Register from '../form/Register';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SiteBar from '../siteBar/SiteBar';
import './form.css';

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
console.log(sign_up_btn);
console.log(sign_in_btn);
if(sign_up_btn|| sign_in_btn){
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
      
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
}

class RegisterPage extends Component{

    render(){
        return(
        <div>
            <Header></Header>
            <SiteBar></SiteBar>
            <div className="container sign-up-mode">
                <div className="panels-container">
                    <Login></Login>
                    <Register></Register>
                    <ContentRegist></ContentRegist>
                    <ContentLogin></ContentLogin>
                </div>          
            </div>
            <Footer></Footer>
        </div>
        );
    }
}
export default RegisterPage;