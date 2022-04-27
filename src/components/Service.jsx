import React, { useState } from 'react';
import { Link } from "react-router-dom";

import * as images from '../assets/images';
import '../theme/service.css';

import ServiceItrem from '../components/ServiceComponents/ServiceItem';

import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Trans } from 'react-i18next';

class Service extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        listService:[],
        id:'',
        options:[],
     };
    }
    componentDidMount(){
        const options = {
            margin: 30,
            loop:true,
            responsiveClass: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                400: {
                    items: 1,
                    margin: 0,
                },
                700: {
                    items: 2,
                    margin: 10,
                },
                900: {
                    items: 3,
                },
                1200: {
                    items: 3,
        
                }
            },
        };
        this.setState({options:options,})
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "services"));
        let querySnapshot = await getDocs(q);
        const listserv=[];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id);
            let serv = doc.data();
            listserv.push(serv);
            serv['id']=(doc.id);
            this.setState({listService: listserv,id:doc.id})
        });
    }
   
    render() {
        
        return (
            <>
                <div className='service'>
                    <div className='wrap-content'>
                        <div className="title-index"><Trans i18nKey='title.service' /></div>
                        <OwlCarousel className='owl-theme' {...this.state.options}>
                            {this.state.listService.map(service => {
                                return <ServiceItrem class='' service={service} key={service.id}/>
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}

export default Service;
