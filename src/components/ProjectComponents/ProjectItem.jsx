import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus,faEye} from '@fortawesome/free-solid-svg-icons';
class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        };  
    }
    render() {
        return (
            <>
                <div className={this.props.class} key={this.props.project.id}>
                    <div className="project-item d-flex align-items-center justify-content-between">
                        <div className="project-icon">
                                <Link to={`/project/${this.props.project.id}`} title='photo'><img src={this.props.project.photo} /></Link>
                                <Link className="view-project" to={`/project/${this.props.project.id}`} title='' ><FontAwesomeIcon icon={faSearchPlus} /> View Project</Link>
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">
                                {this.props.project.name}
                            </h3>
                            <div className="project-des">
                                {this.props.project.des}
                            </div>
                            <div className="project-seemore">
                                <Link to={`/project/${this.props.project.id}`} title='photo'><FontAwesomeIcon icon={faEye} /> Detail </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectItem;