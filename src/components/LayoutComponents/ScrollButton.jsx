import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
class ScrollButton extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            visible:true,
        }
        //console.log(this.state.listFeature[0].info);
        this.toggleVisible = this.toggleVisible.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll', this.toggleVisible);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleVisible);
    }
    
    toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            this.setState({visible:true});
        }
        else if (scrolled <= 300){
            this.setState({visible:false});
        }
    }
    
    scrollToTop(){
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }
    render(){
        return (
            <>
                <div className="btn-totop" onClick={this.scrollToTop}
                    style={{display: this.state.visible ? 'inline' : 'none'}}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
            </>
        )
    }
}   

export default ScrollButton;   