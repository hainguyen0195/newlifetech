import React from 'react';
import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import Aboutus from '../../components/Aboutus';
import '../../theme/aboutus.css';
import {db } from "../../config";
import { getDoc,doc } from "firebase/firestore";
import { withTranslation } from 'react-i18next';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            detailAbout:[],
        };
    }
    componentDidMount(){
        const iditem='dhWX8E7gHsKwgqplE6XT';
        this.getDataDetal('static-aboutus', iditem);
    }
    getDataDetal = async (coll, id,match) => {
        const snap = await getDoc(doc(db, coll, id))
        if (snap.exists()) {
            this.setState({
                detailAbout: snap.data(),
            })
        }
        else {
            console.log("No such document")
        }
    }
    render() {
        return (
            <>
                <ContentWapper  title={this.props.i18n.t('about')} />
                <div className="padding">
                    <div className="wrap-content d-flex flex-wrap align-items-start justify-content-between">
                        <div className="about-left">
                            <div className="about-title">
                                {(this.state.detailAbout.namelang!=undefined)? this.state.detailAbout.namelang[this.props.i18n.language] :''}
                            </div>
                            {
                                this.state.detailAbout.deslang ? 
                                <div className="about-des">
                                    {this.state.detailAbout.deslang[this.props.i18n.language]}
                                </div>
                                : ''
                            }
                           
                        </div>
                        {
                            this.state.detailAbout.photo ?
                            <div className="about-right">
                                <div className="about-image">
                                    <img src={this.state.detailAbout.photo} atl='photo' />
                                </div>
                            </div>
                            :''
                        }
                    </div>
                </div>
                <Aboutus />
            </>
        )
    }
}

export default withTranslation()(About);