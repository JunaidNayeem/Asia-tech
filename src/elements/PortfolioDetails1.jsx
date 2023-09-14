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

class PortfolioDetails1 extends Component{
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
                                    <h2 className="title theme-gradient">Mobile Parts and Accessories</h2>
                                    <p>Mobile accessories include any hardware that is not integral to the operation of a mobile smartphone as designed by the manufacturer. Its purpose is to protect the mobile from being damaged or to use for more convenient use of the mobile.</p>
                                    
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
                                    <h2 className="title">Mobile Parts and Accessories</h2>
                                    <p className="text-justify">The common components found on all phones are: A number of metal–oxide–semiconductor (MOS) integrated circuit (IC) chips. A battery (typically a lithium-ion battery), providing the power source for the phone functions. An input mechanism to allow the user to interact with the phone.</p>
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
                                                
                                            <li><FiCheck /> LCD Screen</li>
                                            <li><FiCheck />Touch Screen Digitizer</li>
                                            <li><FiCheck />Battery</li>
                                            <li><FiCheck />Charging Port</li>
                                            <li><FiCheck />Front Camera Module</li>
                                            <li><FiCheck />Rear Camera Module</li>
                                            <li><FiCheck />Battery Charging Case</li>
                                            <li><FiCheck />Phone Stand with Wireless Charging</li>
                                            <li><FiCheck />Phone Camera Lens Attachments</li>
                                            
                                           
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
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        
                                        <div className="pricing-body">
                                            <ul className="list-style--1 text-justify">
                                            <li><FiCheck />PopSocket Grip</li>
                                            <li><FiCheck />Speaker</li>
                                            <li><FiCheck />Microphone</li>
                                            <li><FiCheck />Volume Button</li>
                                            <li><FiCheck />Power Button</li>
                                            <li><FiCheck />Home Button Flex Cable</li>
                                            <li><FiCheck />SIM Card Tray</li>
                                            <li><FiCheck />Earpiece Speaker</li>
                                            <li><FiCheck />Vibrator Motor</li>
                                            <li><FiCheck />Proximity Sensor</li>
                                            
                                            
                                            
                                            
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
                                            <li><FiCheck />Back Cover</li>
                                            <li><FiCheck />Antenna Flex Cable</li>
                                            <li><FiCheck />Headphone Jack</li>
                                            <li><FiCheck />Front Housing</li>
                                            <li><FiCheck />Micro USB Connector</li>
                                            <li><FiCheck />Fingerprint Sensor</li>
                                            <li><FiCheck />Rear Glass Panel</li>
                                            <li><FiCheck />Wireless Charging Coil</li>
                                            <li><FiCheck />Front Frame Assembly</li>
                                            <li><FiCheck />Side Button Set</li>
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
export default PortfolioDetails1;
