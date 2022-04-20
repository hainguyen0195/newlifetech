import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/news.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const listNews = [
    { id: 1, icon: images.News1, name: 'The Biggest Trends in Technology We\'ve Seen This Year', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt'},
    { id: 2, icon: images.News1, name: 'Why We Love Technology (And You Should, Too!)', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt'},
    { id: 3, icon: images.News1, name: 'The 17 Most Misunderstood Facts About Technology', des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt'},
];

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listNews:listNews
      };
      // This binding is necessary to make `this` work in the callback
      //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <>
                <div className='news padding'>
                    <div className="title-index">New Posts</div>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <OwlCarousel className='owl-theme' loop margin={15} items={3} autoplay>
                            {this.state.listNews.map(news => {
                                return  <div className="news-col" key={news.id}>
                                            <div className="news-item">
                                                <div className="news-icon">
                                                     <Link to="/" title='photo'><img src={news.icon} /></Link>
                                                </div>
                                                <div className="news-content">
                                                    <div className="news-author-date"><FontAwesomeIcon icon={faUser} /> Author <span></span> <FontAwesomeIcon icon={faCalendarAlt} /> 20 June 2022</div>
                                                    <h3 className="news-title">
                                                        {news.name}
                                                    </h3>
                                                    <div className="news-des">
                                                        {news.des}
                                                    </div>
                                                    <div className="news-seemore">
                                                        <Link className="btn-a" to="/" title='photo'>Continue reading</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}

export default News;
