import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/news.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";


class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listNews:[]
      };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "news"));
        let querySnapshot = await getDocs(q);
        const listnew=[];

        querySnapshot.forEach((doc) => {
            let news = doc.data();
            listnew.push(news);
            news['id']=(doc.id);
            this.setState({listNews: listnew,id:doc.id})
        });
    }
    render() {
        return (
            <>
                <div className='news padding'>
                    <div className="title-index">New Posts</div>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <OwlCarousel className='owl-theme' loop margin={15} items={3} autoplay nav>
                            {this.state.listNews.map(news => {
                                return  <div className="news-col" key={news.id}>
                                            <div className="news-item">
                                                <div className="news-icon">
                                                     <Link to="/" title='photo'><img src={news.photo} /></Link>
                                                </div>
                                                <div className="news-content">
                                                    <div className="news-author-date"><FontAwesomeIcon icon={faUser} /> {news.author} <span></span> <FontAwesomeIcon icon={faCalendarAlt} /> {news.date}</div>
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
