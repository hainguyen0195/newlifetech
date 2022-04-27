import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/project.css';

import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";

import ProjectItem from '../components/ProjectComponents/ProjectItem';
import { Trans } from 'react-i18next';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           listProject:[],
           id:'',
        };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "project"));
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
                <div className='project'>
                    <div className="title-index"><Trans i18nKey='title.project' /></div>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
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

export default Project;