import React from 'react';
import ContentWapper from '../../components/LayoutComponents/ContentWapper';
import Aboutus from '../../components/Aboutus';
import * as images from '../../assets/images';
import '../../theme/aboutus.css';
import {db,storage} from "../../config";
import { collection, query, getDocs,getDoc,doc , where} from "firebase/firestore";

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
                <ContentWapper title='About' />
                <div className="padding">
                    <div className="wrap-content d-flex flex-wrap align-items-start justify-content-between">
                        <div className="about-left">
                            <div className="about-title">
                                {this.state.detailAbout.name}
                            </div>
                            {
                                this.state.detailAbout.des1 ? 
                                <div className="about-des">
                                    {this.state.detailAbout.des1}
                                </div>
                                : ''
                            }
                            {
                                this.state.detailAbout.des2 ? 
                                <div className="about-des">
                                    {this.state.detailAbout.des2}
                                </div>
                                : ''
                            }
                            {
                                this.state.detailAbout.des3 ? 
                                <div className="about-des">
                                    {this.state.detailAbout.des3}
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

export default About;