import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import i18n from '../../i18n';
import { Trans,withTranslation } from 'react-i18next';

class NewsItem extends React.Component {
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
                                <Link to={`/news/${this.props.news.id}`} title='photo'><img src={this.props.news.photo} /></Link>
                        </div>
                        <div className="news-content">
                            <div className="news-author-date"><FontAwesomeIcon icon={faUser} /> {this.props.news.author} <span></span> <FontAwesomeIcon icon={faCalendarAlt} /> {this.props.news.date}</div>
                            <h3 className="news-title">
                                {this.props.news.namelang[this.props.i18n.language]}
                            </h3>
                            <div className="news-des">
                                {this.props.news.deslang[this.props.i18n.language]}
                            </div>
                            <div className="news-seemore">
                                <Link className="btn-a" to={`/news/${this.props.news.id}`} title={this.props.i18n.t('continuereading')}><Trans i18nKey='continuereading' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(NewsItem);