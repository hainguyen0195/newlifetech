import React from 'react';
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next';
class ContentWapper extends React.Component {
    constructor(props) {
        super(props);
        this.state={};  
    }
    render() {
        return (
            <>
                <div className="contentWapper d-flex align-items-center justify-content-between">
                    <div className="wrap-content ">
                        <div className="page-title-box">
                            <div className="page-title-content">
                                {this.props.title}
                            </div>
                            <div className="breadcrumb d-flex align-items-center justify-content-center">
                                <li>
                                    <Link to="/" alt="Home">
                                        <Trans i18nKey='home' />
                                    </Link>  
                                </li>
                                <li>
                                    {this.props.title}
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContentWapper;