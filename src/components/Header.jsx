import React  from 'react';
import { Link ,NavLink } from "react-router-dom";
import { Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/header.css';
import {db} from "../config";
import { collection, query, getDocs } from "firebase/firestore";
import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
    constructor(props) {
      super(props);
      const lang = navigator.languages ? navigator.languages[0] : navigator.language;
      this.state = {
         logoHeader:images.Logo,
         listServices:[],
         id:'',
         scrolling:'',
         openmenumobile: true,
         openmenucat: true,
         valuelang: lang.substr(0, 2),
      };
      this.handleScroll = this.handleScroll.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleShowmenucat = this.handleShowmenucat.bind(this);
      this.changeLanguage = this.changeLanguage.bind(this);
    } 
    componentDidMount(){
        this.getData();
        window.addEventListener('scroll', this.handleScroll);
    }
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
            if(this.state.openmenucat==false){ 
                this.setState({openmenucat:true})
            }
        }
    }
    handleShowmenucat () {
        if(this.state.openmenucat==true){ 
            this.setState({openmenucat:false})
        }else{
            this.setState({openmenucat:true})
        }
    }
    changeLanguage(e) {
        this.setState({valuelang:e.target.value});
        i18n.changeLanguage(e.target.value);
        if (document.documentElement.lang !== e.target.value) {
            document.documentElement.lang = e.target.value;
        }
    }
    render() {
        //const { t } = this.props;
        //console.log(this.props.i18n.language);
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
                            <li className="limenu">Menu <span onClick={this.handleClick} ><FontAwesomeIcon icon={faTimes} /></span></li>
                            <li>  
                                <Link onClick={this.handleClick} to="/" className=''   title={this.props.i18n.t('home')}>
                                    {this.props.i18n.t('home')}
                                </Link>
                            </li>
                            <li>  
                                <NavLink onClick={this.handleClick} to="/about" activeClassName='active'   title={this.props.i18n.t('about')}>
                                {this.props.i18n.t('about')}
                                </NavLink>
                            </li>
                            <li className="lihaschild">  
                                <NavLink onClick={this.handleClick} to="/service" activeClassName='active'   title={this.props.i18n.t('service')}>
                                {this.props.i18n.t('service')}  <FontAwesomeIcon icon={faChevronDown} />
                                </NavLink>
                                <span onClick={this.handleShowmenucat} ><FontAwesomeIcon icon={faChevronDown} /></span>
                                <ul className="ulcat" id={this.state.openmenucat ? '':'oppen'}>
                                    {this.state.listServices.map(service => {
                                        return  <li key={service.id}>
                                                    <Link onClick={this.handleClick} to={`/service/${service.id}`} title={service.namelang[this.props.i18n.language]}>
                                                        {service.namelang[this.props.i18n.language]}
                                                    </Link>
                                                </li>
                                    })}
                                </ul>
                            </li>
                            <li>  
                                <NavLink onClick={this.handleClick} to="/project" activeClassName='active' title={this.props.i18n.t('project')}>
                                    {this.props.i18n.t('project')}
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink onClick={this.handleClick} to="/news" activeClassName='active' title={this.props.i18n.t('news')}>
                                    {this.props.i18n.t('news')}
                                </NavLink>
                            </li>
                            <li>  
                                <NavLink onClick={this.handleClick} to="/recruitment" activeClassName='active' title={this.props.i18n.t('recruitment')}>
                                    {this.props.i18n.t('recruitment')}
                                </NavLink>
                            </li>
                            <li>  
                                <a onClick={this.handleClick} href="#contact" title={this.props.i18n.t('contact')}>
                                    {this.props.i18n.t('contact')}
                                </a>
                            </li>
                        </ul>
                        <select className="selectlanguage" value={this.state.valuelang} onChange={this.changeLanguage}>
                            <option value="vi" >
                                Vietnamese
                            </option>
                            <option value="en">
                                English
                            </option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(Header);
