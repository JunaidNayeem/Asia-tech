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

class PortfolioDetails17 extends Component{
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
                                    <h2 className="title theme-gradient">Electronic Components</h2>
                                    <p>An electronic component is any basic discrete electronic device or physical entity part of an electronic system used to affect electrons or their associated fields.</p>
                                    
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
                                    <h2 className="title">Electronic Components</h2>
                                    <p className="text-justify">An electronic component is any basic discrete electronic device or physical entity part of an electronic system used to affect electrons or their associated fields.</p>
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
                                                
                                            <li><FiCheck /> Resistors</li>
                                            <li><FiCheck />Capacitors</li>
                                            <li><FiCheck />Inductors</li>
                                            <li><FiCheck />Diodes</li>
                                            <li><FiCheck />Transistors</li>
                                            <li>vIntegrated Circuits (ICs)</li>
                                            <li><FiCheck />Microcontrollers</li>
                                            <li><FiCheck />Microprocessors</li>
                                            <li><FiCheck />Voltage Regulators</li>
                                            <li><FiCheck />Oscillators</li>
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
                                            
                                            <li><FiCheck />Transformers</li>
                                            <li><FiCheck />Relays</li>
                                            <li><FiCheck />Potentiometers</li>
                                            <li><FiCheck />Optoelectronic Components (LEDs, Photodiodes, etc.)</li>
                                            <li><FiCheck />Thermistors</li>
                                            <li><FiCheck />Varistors</li>
                                            <li><FiCheck />Crystal Oscillators</li>
                                            <li><FiCheck />Switches (Push Button, Toggle, Rotary, etc.)</li>
                                            <li><FiCheck />Connectors (Header Pins, Sockets, etc.)</li>
                                            <li><FiCheck />Fuses</li>
                                            
                                            
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
                                            <li><FiCheck />Printed Circuit Boards (PCBs)</li>
                                            <li><FiCheck />Soldering Components (Solder, Flux, etc.)</li>
                                            <li><FiCheck />Voltage Dividers</li>
                                            <li><FiCheck />Current Sensors</li>
                                            <li><FiCheck />Hall Effect Sensors</li>
                                            <li><FiCheck />Schottky Barrier Diodes</li>
                                            <li><FiCheck />Voltage Multipliers</li>
                                            <li><FiCheck />Gas Discharge Tubes</li>
                                            <li><FiCheck />Piezoelectric Transducers</li>
                                            <li><FiCheck />Voltage References</li>
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
export default PortfolioDetails17;
