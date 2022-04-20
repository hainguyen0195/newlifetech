import React, { useState } from 'react';
import { Link } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/service.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ServiceItrem from '../../components/ServiceComponents/ServiceItem';

import {db,storage} from "../../config";

import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class Service extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listService:[]
      };
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
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
                <ContentWapper title='Service' />
                <div className='service'>
                    <div className='wrap-content'>
                        <div className="title-index">Our Services</div>
                        <div className="row">
                            {this.state.listService.map(service => {
                                return <ServiceItrem class='col-md-4 col-sm-6 col-xs-12' service={service}/>
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Service;
