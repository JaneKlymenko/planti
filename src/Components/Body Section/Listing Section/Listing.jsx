import React from "react";
import './listing.scss';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import img from '../../../Assets/ph1.jpeg'
import ppl from '../../../Assets/people.jpeg'
import ppl2 from '../../../Assets/people2.jpeg'
import ppl3 from '../../../Assets/people3.jpeg'
import ppl4 from '../../../Assets/people4.jpeg'

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My listing</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon'/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className='singleItem'>
                    <AiFillHeart className='icon' />
                    <img src={img} alt='image'/>
                    <h3>Annual Vince</h3>
                </div>

                <div className='singleItem'>
                    <AiOutlineHeart className='icon' />
                    <img src={img} alt='image'/>
                    <h3>Annual Vince</h3>
                </div>

                <div className='singleItem'>
                    <AiOutlineHeart className='icon' />
                    <img src={img} alt='image'/>
                    <h3>Annual Vince</h3>
                </div>

                <div className='singleItem'>
                    <AiFillHeart className='icon' />
                    <img src={img} alt='image'/>
                    <h3>Annual Vince</h3>
                </div>

            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3> Top sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'/>
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={ppl} alt="user"/>
                            <img src={ppl2} alt="user"/>
                            <img src={ppl3} alt="user"/>
                            <img src={ppl4} alt="user"/>
                        </div>
                        <div className="cardText">
                            <span>4555 plant sold <br/>
                                <small>
                                    21 Sellers <span className="date">7 days</span>
                                </small>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'/>
                        </button>
                    </div>
                    <div className="card flex">
                        <div className="users">
                            <img src={ppl} alt="user"/>
                            <img src={ppl2} alt="user"/>
                            <img src={ppl3} alt="user"/>
                            <img src={ppl4} alt="user"/>
                        </div>
                        <div className="cardText">
                            <span>28649 plant sold <br/>
                                <small>
                                    26 Sellers <span className="date">31 days</span>
                                </small>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Listing;