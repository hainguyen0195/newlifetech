import React, { useState } from 'react';
import { Link } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/service.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ServiceItrem from '../../components/ServiceComponents/ServiceItem';

import {db,storage} from "../../config";

import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Trans,withTranslation } from 'react-i18next';

class Service extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listService:[],
         id:'',
      };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "services"));
        let querySnapshot = await getDocs(q);
        const listserv=[];
        querySnapshot.forEach((doc) => {
            let serv = doc.data();
            listserv.push(serv);
            serv['id']=(doc.id);
            this.setState({listService: listserv,id:doc.id})
        });
    }
    render() {
        return (
            <>
                <ContentWapper  title={this.props.i18n.t('service')} />
                <div className='service'>
                    <div className='wrap-content'>
                        <div className="row">
                            {this.state.listService.map(service => {
                                return <ServiceItrem class='col-md-4 col-sm-6 col-xs-12' service={service} key={service.id} />
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(Service);
