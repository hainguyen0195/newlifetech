import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLink ,faMapMarkerAlt,faPhoneAlt ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../theme/footer.css';
import {db} from "../config";
import { collection, query, getDocs } from "firebase/firestore";
import { Trans,withTranslation } from 'react-i18next';

const listSocial = [
    { id: 1, icon: <FontAwesomeIcon icon={faFacebookF} />, name: 'Facebook',  link:'#facebook'},
    { id: 2, icon: <FontAwesomeIcon icon={faTwitter} />, name: 'Twitter', link:'#twitter'},
    { id: 3, icon: <FontAwesomeIcon icon={faLink} />, name: 'Linkedin', link:'#linkedin'},
    { id: 4, icon: <FontAwesomeIcon icon={faTwitter} />, name: 'Twitter',  link:'#twitter'},
];

const listQuiklink = [
    { id: 1, link: 'about', name: 'About Us', },
    { id: 2, link: 'service', name: 'Service', },
    { id: 3, link: 'project', name: 'Project', },
];

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            listSocial:listSocial,
            listServices:[],
            id:'',
            listQuiklink:listQuiklink,
            adress:'Quang Trung Software City, Building 8, Room 21-20 Ward 12, Ho Chi Minh City, VietNam',
            email:'info@lifetechvn.net',
            hotline:'+84 2837 150 071',
            valueName:'',
            valueEmail:'',
            valueMess:'',
      };
      // This binding is necessary to make `this` work in the callback
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeMess = this.handleChangeMess.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.getData();
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

    handleChangeName(event) {
        this.setState({valueName: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({valueEmail: event.target.value});
    }
    handleChangeMess(event) {
        this.setState({valueMess: event.target.value});
    }
    handleSubmit(event) {
        //alert('Your name: ' + this.state.valueName + ' -- Your email' + this.state.valueEmail + ' -- Your message: ' + this.state.valueMess );
        db.collection('emailcontact').add({
            name:this.state.valueName,
            email:this.state.valueEmail,
            mess:this.state.valueMess,
        })
        .then(()=>{
        alert('insert ok');
        })
        event.preventDefault();
        this.setState({
            valueName: '',
            valueEmail: '',
            valueMess: '',
        });
    }
    render() {
        return (
            <>
                <div className='footer' >
                    <div className='wrap-content'>
                        <div className="row">
                            <div className='col-lg-4 col-md-6 col-sm-6'>
                                <div className="footer-title"><Trans i18nKey='title.thongtincongty' /></div>
                                <div className="info-company">
                                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.adress}</p>
                                    <p><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                                    <p><FontAwesomeIcon icon={faPhoneAlt} /> {this.state.hotline}</p>
                                </div>
                                <div className="socical-box d-flex align-items-center justify-content-start">
                                    {this.state.listSocial.map(socical => { 
                                        return  <div className="socical" key={socical.id}>
                                                    <a href={socical.link} title={socical.name}>{socical.icon}</a>
                                                </div>
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-title"><Trans i18nKey='title.service' /></div>
                                <ul className="footer-quick-links">
                                    {this.state.listServices.map(item => {
                                        return  <li key={item.id}>
                                                    <Link to={item.link} title={item.namelang[this.props.i18n.language]}>
                                                        {item.namelang[this.props.i18n.language]}
                                                    </Link>
                                                </li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-title"><Trans i18nKey='title.quicklink' /></div>
                                <ul className="footer-quick-links">
                                    <li >
                                        <Link to='/about' title={this.props.i18n.t('about')}>
                                            {this.props.i18n.t('about')}
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to='/service' title={this.props.i18n.t('service')}>
                                            {this.props.i18n.t('service')}
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to='/project' title={this.props.i18n.t('project')}>
                                            {this.props.i18n.t('project')}
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to='/news' title={this.props.i18n.t('news')}>
                                            {this.props.i18n.t('news')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>             
                            <div className="col-lg-4 col-md-6 col-sm-6" id="contact">
                                <div className="footer-title"><Trans i18nKey='title.contactinfomation' /></div>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="name" className="input-newsletter" value={this.state.valueName} onChange={this.handleChangeName} placeholder={this.props.i18n.t('title_form.yourname')} />
                                    <input type="email" name="email" className="input-newsletter" value={this.state.valueEmail} onChange={this.handleChangeEmail} placeholder={this.props.i18n.t('title_form.youremail')} />
                                    <div className="newsletter-pre">
                                        <textarea type="text" className="input-newsletter textarea-newsletter" value={this.state.valueMess} onChange={this.handleChangeMess} placeholder={this.props.i18n.t('title_form.yourmess')} />
                                        <input type="submit" className="button-newsletter" value={this.props.i18n.t('title_form.submit')} />
                                    </div>
                                </form>   
                            </div>             
                        </div>
                    </div>
                </div>
                <div className="coppyright">COPYRIGHT © 2019. ALL RIGHTS RESERVED BY <span>Life Tech VietNam</span></div>
                <div className="iframe-ggm-map">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7836.919189880449!2d106.6260104!3d10.8526059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752966f2e3d0e5%3A0x2242638fa4e96a29!2sLIFETECHVN%20COMPANY!5e0!3m2!1sen!2s!4v1649932162309!5m2!1sen!2s"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        />
                </div>
            </>
        )
    }
}

export default withTranslation()(Footer);
