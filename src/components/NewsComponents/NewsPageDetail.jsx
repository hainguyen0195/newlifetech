import React from 'react';
import { withRouter } from "react-router-dom";
import '../../theme/news.css';
import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import NewsItem from '../../components/NewsComponents/NewsItem';
import {db} from "../../config";
import { collection, query, getDocs,getDoc,doc} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from 'react-i18next';

class NewsPageDetail extends React.Component {
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
        this.getDataDetal('news', iditem);
        this.getData();
    }
    componentWillUpdate(){ // được gọi khi chúng ta update state của component trước khi nó render lại
        const iditem=this.props.match.params.id;
        this.getDataDetal('news', iditem);
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
        const q = query(collection(db, "news"));
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
                <ContentWapper title={this.props.i18n.t('news')} />
                <div className='news-detail-page padding'>
                    <div className='wrap-content'>
                        <div className="title-detail-news">
                            {(this.state.detailNews.namelang!=undefined)? this.state.detailNews.namelang[this.props.i18n.language] :''}
                        </div>
                        <div className="news-author-date"><FontAwesomeIcon icon={faUser} /> {this.state.detailNews.author} <span></span> <FontAwesomeIcon icon={faCalendarAlt} /> {this.state.detailNews.date}</div>
                        <div className="content-detail-news">
                            {(this.state.detailNews.contentlang!=undefined)? this.state.detailNews.contentlang[this.props.i18n.language] :''}
                        </div>
                        
                        <div className="title-index">Other News</div>
                        <div className="row">
                            {this.state.listNews.map(news => {
                                return news.namelang.vi!=this.state.idname ? <NewsItem class='col-md-4 col-sm-6 col-xs-12 col-news' news={news} key={news.id} /> :''
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(withTranslation()(NewsPageDetail));