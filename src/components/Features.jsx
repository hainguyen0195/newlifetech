import React  from "react";
import * as image from "../assets/images"
import '../theme/features.css'

const listFeature = [
    { 
        id: 1,
        name: 'Monitor',
        info: {
            images1 : image.Featureimg1,
            images2 : image.Featureimg2,
            title1:'Realtime monitor',
            title2:'All support on mobile and pc.',
            des:'You can monitor temperature, power usage in realtime. The system will store all data to report and diagnose the problem.',
        }
    },
    { 
        id: 2, 
        name: 'Control', 
        info: {
            images1 : '',
            images2 : image.Featureimg3,
            title1:'Control from anywhere anytime',
            title2:'All support on mobile and pc.',
            des:'Control every single power socket by manual or automation. (Automation can be set by script)',
        }
    },
    { 
        id: 3,
        name: 'Automation', 
        info: {
            images1 : image.Featureimg4,
            images2 : '',
            title1:'Automation',
            title2:'All support on mobile and pc.',
            des:'The system can be set to control via script.  For example:  Turn on / off the device at a specified time Send alert / turn on / off device with sensor value (Temperature sensor, humidity, light, CO2, ...)',
        }
    },
];

class Features extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            listFeature:listFeature,
            info1:listFeature[0].info,
        }
        //console.log(this.state.listFeature[0].info);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(value) {
        this.setState({info1: value});
    }
    render(){
        return (
            <>
                <div className="fearture">
                    <div className="wrap-content">
                        <div className="title-index">
                            Fearture
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="fearture-left">
                                {this.state.listFeature.map(feature => {
                                    return <div className="feature-name" key={feature.id} onClick={()=>this.handleClick(feature.info)}  >
                                                {feature.name}
                                           </div>
                                })}
                            </div>
                            <div className="fearture-right d-flex align-items-center justify-content-between">
                                { this.state.info1.images1
                                    ? <div className="feature-images1">
                                        <img src={this.state.info1.images1} alt="icon" />
                                    </div>
                                    : ''
                                }
                                <div className="feature-right-content">
                                    <div className="feature-title1">{this.state.info1.title1}</div>
                                    <div className="feature-title2">{this.state.info1.title2}</div>
                                    <div className="feature-des">{this.state.info1.des}</div>
                                </div>
                                { this.state.info1.images2
                                    ? <div className="feature-images2">
                                        <img src={this.state.info1.images2} alt="icon" />
                                    </div>
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}   

export default Features;   