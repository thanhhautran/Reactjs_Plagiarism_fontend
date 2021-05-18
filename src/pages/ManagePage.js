import React, { Component } from 'react';
import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';
import SiteBar from '../siteBar/SiteBar';


class HomePage extends Component{
    
    render(){
        return(
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        );
    }
}
export default HomePage;