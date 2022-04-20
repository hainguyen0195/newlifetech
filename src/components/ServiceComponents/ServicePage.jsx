import React, { useState } from 'react';
import { Link } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/service.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ServiceItrem from '../../components/ServiceComponents/ServiceItem';

const listService = [
    { id: 1, icon: images.Service1, name: 'Mobile App Development', des:'Android (Java - Kotlin) IOS (Object C - Swift)'},
    { id: 2, icon: images.Service1, name: 'PC App Development', des:'We provide full-stack services of Window & Unix app development. (Window, Linux, MacOSX, SBC)'},
    { id: 3, icon: images.Service1, name: 'IoT', des:'We can delpy on Arduino, Raspberry pi or any custom board using C, C++, Python, GoLang language.'},
    { id: 4, icon: images.Service1, name: 'Mobile App Development', des:'Android (Java - Kotlin) IOS (Object C - Swift)'},
    { id: 5, icon: images.Service1, name: 'PC App Development', des:'We provide full-stack services of Window & Unix app development. (Window, Linux, MacOSX, SBC)'},
    { id: 6, icon: images.Service1, name: 'IoT', des:'We can delpy on Arduino, Raspberry pi or any custom board using C, C++, Python, GoLang language.'},
];

class Service extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listService:listService
      };
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <>
                <ContentWapper title='Service' />
                <div className='service'>
                    <div className='wrap-content'>
                        <div className="title-index">Our Services</div>
                        <div className="row">
                            {this.state.listService.map(service => {
                                return <ServiceItrem class='col-md-4 col-sm-6 col-xs-12' service={service}/>
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Service;
