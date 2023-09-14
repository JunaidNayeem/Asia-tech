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

class PortfolioDetails14 extends Component{
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
                                    <h2 className="title theme-gradient">Other Tech Marvels</h2>
                                    <p>a person or thing that is very surprising or admirable: This gadget is a technological marvel.</p>
                                    
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
                                    <h2 className="title">Other Tech Marvels</h2>
                                    <p className="text-justify">a person or thing that is very surprising or admirable: This gadget is a technological marvel.</p>
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
                                                
                                            <li><FiCheck /> Wireless Mouse</li>
                                            <li><FiCheck />Bluetooth Keyboard</li>
                                            <li><FiCheck />Webcam</li>
                                            <li><FiCheck />Portable Power Bank</li>
                                            <li><FiCheck />Wireless Earbuds</li>
                                            <li><FiCheck />Virtual Reality Headset</li>
                                            <li><FiCheck />3D Printer</li>
                                            <li><FiCheck />Foldable Smartphone/Tablet</li>
                                            <li><FiCheck />Augmented Reality Glasses</li>
                                            <li><FiCheck />Selfie Drone</li>
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
                                            
                                            <li><FiCheck />Portable Solar Charger Backpack</li>
                                            <li><FiCheck />Wireless Charging Furniture</li>
                                            <li><FiCheck />Drone</li>
                                            <li><FiCheck />Fitness Tracker</li>
                                            <li><FiCheck />Smart Home Hub</li>
                                            <li><FiCheck />Portable Projector</li>
                                            <li><FiCheck />Wireless Charging Pad</li>
                                            <li><FiCheck />Gaming Console</li>
                                            <li><FiCheck />Wi-Fi Range Extender</li>
                                            <li><FiCheck />Smart Doorbell</li>
                                            
                                            
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
                                            <li><FiCheck />Smart Thermostat</li>
                                            <li><FiCheck />Smart Light Bulb</li>
                                            <li><FiCheck />Robot Vacuum Cleaner</li>
                                            <li><FiCheck />E-Reader</li>
                                            <li><FiCheck />Electric Scooter</li>
                                            <li><FiCheck />Action Camera</li>
                                            <li><FiCheck />Portable Bluetooth Speaker</li>
                                            <li><FiCheck />Smartwatch</li>
                                            <li><FiCheck />Car Dash Cam</li>
                                            <li><FiCheck />Solar Power Charger</li>
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
export default PortfolioDetails14;
