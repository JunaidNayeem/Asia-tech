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

class PortfolioDetails11 extends Component{
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
                                    <h2 className="title theme-gradient">Audio and Music Equipment</h2>
                                    <p>Audio equipment refers to devices that reproduce, record or process sound.</p>
                                    
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
                                    <h2 className="title">Audio and Music Equipment</h2>
                                    <p className="text-justify">Audio equipment refers to devices that reproduce, record or process sound.</p>
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
                                                
                                            <li><FiCheck /> Wireless Earbuds</li>
                                            <li><FiCheck />Noise-Cancelling Headphones</li>
                                            <li><FiCheck />Bluetooth Speaker</li>
                                            <li><FiCheck />Multi-Room Speaker System</li>
                                            <li><FiCheck />Hybrid Tube/Solid State Amplifier</li>
                                            <li><FiCheck />High-Resolution Audio Streaming Service Subscription</li>
                                            <li><FiCheck />Virtual Studio Room Acoustic Software</li>
                                            <li><FiCheck />MIDI Guitar Controller</li>
                                            <li><FiCheck />Portable Vinyl Record Player</li>
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
                                            
                                            <li><FiCheck />Soundbar</li>
                                            <li><FiCheck />Record Player</li>
                                            <li><FiCheck />Digital Audio Workstation (DAW) Software</li>
                                            <li><FiCheck />MIDI Controller</li>
                                            <li><FiCheck />Studio Monitor Speakers</li>
                                            <li><FiCheck />Microphone Stand</li>
                                            <li><FiCheck />Guitar Effects Pedal</li>
                                            <li><FiCheck />Studio Acoustic Treatment Panels</li>
                                            <li><FiCheck />Portable PA System</li>
                                            <li><FiCheck />Karaoke Machine</li>
                                            <li><FiCheck />Digital Mixer</li>
                                            
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
                                            <li><FiCheck />DJ Controller</li>
                                            <li><FiCheck />Headphone Amplifier</li>
                                            <li><FiCheck />In-Ear Monitors</li>
                                            <li><FiCheck />Subwoofer</li>
                                            <li><FiCheck />Portable Music Production Controller</li>
                                            <li><FiCheck />Condenser Microphone</li>
                                            <li><FiCheck />Turntable Cartridge</li>
                                            <li><FiCheck />Mixing Console</li>
                                            <li><FiCheck />Live Sound Mixer</li>
                                            <li><FiCheck />Guitar Amp Modelling Processor</li>
                                           
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
export default PortfolioDetails11;
