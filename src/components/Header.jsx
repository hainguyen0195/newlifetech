import React, { useState } from 'react';
import { Link ,NavLink } from "react-router-dom";
import { Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faBars} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/header.css';
import {db,storage} from "../config";
import { collection, query, getDocs } from "firebase/firestore";


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         logoHeader:images.Logo,
         listServices:[],
         id:'',
         scrolling:'',
         openmenumobile: true,
      };
      this.handleScroll = this.handleScroll.bind(this);
      this.handleClick = this.handleClick.bind(this);
    } 
    // method sẽ chạy sau khi Component render lầu đầu tiên
    componentDidMount(){
        this.getData();
        window.addEventListener('scroll', this.handleScroll);
    }
    // đây là method sẽ chạy sau cùng, trước khi toàn bộ Component bị destroy, đây là nơi thích hợp để chúng ta thực hiện clear và giải phóng resource
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    getData = async () => {
        const q = query(collection(db, "services"));
        let querySnapshot = await getDocs(q);
        const listser=[];

        querySnapshot.forEach((doc) => {
            let news = doc.data();
            listser.push(news);
            news['id']=(doc.id);
            this.setState({listServices: listser,id:doc.id})
        });
    }
    handleScroll(event) {
        if (window.scrollY === 0 && this.state.scrolling === 'is-sticky') {
            this.setState({scrolling: ''});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== 'is-sticky') {
            this.setState({scrolling: 'is-sticky'});
        }
    }
    handleClick () {
        if(this.state.openmenumobile==true){ 
            this.setState({openmenumobile:false})
        }else{
            this.setState({openmenumobile:true})
        }
    }
  
    render() {
        return (
            <>
                <div className='header' id={this.state.scrolling}>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <div className='btn-menu' onClick={this.handleClick}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="logo">
                            <Link className="logo-header" to="/" title='Logo'><img src={this.state.logoHeader} /></Link>
                        </div>

                        <ul className="menu d-flex align-items-center justify-content-end " id={this.state.openmenumobile ? '':'oppen'} >
                            <li>  
                                <Link to="/" className=''   alt="Home">
                                    Home    
                                </Link>
                            </li>
                            <li>  
                                <NavLink to="/about" activeClassName='active'   alt="About">
                                    About
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/service" activeClassName='active'   alt="Services">
                                    Services  <FontAwesomeIcon icon={faChevronDown} />
                                </NavLink>
                                <ul className="ulcat">
                                    {this.state.listServices.map(service => {
                                        return  <li key={service.id}>
                                                    <Link to={`/service/${service.id}`} atl="Services1">
                                                        {service.name}
                                                    </Link>
                                                </li>
                                    })}
                                </ul>
                            </li>
                            <li>  
                                <NavLink to="/project" activeClassName='active' alt="Project">
                                    Project
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/news" activeClassName='active' alt="News">
                                    News
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink to="/recruitment" activeClassName='active' alt="Recruitment">
                                    Recruitment
                                </NavLink>
                            </li>
                            <li>  
                                <a href="#footer" activeClassName='active' alt="Contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;
