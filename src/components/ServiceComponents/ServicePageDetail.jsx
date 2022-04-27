import React, { useState } from 'react';
import { Link,withRouter } from "react-router-dom";
import '../../theme/service.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ServiceItrem from '../../components/ServiceComponents/ServiceItem';

import {db,storage} from "../../config";
import { collection, query, getDocs,getDoc,doc } from "firebase/firestore";
import i18n from '../../i18n';
import { Trans,withTranslation } from 'react-i18next';
import { Translation } from 'react-i18next';

class ServicePageDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         detailService:[],
         listService:[],
         id:'',
         idname:'',
        };
    }
    componentWillMount(){ // truoc khi component render

    }
    componentDidMount(){ // khi component render
        const iditem=this.props.match.params.id;
        this.getDataDetal('services', iditem);
        this.getData();
    }
    componentWillReceiveProps(){ //props được update và trước khi component được render lại
        
    }
    componentWillUpdate(){ //được gọi khi chúng ta update state của component trước khi nó render lại
        const iditem=this.props.match.params.id;
        this.getDataDetal('services', iditem);
    }
    componentDidUpdate(){//sau khi componentWillUpdate xong thi den componentDidUpdate

    }
    getDataDetal = async (coll, id,match) => {
        const snap = await getDoc(doc(db, coll, id));
        if (snap.exists()) {
            this.setState({
                detailService: snap.data(),
                idname:snap.data().namelang.vi,
            })
        }
        else {
            console.log("No such document")
        }
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
                        {
                            this.state.detailService.photodetail ?
                            <>
                                <div className="imagesServiceDetail">
                                    <img src={this.state.detailService.photodetail} alt="photo"/>
                                </div>
                            </>
                            : ''
                        }
                        <div className="nameServiceDetail">
                           {(this.state.detailService.namelang!=undefined)? this.state.detailService.namelang[this.props.i18n.language] :''}
                        </div>
                        <div className="contentServiceDetail">
                            {(this.state.detailService.contentlang!=undefined)? this.state.detailService.contentlang[this.props.i18n.language] :''}
                        </div>
                        <div className="title-index"><Trans i18nKey='title.otherservice' /></div>
                        <div className="row">
                            {this.state.listService.map(service => {
                                return service.namelang.vi!=this.state.idname ? <ServiceItrem class='col-md-4 col-sm-6 col-xs-12' key={service.id} service={service}/> :''
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(withTranslation()(ServicePageDetail));
