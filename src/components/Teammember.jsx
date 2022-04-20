import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/teammember.css';
const listTeammember = [
    { id: 1, icon: images.Teammember1, name: 'Lewis Lucas', des:'IT Manager', socicalFace:'#facebook',socicalTwitter:'#twitter',socicalLinkedin:'#linkedin',},
    { id: 2, icon: images.Teammember1, name: 'Arturo Fuller', des:'Service Manager', socicalFace:'#facebook',socicalTwitter:'#twitter',socicalLinkedin:'#linkedin',},
    { id: 3, icon: images.Teammember1, name: 'Velma Cain', des:'Managing Director', socicalFace:'#facebook',socicalTwitter:'#twitter',socicalLinkedin:'#linkedin',},
    { id: 4, icon: images.Teammember1, name: 'Marc Gibbs', des:'Executive Assistant', socicalFace:'#facebook',socicalTwitter:'#twitter',socicalLinkedin:'#linkedin',},
];

class Teammember extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listTeammember:listTeammember
      };
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <>
                <div className='teammember'>
                    <div className="title-index">Expert Team Member</div>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className="row">
                            {this.state.listTeammember.map(teammember => {
                                return  <div className="col-md-3 col-sm-4 col-xs-6" key={teammember.id}>
                                            <div className="teammember-item">
                                                <div className="teammember-icon">
                                                    <Link to="/" title='photo'><img src={teammember.icon} /></Link>
                                                    <div className="team-social-icon">
                                                        <a href={teammember.socicalFace} className="social-color-1"><FontAwesomeIcon icon={faTwitter} /></a>
                                                        <a href={teammember.socicalTwitter} className="social-color-1"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                        <a href={teammember.socicalLinkedin} className="social-color-1"><FontAwesomeIcon icon={faLink} /></a>
                                                    </div>
                                                </div>
                                                <h3 className="teammember-title">
                                                    {teammember.name}
                                                </h3>
                                                <div className="teammember-des">
                                                    {teammember.des}
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

export default Teammember;
