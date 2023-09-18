import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import BrandTwo from "../elements/BrandTwo";
import { FiCast , FiLayers , FiUsers , FiCheck } from "react-icons/fi";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioDetails16 extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Product Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="ATT Star Icon.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Virtual and Augmented Reality</h2>
                                    <p>Virtual Reality is the technology that provides almost real and/or believable experiences in a synthetic or virtual way, while Augmented Reality enhances the real world by superimposing computer-generated information on top of it.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0 text-justify">
                                    <h2 className="title">Virtual and Augmented Reality</h2>
                                    <p className="text-justify">Virtual Reality is the technology that provides almost real and/or believable experiences in a synthetic or virtual way, while Augmented Reality enhances the real world by superimposing computer-generated information on top of it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        
                                        <div className="pricing-body">
                                            <ul className="list-style--1 text-justify">
                                                
                                            <li><FiCheck />Virtual Reality Headsets</li>
                                            <li><FiCheck />Augmented Reality Glasses</li>
                                            <li><FiCheck />VR Motion Controller</li>
                                            <li><FiCheck />VR Treadmill</li>
                                            <li><FiCheck />VR Haptic Gloves</li>
                                            <li><FiCheck />Full-Body Haptic Suit for VR</li>
                                            <li><FiCheck />AR Architectural Visualization Tool</li>
                                            <li><FiCheck />VR Medical Training Simulator</li>
                                            <li><FiCheck />AR Navigation Glasses for Outdoor Activities</li>
                                            
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing ">
                                    <div className="pricing-table-inner">
                                        
                                        <div className="pricing-body">
                                            <ul className="list-style--1 text-justify">
                                            <li><FiCheck />AR Artistic Creation Platform</li>
                                            <li><FiCheck />VR Camera Rig</li>
                                            <li><FiCheck />VR Gaming PC</li>
                                            <li><FiCheck />AR Development Kit</li>
                                            <li><FiCheck />VR Backpack PC</li>
                                            <li><FiCheck />Mixed Reality Headset</li>
                                            <li><FiCheck />VR Content Creation Software</li>
                                            <li><FiCheck />VR Racing Simulator</li>
                                            <li><FiCheck />AR Smart Glasses for Enterprise</li>
                                            <li><FiCheck />VR Arcade System</li>
                                            <li><FiCheck />VR Educational Kit</li>
                                           
                                                                                        
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        
                                        <div className="pricing-body">
                                            <ul className="list-style--1 text-justify">
                                            <li><FiCheck />AR Navigation Device</li>
                                            <li><FiCheck />AVR Art Creation Tool</li>
                                            <li><FiCheck />AAR Remote Assistance Tool</li>
                                            <li><FiCheck />AVR Music Experience Platform</li>
                                            <li><FiCheck />AAR Fitness Trainer</li>
                                            <li><FiCheck />AVR Meditation App</li>
                                            <li><FiCheck />AAR Interactive Learning System</li>
                                            <li><FiCheck />AVR Film Production Equipment</li>
                                            <li><FiCheck />AAR Healthcare Visualization Tool</li>
                                            <li><FiCheck />AVR Flight Simulator</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div></div>

                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />  


            </React.Fragment>
        )
    }
}
export default PortfolioDetails16;
