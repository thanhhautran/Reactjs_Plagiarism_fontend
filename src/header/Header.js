import React, { Component } from 'react';
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'
import './headerCss.css';
class Header extends Component{
    render(){
        return(
            <div className="all-header">
                <TopHeader></TopHeader>
                <MainHeader></MainHeader>
            </div> 
        );
    }
}
export default Header;