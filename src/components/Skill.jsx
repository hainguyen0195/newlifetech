import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as images from '../assets/images';
import '../theme/skill.css';

const listSkill = [
    { id: 1, name: '.NET (C# - VB)', level:'80%'},
    { id: 2, name: 'Html & Css', level:'90%'},
    { id: 3, name: 'Mobile (Android, IOS)', level:'100%'},
    { id: 4, name: 'Python', level:'95%'},
    { id: 5, name: 'JAVA', level:'85%'},
    { id: 6, name: 'Python', level:'90%'},
    { id: 7, name: 'Javascript (JQuery, AngularJS, ReactJS)', level:'95%'},
    { id: 8, name: 'PHP', level:'100%'},
    { id: 9, name: 'Database (SQLServer, Oracle, MYSQL, MongoDB, Redis)', level:'95%'},
];

class Skill extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listSkill:listSkill,
         bannerSlider:images.Bannerskill
      };
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <>
                <div className='skill'>
                    <div className='wrap-content'>
                        <div className='row'>
                            <div className="col-md-7 col-sm-6 col-xs-12">
                                <div className="title-skill">Our Skills</div>
                                <div className="des-skill">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                <div className="row">
                                    {this.state.listSkill.map(skill => {
                                        return  <div className="col-md-6 col-sm-6 col-xs-12" key={skill.id}>
                                                    <div className="skill-item" >
                                                        <h3 className="skill-title">
                                                            {skill.name}
                                                            <span style={{width: skill.level }} ></span>
                                                        </h3>
                                                    </div>
                                                </div>
                                    })}
                                </div>
                            </div>
                            <div className="banner-skill col-md-5 col-sm-6 col-xs-12">
                                <Link to="/" title='Logo'><img src={this.state.bannerSlider} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Skill;
