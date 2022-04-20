import React from 'react';
import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import Aboutus from '../../components/Aboutus';
import * as images from '../../assets/images';
import '../../theme/about.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            titleAbout:'Our mission is to make your business better through technology',
            desAbout:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        };
    }
    render() {
        return (
            <>
                <ContentWapper title='About' />
                <div className="padding">
                    <div className="wrap-content  d-flex align-items-start justify-content-between">
                        <div className="about-left">
                            <div className="about-title">
                                {this.state.titleAbout}
                            </div>
                            <div className="about-des">
                                {this.state.desAbout}
                            </div>
                            <div className="about-des">
                                {this.state.desAbout}
                            </div>
                            <div className="about-des">
                                {this.state.desAbout}
                            </div>
                        </div>
                        <div className="about-right">
                            <div className="about-image">
                                <img src={images.Aboutimage} atl='icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <Aboutus />
            </>
        )
    }
}

export default About;