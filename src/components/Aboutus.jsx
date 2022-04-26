import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faSearch,faMapSigns,faHistory} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/aboutus.css';
import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";

class Aboutus extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listAboutus:[]
      };
    }
    componentDidMount(){
        this.getData();
    }
    getData = async () => {
        const q = query(collection(db, "aboutus"));
        let querySnapshot = await getDocs(q);
        const listabout=[];

        querySnapshot.forEach((doc) => {
            let about = doc.data();
            listabout.push(about);
            about['id']=(doc.id);
            this.setState({listAboutus: listabout,id:doc.id})
        });
    }
    render() {
        return (
            <>
                <div className='aboutus'>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className="row">
                            {this.state.listAboutus.map(aboutus => {
                                return  <div className="col-md-3 col-sm-4 col-xs-6" key={aboutus.id}>
                                            <div className="aboutus-item">
                                                <div className="aboutus-icon d-flex align-items-center justify-content-center">
                                                    <img src={aboutus.photo} />
                                                </div>
                                                <h3 className="aboutus-title">
                                                    {aboutus.name}
                                                </h3>
                                                <div className="aboutus-des">
                                                    {aboutus.des}
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Aboutus;
