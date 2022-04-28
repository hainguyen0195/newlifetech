import React from 'react';
import '../../theme/service.css';
import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import NewsItem from '../../components/NewsComponents/NewsItem';
import {db} from "../../config";
import { collection, query, getDocs } from "firebase/firestore";
import { withTranslation } from 'react-i18next';

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
        const q = query(collection(db, "news"));
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
                <ContentWapper title={this.props.i18n.t('news')} />
                <div className='news padding'>
                    <div className='wrap-content'>
                        <div className="row">
                            {this.state.listNews.map(news => {
                                return <NewsItem class='col-md-4 col-sm-6 col-xs-12 col-news' news={news} key={news.id} />
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(NewsPage);
