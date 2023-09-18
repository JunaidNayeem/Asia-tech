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

class PortfolioDetails15 extends Component{
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
                                    <h2 className="title theme-gradient">Photography and Videography Gear</h2>
                                    <p>Gear" is any and all hardware used to produce photographic images.</p>
                                    
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
                                    <h2 className="title">Photography and Videography Gear</h2>
                                    <p className="text-justify">Gear" is any and all hardware used to produce photographic images.</p>
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
                                                
                                            <li>  <FiCheck /> DSLR Camera</li>
                                            <li><FiCheck />Mirrorless Camera</li>
                                            <li><FiCheck />Action Camera</li>
                                            <li><FiCheck />Drone with Camera</li>
                                            <li><FiCheck />Gimbal Stabilizer</li>
                                            <li><FiCheck />Camera Tripod</li>
                                            <li><FiCheck />Camera Backpack</li>
                                            <li><FiCheck />Camera Lens</li>
                                            <li><FiCheck />Camera Flash</li>
                                            
                                           
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
                                            <li><FiCheck />360-Degree Camera with Livestreaming</li>
                                            <li><FiCheck />Smartphone Gimbal Stabilizer</li>
                                            <li><FiCheck />Camera Crane Jib Arm</li>
                                            <li><FiCheck />Drone Follow Mode Accessories</li>
                                            <li><FiCheck />Mobile Photography Studio Kit</li>
                                            <li><FiCheck />Camera Remote Shutter Release</li>
                                            <li><FiCheck />Camera Slider</li>
                                            <li><FiCheck />Ring Light</li>
                                            <li><FiCheck />Photo Studio Lighting Kit</li>
                                            <li><FiCheck />Green Screen Backdrop</li>
                                            <li><FiCheck />Camera Microphone</li>
                                           
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
                                            <li><FiCheck />Camera Filters</li>
                                            <li><FiCheck />Camera Cleaning Kit</li>
                                            <li><FiCheck />Camera Shoulder Rig</li>
                                            <li><FiCheck />Camera Monopod</li>
                                            <li><FiCheck />Camera Lens Hood</li>
                                            <li><FiCheck />Camera Rain Cover</li>
                                            <li><FiCheck />Camera Gimbal Vest</li>
                                            <li><FiCheck />Camera Follow Focus System</li>
                                            <li><FiCheck />Camera Remote Control</li>
                                            <li><FiCheck />Camera Wireless Transmitter</li>
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
export default PortfolioDetails15;
