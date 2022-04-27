import React, { useState } from 'react';
import { Link,withRouter } from "react-router-dom";

import * as images from '../../assets/images';
import '../../theme/news.css';

import ContentWapper from '../LayoutComponents/ContentWapper';
import RecruitmentItem from './RecruitmentItem';

import {db,storage} from "../../config";
import { collection, query, getDocs,getDoc,doc , where} from "firebase/firestore";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import i18n from '../../i18n';
import { Trans,withTranslation } from 'react-i18next';
import { Translation } from 'react-i18next';

class RecruitmentDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         detailNews:[],
         idvideo:'',
         idname:'',
         listNews:[]
      };
    }
    componentDidMount(){
        const iditem=this.props.match.params.id;
        this.getDataDetal('recruitment', iditem);
        this.getData();
    }
    componentWillUpdate(){ // được gọi khi chúng ta update state của component trước khi nó render lại
        const iditem=this.props.match.params.id;
        this.getDataDetal('recruitment', iditem);
    }
    getDataDetal = async (coll, id,match) => {
        const snap = await getDoc(doc(db, coll, id))
       
        if (snap.exists()) {
            this.setState({
                detailNews: snap.data(),
                idname:snap.data().namelang.vi,
            })
        }
        else {
            console.log("No such document")
        }
    }
    getData = async () => {
        const q = query(collection(db, "recruitment"));
        let querySnapshot = await getDocs(q);
        const listproj=[];
        querySnapshot.forEach((doc) => {
            let serv = doc.data();
            listproj.push(serv);
            serv['id']=(doc.id);
            this.setState({listNews: listproj,id:doc.id})
        });
    }

    render() {
        return (
            <>
                <ContentWapper title={this.props.i18n.t('recruitment')} />
                <div className='news-detail-page padding'>
                    <div className='wrap-content'>
                        <div className="title-detail-news">
                        {(this.state.detailNews.namelang!=undefined)? this.state.detailNews.namelang[this.props.i18n.language] :''}
                        </div>
                        <div className="news-author-date"><FontAwesomeIcon icon={faUser} /> {this.state.detailNews.author} <span></span> <FontAwesomeIcon icon={faCalendarAlt} /> {this.state.detailNews.date}</div>
                        <div className="content-detail-news">
                            {(this.state.detailNews.contentlang!=undefined)? this.state.detailNews.contentlang[this.props.i18n.language] :''}
                        </div>
                        {
                            this.state.listNews.length>1?
                            <>
                                <div className="title-index"><Trans i18nkey='title.otherrecruitment' /></div>
                                <div className="row">
                                    {this.state.listNews.map(news => {
                                        return news.namelang.vi!=this.state.idname ? <RecruitmentItem class='col-md-4 col-sm-6 col-xs-12 col-news' news={news} key={news.id} /> :''
                                    })}
                                </div>
                            </>
                            :''
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(withTranslation()(RecruitmentDetail));