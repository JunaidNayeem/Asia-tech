import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiCast , FiLayers , FiUsers , FiCheck } from "react-icons/fi";
import BrandTwo from "../elements/BrandTwo";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioDetails extends Component{
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

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Computer Components</h2>
                                    <p>The components that make up a computer are called computer components.</p>
                                    
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
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Asia Tech</h2>
                                    <p>The five basic components of a computer are Input Unit, Output Unit, Memory Unit, Control Unit and Arithmetic and Logical Unit.</p>
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
                                                
                                            <li><FiCheck />Hard Disk Drive</li>
                                            <li><FiCheck />Solid State Drive</li>
                                            <li><FiCheck />Graphics Card</li>
                                            <li><FiCheck />Motherboard</li>
                                            <li><FiCheck />Central Processing Unit (CPU)</li>
                                            <li><FiCheck />Random Access Memory (RAM)</li>
                                            <li><FiCheck />Power Supply Unit (PSU)</li>
                                            <li><FiCheck />Cooling Fan</li>
                                            <li><FiCheck />Optical Drive</li>
                                            <li><FiCheck />Network Interface Card (NIC)</li>
                                            <li><FiCheck />Sound Card</li>
                                            <li><FiCheck />Expansion Card</li>
                                            <li><FiCheck />Heat Sink</li>
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
                                            
                                            <li><FiCheck />Processor Cooler</li>
                                            <li><FiCheck />Case Fan</li>
                                            <li><FiCheck />Network Switch</li>
                                            <li><FiCheck />Wireless Network Card (Wi-Fi Card)</li>
                                            <li><FiCheck />CPU Cooler</li>
                                            <li><FiCheck />M.2 SSD</li>
                                            <li><FiCheck />VRM (Voltage Regulator Module)</li>
                                            <li><FiCheck />RAID Controller Card</li>
                                            <li><FiCheck />Cable Management Accessories</li>
                                            <li><FiCheck />BIOS/UEFI Chip</li>
                                            <li><FiCheck />PC Case</li>
                                            <li><FiCheck />Liquid Cooling System</li>
                                            
                                            
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
                                            <li><FiCheck />Ethernet Cable</li>
                                            <li><FiCheck />SATA Cable</li>
                                            <li><FiCheck />USB Hub</li>
                                            <li><FiCheck />Internal Card Reader</li>
                                            <li><FiCheck />Thermal Paste</li>
                                            <li><FiCheck />Power Cable</li>
                                            <li><FiCheck />DisplayPort Cable</li>
                                            <li><FiCheck />Processor Cooling Fan</li>
                                            <li><FiCheck />Graphics Card Cooling System</li>
                                            <li><FiCheck />RGB Lighting Kit</li>
                                            <li><FiCheck />PCIe Extension Cable</li>
                                            <li><FiCheck />Thunderbolt Expansion Card</li>
                                            <li><FiCheck />DVI Cable</li>
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
                             {/* End PRicing Table Area  */}

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
export default PortfolioDetails;
