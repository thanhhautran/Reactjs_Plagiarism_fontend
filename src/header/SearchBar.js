import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        return(
            <div className="searchbar">
                <input type="text" name="" className="searchbar-txt" placeholder="searching..."/>
                <a className="searchbar-btn">
                <i className="fa fa-search"></i>
                </a>
            </div>
        );
    }
}
export default SearchBar;