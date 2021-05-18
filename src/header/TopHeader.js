import React, { Component } from 'react';
import TopHeaderLeft from './TopHeaderLeft';
import TopHeaderRight from './TopHeaderRight';

class TopHeader extends Component{
    render(){
        return(          
               <div className="top-header">
                   <TopHeaderLeft></TopHeaderLeft>
                   <TopHeaderRight></TopHeaderRight>
                 </div>
        );
    }
}
export default TopHeader;