import React, { Component } from 'react';
import compass from '../icon/icon-compass.png';
import umberella from '../icon/icon-umberella.png';
import wind from '../icon/icon-wind.png';


class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <main>
                    <section class="weather-condition">
                    <div class="weather-condition__location">Brisbane</div>
                    <div style={{textAlign: 'center', fontSize: 14}}>Clear</div>
                    <div class="weather-condition__temp">19 c</div>
                    <div class="weather-condition__desc">
                        <div>
                        <img src={umberella} />
                        <span class="citem">20%</span>
                        </div>
                        <div>
                        <img src={wind} /> <span class="citem">3 km/h</span>
                        </div>
                        <div>
                        <img src={compass} /> <span class="citem">NE</span>
                        </div>
                    </div>
                    </section>

                    <section class="weather-forecast">
                    <div class="forecast__switch">
                        <button class="forecast__switch_0 switch-active">5 items</button>
                        <button class="forecast__switch_1">10 items</button>
                    </div>

                    <div class="weather-forecast__row">
                        <span class="weather-forecast__day">Fri</span>
                        <span class="weather-forecast__icon">
                        <i class="fa fa-clock-o"></i> 10:00
                        </span>
                        <span class="weather-forecast__high">19 c</span>
                        <span class="weather-forecast__low">8 c</span>
                    </div>
                    <div class="weather-forecast__row">
                        <span class="weather-forecast__day">Fri</span>
                        <span class="weather-forecast__icon">
                        <i class="fa fa-clock-o"></i> 13:00
                        </span>
                        <span class="weather-forecast__high">19 c</span>
                        <span class="weather-forecast__low">8 c</span>
                    </div>

                    <div class="weather-forecast__row">
                        <span class="weather-forecast__day">Fri</span>
                        <span class="weather-forecast__icon">
                        <i class="fa fa-clock-o"></i> 16:00
                        </span>
                        <span class="weather-forecast__high">19 c</span>
                        <span class="weather-forecast__low">8 c</span>
                    </div>
                    </section>
                </main>
            </React.Fragment>
            
         );
    }
}
 
export default Body;