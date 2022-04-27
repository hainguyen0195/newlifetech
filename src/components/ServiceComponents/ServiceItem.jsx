import React from 'react';
import { Link,withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import i18n from '../../i18n';
import { Trans,withTranslation } from 'react-i18next';

class ServiceItrem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        };  
        //this.handleClick=this.handleClick.bind(this);
    }
    // handleClick = (service) => { 
    //     this.props.history.push(`/service/${service.id}`)
    // }
    render() {
        return (
            <>
                <div className={this.props.class} >
                    <div className="service-item">
                        <div className="service-icon">
                        <Link to={`/service/${this.props.service.id}`} title='link'>
                            <img src={this.props.service.photo} />
                        </Link>
                        </div>
                        <h3 className="service-title">
                            {this.props.service.namelang[this.props.i18n.language]}
                        </h3>
                        <div className="service-des">
                            {this.props.service.deslang[this.props.i18n.language]}
                        </div>
                        <div className="service-seemore">
                            <Link to={`/service/${this.props.service.id}`} title='link'><Trans i18nKey='seemore' /> <FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(ServiceItrem);