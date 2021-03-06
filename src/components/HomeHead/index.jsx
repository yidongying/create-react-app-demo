import React from 'react'
import { Link } from 'react-router'
import SearchInput from '../SearchInput'
import './style.less'

class HomeHead extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to='/city'>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>    
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                            <i className="icon-search"></i>
                            <SearchInput value='' />                        
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHead