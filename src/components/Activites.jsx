import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import * as images from '../assets/images';
import '../theme/project.css';

const listActivites=[
    { id: 1, icon: images.Avtive1, name: 'Project 1 - Mobile App Development',},
    { id: 2, icon: images.Avtive2, name: 'Project 2 - Mobile App Development',},
    { id: 3, icon: images.Avtive1, name: 'Project 3 - Mobile App Development',},
    { id: 4, icon: images.Avtive2, name: 'Project 4 - Mobile App Development',},
    { id: 5, icon: images.Avtive1, name: 'Project 5 - Mobile App Development',},
]

class Activites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           listActivites:listActivites
        };
      }

      render() {
        return (
            <>
                <div className='activite padding'>
                    <div className="title-index">Our activites</div>
                    <div className='wrap-content d-flex align-items-center justify-content-between'>
                        <OwlCarousel className='owl-theme' loop margin={0} items={1} autoplay>
                            {this.state.listActivites.map(activite => {
                                return   <div className="activite-item item" key={activite.id}>
                                            <img src={activite.icon} />
                                        </div>
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}

export default Activites;