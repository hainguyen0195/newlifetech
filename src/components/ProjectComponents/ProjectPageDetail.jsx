import React, { useState } from 'react';
import { Link,withRouter } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/project.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ProjectItem from '../../components/ProjectComponents/ProjectItem';

import {db,storage} from "../../config";
import { collection, query, getDocs,getDoc,doc , where} from "firebase/firestore";

class ProjectPageDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         detailService:[],
         idvideo:'',
         idname:'',
         listProject:[]
      };
    }
    componentDidMount(){
        const iditem=this.props.match.params.id;
        this.getDataDetal('project', iditem);
        this.getData();
    }
    componentWillUpdate(){ // được gọi khi chúng ta update state của component trước khi nó render lại
        const iditem=this.props.match.params.id;
        this.getDataDetal('project', iditem);
    }
    getDataDetal = async (coll, id,match) => {
        const snap = await getDoc(doc(db, coll, id))
       
        if (snap.exists()) {
            const vtcut= snap.data().linkvideo ? snap.data().linkvideo.lastIndexOf("&") == -1 ? snap.data().linkvideo.length : snap.data().linkvideo.lastIndexOf("&") : 0;
            
            const idvideo= snap.data().linkvideo ? snap.data().linkvideo.slice(snap.data().linkvideo.lastIndexOf("?v=")+3, vtcut) : '';
            
            this.setState({
                detailService: snap.data(),
                idvideo:idvideo,
                idname:snap.data().name,
            })
        }
        else {
            console.log("No such document")
        }
    }
    getData = async () => {
        const q = query(collection(db, "project"), where("name", "!=", this.state.idname));
        let querySnapshot = await getDocs(q);
        const listproj=[];
        querySnapshot.forEach((doc) => {
            let serv = doc.data();
            listproj.push(serv);
            serv['id']=(doc.id);
            this.setState({listProject: listproj,id:doc.id})
        });
    }

    render() {
        return (
            <>
                <ContentWapper title='Project' />
                <div className='project'>
                    <div className='wrap-content'>
                        <div className="row-project-detail">
                            <div className="prject-detail-left">
                                <div className="portfolio-info-wrapper">
                                    <div className="portfolio-info portfolio-clients">
                                        <span className="info-head gdlr-title">Name</span>{this.state.detailService.name}
                                    </div>
                                    <div className="portfolio-info portfolio-location">
                                        <span className="info-head gdlr-title">Customers</span>{this.state.detailService.customers ? this.state.detailService.customers : ''}
                                    </div>
                                    <div className="portfolio-info portfolio-scope-of-work">
                                        <span className="info-head gdlr-title">Technology </span>{this.state.detailService.technology ? this.state.detailService.technology : ''}
                                    </div>
                                    <div className="portfolio-info portfolio-schedule">
                                        <span className="info-head gdlr-title">Construction time </span>{this.state.detailService.time ? this.state.detailService.time : ''}
                                    </div>
                                    <div className="portfolio-info portfolio-schedule">
                                        <span className="info-head gdlr-title">Evaluate </span>{this.state.detailService.star ? this.state.detailService.star : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="prject-detail-right">
                                <div className="title-detail-project">
                                    Project Detail
                                </div>
                                <div className="des-detail-project">
                                    {this.state.detailService.content ? this.state.detailService.content : ''}
                                </div>
                                
                                <div className="row">
                                   {
                                        this.state.idvideo? 
                                        <>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="video-responsive">
                                                    <iframe
                                                    width="853"
                                                    height="480"
                                                    src={`https://www.youtube.com/embed/${this.state.idvideo}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Embedded youtube"
                                                    />
                                                </div>
                                                <div className="title-img-detail-project">
                                                    {this.state.detailService.namevideo ? this.state.detailService.namevideo : ''}
                                                </div>
                                            </div>
                                        </>
                                        :''
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="title-index">Other Project</div>
                        <div className="row">
                            {this.state.listProject.map(project => {
                                return <ProjectItem class='col-md-6 col-sm-6 col-xs-12 col-project' project={project} key={project.id} />
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ProjectPageDetail);
