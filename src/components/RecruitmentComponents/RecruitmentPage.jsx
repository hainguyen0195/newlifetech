import React, { useState } from 'react';
import { Link } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/news.css';

import ContentWapper from '../LayoutComponents/ContentWapper';
import RecruitmentItem from './RecruitmentItem';

import {db,storage} from "../../config";

import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class NewsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listNews:[],
         id:'',
      };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "recruitment"));
        let querySnapshot = await getDocs(q);
        const listnews=[];
        querySnapshot.forEach((doc) => {
            let news = doc.data();
            listnews.push(news);
            news['id']=(doc.id);
            this.setState({listNews: listnews,id:doc.id})
        });
    }
    render() {
        return (
            <>
                <ContentWapper title='Recruitment' />
                <div className='news'>
                    <div className='wrap-content'>
                        <div className="title-index">Our Recruitment</div>
                        <div className="row">
                            {this.state.listNews.map(news => {
                                return <RecruitmentItem class='col-md-4 col-sm-6 col-xs-12 col-news' news={news} key={news.id} />
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsPage;
