import React, { Component } from 'react';
import Header from './header'
import Body from './body'
import Footer from './footer'




class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <body>
                    <div class="weather-channel__container">
                        <Header />
                        <Body />
                        <Footer />
                    </div>
                </body>
            </React.Fragment>
        );
    }
}
 
export default Index;