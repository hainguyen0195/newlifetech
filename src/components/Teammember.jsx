import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/teammember.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";

class Teammember extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listTeammember:[]
      };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "teammember"));
        let querySnapshot = await getDocs(q);
        const listmemb=[];

        querySnapshot.forEach((doc) => {
            let serv = doc.data();
            listmemb.push(serv);
            serv['id']=(doc.id);
            this.setState({listTeammember: listmemb,id:doc.id})
        });
    }
    render() {
        return (
            <>
                <div className='teammember'>
                    <div className="title-index">Expert Team Member</div>
                    <div className='wrap-content'>
                        <OwlCarousel className='owl-theme teammember-owl' loop margin={15} items={4} autoplay nav={true} dots={false}>
                            {this.state.listTeammember.map(teammember => {
                                return  <div className="teammember-col" key={teammember.id}>
                                            <div className="teammember-item">
                                                <div className="teammember-icon">
                                                    <Link to="/" title='photo'><img src={teammember.photo} /></Link>
                                                    <div className="team-social-icon">
                                                        <a href={teammember.socicalFace} className="social-color-1"><FontAwesomeIcon icon={faTwitter} /></a>
                                                        <a href={teammember.socicalTelegram} className="social-color-1"><FontAwesomeIcon icon={faFacebookF} /></a>
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
                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}

export default Teammember;
