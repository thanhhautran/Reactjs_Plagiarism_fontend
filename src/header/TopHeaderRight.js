import React, { Component } from 'react';
import Account from './Account';
import SearchBar from './SearchBar';

class TopHeaderLeft extends Component{
    render(){
        return(
        <div className="top-header-right">
            <SearchBar></SearchBar>
            <Account></Account>
        </div>
        );
    }
}
export default TopHeaderLeft;