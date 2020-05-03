import React, { Component } from 'react';
import logo from '../icon/logo.png'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <header>
                <img class="header__logo" src={logo} />
                <h1 class="header__title">Weather Channel</h1>
            </header>
            <nav>
                <div style={{flex:1}}>
                    <input class="search-input" />
                    <button class="search-btn"><i class="fa fa-search"></i></button>
                    <button class="temp-switch">
                        <i
                        class="fa fa-thermometer-empty"
                        aria-hidden="true"
                        style={{paddingRight:5}}
                        ></i>
                        <sup>&deg;</sup>C
                    </button>
                </div>
            </nav>
      </React.Fragment>
         );
    }
}
 
export default Header;