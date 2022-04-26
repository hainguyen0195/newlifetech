import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
class RecruitmentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        };  
    }
    render() {
        return (
            <>
                <div className={this.props.class} key={this.props.news.id}>
                    <div className="news-item">
                        <div className="news-icon">
                                <Link to={`/recruitment/${this.props.news.id}`} title='photo'><img src={this.props.news.photo} /></Link>
                        </div>
                        <div className="news-content">
                            <div className="news-author-date"><FontAwesomeIcon icon={faUser} /> {this.props.news.author} <span></span> <FontAwesomeIcon icon={faCalendarAlt} /> {this.props.news.date}</div>
                            <h3 className="news-title">
                                {this.props.news.name}
                            </h3>
                            <div className="news-des">
                                {this.props.news.des}
                            </div>
                            <div className="news-seemore">
                                <Link className="btn-a" to={`/recruitment/${this.props.news.id}`} title='photo'>Continue reading</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RecruitmentItem;