import React, { useState } from 'react';
import { Link,withRouter } from "react-router-dom";
import '../../theme/service.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ServiceItrem from '../../components/ServiceComponents/ServiceItem';

import {db,storage} from "../../config";
import { collection, query, getDocs,getDoc,doc } from "firebase/firestore";

class ServicePageDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         detailService:[],
         listService:[],
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
                idname:snap.data().name,
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
                <ContentWapper title='Service' />
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
                            {this.state.detailService.name}
                        </div>
                        <div className="contentServiceDetail">
                            {this.state.detailService.content}
                        </div>
                        <div className="title-index">Other Services</div>
                        <div className="row">
                            {this.state.listService.map(service => {
                                return service.name!=this.state.idname ? <ServiceItrem class='col-md-4 col-sm-6 col-xs-12' key={service.id} service={service}/> :''
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ServicePageDetail);
