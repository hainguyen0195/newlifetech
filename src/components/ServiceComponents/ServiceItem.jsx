import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
class ServiceItrem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        };  
    }
    render() {
        return (
            <>
                <div className={this.props.class} key={this.props.service.id}>
                    <div className="service-item">
                        <div className="service-icon">
                            <Link to="/servicedetail" title='photo'><img src={this.props.service.photo} /></Link>
                        </div>
                        <h3 className="service-title">
                            {this.props.service.name}
                        </h3>
                        <div className="service-des">
                            {this.props.service.des}
                        </div>
                        <div className="service-seemore">
                            <Link to="/servicedetail" title='photo'>Seemore <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ServiceItrem;