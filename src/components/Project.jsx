import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/project.css';

const listProject=[
    { id: 1, icon: images.Project1, name: 'Project 1 - Mobile App Development', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { id: 2, icon: images.Project2, name: 'Project 2 - Mobile App Development', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { id: 3, icon: images.Project3, name: 'Project 3 - Mobile App Development', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { id: 4, icon: images.Project1, name: 'Project 4 - Mobile App Development', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { id: 5, icon: images.Project2, name: 'Project 5 - Mobile App Development', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { id: 6, icon: images.Project3, name: 'Project 6 - Mobile App Development', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
]

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           listProject:listProject
        };
        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);
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
                                                     <Link to="/" title='photo'><img src={project.icon} /></Link>
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