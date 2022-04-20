import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faSearch,faMapSigns,faHistory} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/aboutus.css';

const listAboutus = [
    { id: 1, icon:  <FontAwesomeIcon icon={faUser} />, name: 'Who We Are?', des:'We are young people with strong aspirations, desire to bring the best to society.'},
    { id: 2, icon: <FontAwesomeIcon icon={faSearch} />, name: 'What We Do?', des:'We are a leading software development and IT services provider.'},
    { id: 3, icon: <FontAwesomeIcon icon={faMapSigns} />, name: 'Why We Do It?', des:'We believe technology will bring better life to everyone.'},
    { id: 4, icon: <FontAwesomeIcon icon={faHistory} />, name: 'Since When?', des:'From early 2015.'},
];
class Aboutus extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listAboutus:listAboutus
      };
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <>
                <div className='aboutus'>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className="row">
                            {this.state.listAboutus.map(aboutus => {
                                return  <div className="col-md-3 col-sm-4 col-xs-6" key={aboutus.id}>
                                            <div className="aboutus-item">
                                                <div className="aboutus-icon d-flex align-items-center justify-content-center">
                                                    {aboutus.icon}
                                                </div>
                                                <h3 className="aboutus-title">
                                                    {aboutus.name}
                                                </h3>
                                                <div className="aboutus-des">
                                                    {aboutus.des}
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Aboutus;
