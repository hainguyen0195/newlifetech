import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons';
import '../theme/teammember.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {db} from "../config";
import { collection, query, getDocs } from "firebase/firestore";
import { Trans } from 'react-i18next';

class Teammember extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listTeammember:[],
         id:'',
         options:[],
      };
    }
    componentDidMount(){
        const options = {
            margin: 30,
            loop:true,
            responsiveClass: true,
            nav: true,
            dots: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                400: {
                    items: 2,
                    margin: 10,
                },
                700: {
                    items: 3,
                    margin: 10,
                },
                900: {
                    items: 4,
                    margin: 20,
                },
                1200: {
                    items: 4,
        
                }
            },
        };
        this.setState({options: options});
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
                    <div className="title-index"><Trans i18nKey='title.temmember' /></div>
                    <div className='wrap-content'>
                        <OwlCarousel className='owl-theme teammember-owl' {...this.state.options}>
                            {this.state.listTeammember.map(teammember => {
                                return  <div className="teammember-col" key={teammember.id}>
                                            <div className="teammember-item">
                                                <div className="teammember-icon">
                                                    <Link to="/" title='photo'><img src={teammember.photo} /></Link>
                                                    <div className="team-social-icon">
                                                        {
                                                            teammember.socicalFace ?
                                                            <a href={teammember.socicalFace} className="social-color-1"><FontAwesomeIcon icon={faFacebookF} /></a>    
                                                            : ''
                                                        }
                                                        {
                                                            teammember.socicalTelegram ?
                                                            <a href={teammember.socicalTelegram} className="social-color-1"><FontAwesomeIcon icon={faTelegramPlane} /></a>    
                                                            : ''
                                                        }
                                                        {
                                                            teammember.socicalLinkedin ?
                                                            <a href={teammember.socicalLinkedin} className="social-color-1"><FontAwesomeIcon icon={faLink} /></a>    
                                                            : ''
                                                        }
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
