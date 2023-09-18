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

class PortfolioDetails13 extends Component{
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
                                    <h2 className="title theme-gradient">Gaming Accessories</h2>
                                    <p>A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience. </p>
                                    
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
                                    <h2 className="title">Gaming Accessories</h2>
                                    <p className="text-justify">A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.</p>
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
                                                
                                            <li> <FiCheck />Gaming Chair with Massage Function</li>
                                            <li><FiCheck />Gaming Desk with Built-in RGB Lighting</li>
                                            <li><FiCheck />Racing Simulator Cockpit</li>
                                            <li><FiCheck />Gaming Glasses with Blue Light Filter</li>
                                            <li><FiCheck />Console Cooling Stand</li>
                                            <li><FiCheck />Gaming Mouse</li>
                                            <li><FiCheck />Gaming Keyboard</li>
                                           
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
                                            <li><FiCheck />Gaming Headset</li>
                                            <li><FiCheck />Gaming Monitor</li>
                                            <li><FiCheck />Gaming Controller</li>
                                            <li><FiCheck />Gaming Console Stand</li>
                                            <li><FiCheck />Gaming Capture Card</li>
                                            <li><FiCheck />Gaming Webcam</li>
                                            <li><FiCheck />Gaming Microphone</li>
                                            <li><FiCheck />Gaming Laptop Cooling Pad</li>
                                            <li><FiCheck />Gaming Desk</li>
                                            <li><FiCheck />Gaming Backpack</li>
                                            <li><FiCheck />Gaming Steering Wheel</li>
                                            
                                                                                        
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
                                            <li><FiCheck />Gaming Racing Seat</li>
                                            <li><FiCheck />Gaming Desk Mat</li>
                                            <li><FiCheck />Gaming Cable Management Kit</li>
                                            <li><FiCheck />Gaming Finger Sleeves</li>
                                            <li><FiCheck />Gaming Laptop Stand</li>
                                            <li><FiCheck />Gaming LED Strip</li>
                                            <li><FiCheck />Gaming Speaker System</li>
                                            <li><FiCheck />Gaming Monitor Mount</li>
                                            <li><FiCheck />Gaming External Hard Drive</li>
                                     
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
export default PortfolioDetails13;
