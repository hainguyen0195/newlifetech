import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import * as images from '../assets/images';
import '../theme/counter.css';

const listCounter = [
    { id: 1, number: 23 , name: 'Years of Experience', des:'+'},
    { id: 2, number: 500, name: 'Complete Projects', des:''},
    { id: 3, number: 100, name: 'Employees', des:'+'},
    { id: 4, number: 400, name: '5 Star Rating', des:'+'},
];

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         listCounter:listCounter
      };
    }
    render() {
        return (
            <>
                <div className='counter'>
                    <div className='wrap-content'>
                        <div className="row">
                            {this.state.listCounter.map(counter => {
                                return  <div className="col-md-3 col-sm-4 col-xs-6" key={counter.id}>
                                            <div className="counter-item">
                                                <div className="counter-number">
                                                    <span><CountUp end={counter.number} duration={2.75} /></span> {counter.des}
                                                </div>
                                                <h3 className="counter-title">
                                                    {counter.name}
                                                </h3>
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

export default Counter;
