import React from "react";
import './activity.scss';
import { BsArrowRightShort } from 'react-icons/bs';

import ppl1 from '../../../Assets/people3.jpeg'
import ppl2 from '../../../Assets/people4.jpeg'


const Activity = () => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent activity</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon'/>
                </button>
            </div>
            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={ppl1} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name">Elza Rodriges</span>
                        <small>Order a new plant</small>
                    </div>
                    <div className="duration">2 min ago</div>
                </div>
                <div className="singleCustomer flex">
                    <img src={ppl2} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name">Alis Jason</span>
                        <small>Order a new plant</small>
                    </div>
                    <div className="duration">4 min ago</div>
                </div>
                <div className="singleCustomer flex">
                    <img src={ppl1} alt="customer image" />
                    <div className="customerDetails">
                        <span className="name">Alex Colton</span>
                        <small>Order a new plant</small>
                    </div>
                    <div className="duration">5 min ago</div>
                </div>
            </div>
        </div>
    )
};

export default Activity;