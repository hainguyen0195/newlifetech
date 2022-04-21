import React, { useState } from 'react';
import { Link } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/service.css';

import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import ProjectItem from '../../components/ProjectComponents/ProjectItem';

import {db,storage} from "../../config";

import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class Service extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listProject:[]
      };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "project"));
        let querySnapshot = await getDocs(q);
        const listproject=[];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id);
            let project = doc.projectdata();
            listproject.push(project = doc.project);
            project = doc.project['id']=(doc.id);
            this.setState({listProject: listproject,id:doc.id})
        });
    }
    render() {
        return (
            <>
                <ContentWapper title='Project' />
                <div className='project'>
                    <div className='wrap-content'>
                        <div className="title-index">Our Project</div>
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

export default Service;
