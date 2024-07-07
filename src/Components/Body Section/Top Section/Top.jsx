import React from "react";
import './top.scss';

import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs';
import adminimg from '../../../Assets/admin.webp';
import img from '../../../Assets/ph8.png'
import video from '../../../Assets/video.mp4'

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Planti</h1>
                    <p>Hello, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt className='icon'/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon'/>
                    <MdNotificationsNone className='icon'/>
                    <div className="adminImage">
                        <img src={adminimg} alt='admin'/>
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut iqua. Ut enim ad minim veniam</p>

                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Stat</h1>
                            <div className="flex">
                            <div className="flex">
                                <span>
                                    Today <br/><small>4 Orders</small>
                                </span>
                            </div>
                            <div className="flex">
                                <span>
                                    This Month <br/><small>175 Orders</small>
                                </span>
                            </div>
                            </div>


                            <span className="flex link">
                                Go to my orders
                                <BsArrowRightShort className='icon'/>
                            </span>
                        </div>

                        <div className="imgDiv">
                            <img src={img} alt='Image' />
                        </div>

                    </div>

                    <div className="sideBarCard">
                        <BsQuestionCircle className="icon" />
                        <div className="cardContent">
                            <div className="circle1"></div>
                            <div className="circle2"></div>

                            <h3>Help Center</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut iqua. Ut enim ad minim veniam</p>

                            <button className="btn">Go to help center</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
};

export default Top;