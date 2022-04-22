import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as images from '../assets/images';
import '../theme/slide.css';

class Slide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         titleSlider:'Life Tech VietNam',
         desSlider:'We provide the best software development services from VietNam.',
         bannerSlider:images.Bannerslider
      };
    }
    render() {
        return (
            <>
                <div className='slide'>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className="main-slider-content">
                            <div className="title-slider-content">
                                Welcome to <span> {this.state.titleSlider}</span>
                            </div>
                            <div className="des-slider-content">{this.state.desSlider}</div>
                            <div className="slider-btn d-flex align-items-center justify-content-start">
                                <Link to="/about" className='btn-learnmore'   alt="Learn more">
                                    Learn more
                                </Link>
                                <Link to="/contact" className='btn-contactus'   alt="Contact us">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                        <div className="banner-slider">
                            <Link to="/" title='Logo'><img src={this.state.bannerSlider} /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Slide;
