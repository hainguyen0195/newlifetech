import React from 'react';
import { Link } from "react-router-dom";
import * as images from '../assets/images';
import '../theme/slide.css';
import { Trans } from 'react-i18next';

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
                                <Trans i18nKey='content_slider.welcome_to' /> <span><Trans i18nKey='content_slider.titleSlider' /></span>
                            </div>
                            <div className="des-slider-content"><Trans i18nKey='content_slider.desSlider' /></div>
                            <div className="slider-btn d-flex align-items-center justify-content-start">
                                <Link to="/about" className='btn-learnmore'   alt="Learn more">
                                    <Trans i18nKey='content_slider.learnmore' />
                                </Link>
                                <a href="#contact" className='btn-contactus'   alt="Contact us">
                                    <Trans i18nKey='content_slider.contactus' />
                                </a>
                            </div>
                        </div>
                        <div className="banner-slider">
                            <img src={this.state.bannerSlider} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Slide;
