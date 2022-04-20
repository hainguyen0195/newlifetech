import React, { useState } from 'react';
import { Link ,NavLink } from "react-router-dom";
import { Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/header.css';

const listServices = [
    { id: 1, link: 'service-mobile-app', name: 'Mobile App Development', },
    { id: 2, link: 'service-pc-app', name: 'Pc App Development', },
    { id: 3, link: 'service-iot-app', name: 'IoT', },
];

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         logoHeader:images.Logo,
         listServices:listServices,
         scrolling:'',
      };
      // This binding is necessary to make `this` work in the callback
      this.handleScroll = this.handleScroll.bind(this);
    } 
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        if (window.scrollY === 0 && this.state.scrolling === 'is-sticky') {
            this.setState({scrolling: ''});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== 'is-sticky') {
            this.setState({scrolling: 'is-sticky'});
        }
    }
    
    render() {
        return (
            <>
                <div className='header' id={this.state.scrolling}>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className="logo">
                            <Link className="logo-header" to="/" title='Logo'><img src={this.state.logoHeader} /></Link>
                        </div>
                        <ul className="menu d-flex align-items-center justify-content-end">
                            <li>  
                                <Link to="/" className=''   alt="Home">
                                    Home    
                                </Link>
                            </li>
                            <li>  
                                <NavLink to="/about" activeClassName='active'   alt="About">
                                    About
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/service" activeClassName='active'   alt="Services">
                                    Services  <FontAwesomeIcon icon={faChevronDown} />
                                </NavLink>
                                <ul className="ulcat">
                                    {this.state.listServices.map(service => {
                                        return  <li key={service.id}>
                                                    <Link to={service.link} atl="Services1">
                                                        {service.name}
                                                    </Link>
                                                </li>
                                    })}
                                </ul>
                            </li>
                            <li>  
                                <NavLink to="/project" activeClassName='active' alt="Project">
                                    Project
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/news" activeClassName='active' alt="News">
                                    News
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/recruitment" activeClassName='active' alt="Recruitment">
                                    Recruitment
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/contact" activeClassName='active' alt="Contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;
