import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/project.css';

import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";

class Project extends React.Component {
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
                    <div className="title-index">Our Projects</div>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className="row">
                            {this.state.listProject.map(project => {
                                return  <div className="col-md-6 col-sm-6 col-xs-12 col-project" key={project.id}>
                                            <div className="project-item d-flex align-items-center justify-content-between">
                                                <div className="project-icon">
                                                     <Link to="/" title='photo'><img src={project.photo} /></Link>
                                                        <Link className="view-project" to="/" title='' ><FontAwesomeIcon icon={faSearchPlus} /> View Project</Link>
                                                </div>
                                                <div className="project-info">
                                                    <h3 className="project-title">
                                                        {project.name}
                                                    </h3>
                                                    <div className="project-des">
                                                        {project.des}
                                                    </div>
                                                    <div className="project-seemore">
                                                        <Link to="/" title='photo'><FontAwesomeIcon icon={faEye} /> Detail </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Project;