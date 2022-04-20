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

const detailService = {
    image:images.ServiceDetail,
    name: 'Mobile App Development',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}


class Service extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        detailService:detailService,
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
                        <div className="imagesServiceDetail">
                            <img src={detailService.image} alt="photo"/>
                        </div>
                        <div className="nameServiceDetail">
                            {detailService.name}
                        </div>
                        <div className="contentServiceDetail">
                            {detailService.des}
                        </div>
                        <div className="title-index">Orther Services</div>
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
