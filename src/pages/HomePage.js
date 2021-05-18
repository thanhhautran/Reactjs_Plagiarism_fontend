import React, { Component } from 'react';
import Banner from '../banner/Banner';
import Slide from '../slide/Slide';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SiteBar from '../siteBar/SiteBar';


class HomePage extends Component{
    
    render(){
        return(
            <div>
                <Header></Header>
                <Banner></Banner>
                <Slide></Slide>
                <Footer></Footer>
            </div>
        );
    }
}
export default HomePage;