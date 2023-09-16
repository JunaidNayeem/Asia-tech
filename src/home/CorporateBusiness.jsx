import React, { Component , Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Team from "../blocks/team/TeamTwo";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import { FiCast , FiLayers , FiUsers ,FiChevronUp , FiCheck } from "react-icons/fi";
import Testimonial from "../elements/Testimonial"
import Footer from "../component/footer/Footer";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/Brand";
import BrandTwo from "../elements/BrandTwo";
import { Background } from "react-parallax";
import { ProgressBar } from 'react-bootstrap';
import { videoTagString, VideoTag } from 'react-video-tag';
videoTagString({ src: '/assets/images/bg/bg-image-32.mp4', poster: '/assets/images/bg/bg-image-24.jpg' })

const SlideList = [
    {
        textPosition: 'text-right',
        bgImage: 'bg_image--32',
        category: '',
        title: 'Asia Tech & Trading',
        description: 'Your Premier Wholesale Partner for Technological Solutions.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    // {
    //     textPosition: 'text-left',
    //     bgImage: 'bg_image--31',
    //     category: '',
    //     title: 'Asia Tech',
    //     description: 'There are many variations of passages but the majority have suffered alteration.',
    //     buttonText: 'Contact Us',
    //     buttonLink: '/contact'
    // },
    
]

const ServiceListOne = [
    {
        icon: <FiCast />,
        title: 'Vast Product Range',
        description: 'We serve as a comprehensive destination for all your technological needs. From intricate computer components to mobile parts and television innovations, our extensive range has you covered.'
    },
    {
        icon: <FiLayers />,
        title: 'Unrivaled Brands',
        description: 'We have cultivated partnerships with a plethora of renowned brands, including industry giants such as: Intel, Nvidia, Logitech, Samsung, Huawei, Dell, Sony, AMD, Microsoft, LG, Sandisk,  Toshiba, ASUS.'
    },
    {
        icon: <FiUsers />,
        title: 'Wholesale Supremacy',
        description: 'With our penchant for large-scale bulk transactions, we provide an avenue for businesses to access the latest tech at the most competitive prices in the market.'
    },
]

const starndardService = [
    {
        image: '01',
        title: 'Thinking Development',
        description: 'I throw myself down among the tall grass by the stream',
    },
    {
        image: '02',
        title: 'Business Consulting',
        description: 'I throw myself down among the tall grass by the stream',
    },
    {
        image: '03',
        title: 'Business Development',
        description: 'I throw myself down among the tall grass by the stream',
    },

]

class CorporateBusiness extends Component{
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

        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
            'The Ultimate Deal On business',
        ];
        var namesItemTwo = [
            'Proof That business Really Works',
            'Here Is What You Should Do For Your business',
            'The Hidden Mystery Behind business',
        ];
        
        const PostList = BlogContent.slice(0 , 3);

        return(
            <Fragment> 
                <Helmet pageTitle="Asia Tech" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation color-white">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center`} data-black-overlay="6" key={index}>
                                    <div className="video-background">
                                <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`}  src={`${"/assets/images/bg/bg-image-32.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                            </div>
                                    <div className="container">
                                        
                                        <div className="row">
                                            <div className="col-lg-12">
                                                
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className=" text-light">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                                
                                            </div>
                                            
                                            {/* <div className="col-lg-4">
                                                
                                                 <div className="video-inner">
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div> */}
                                    
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
                
                {/* Start Service Area */}
                <div className="service-area ptb--30 bg_color--1 justify-content">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p className="text-justify">{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}


                {/* Start Featured Service Area  */}
                {/* <div className="rn-featured-service-area pt--90 pb--120 bg_color--5">
                    <div className="container">
                        <div className="row"> */}

                            {/* Start Single Service  */}
                            {/* <div className="col-lg-3 col-md-6 col-12 mt--30">
                                <div className="section-title">
                                    <h2 className="title">Services</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                                    <div className="service-btn">
                                        <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                                    </div>
                                </div>
                            </div> */}
                            {/* End Single Service  */}

                            {/* Start Single Service  */}
                            {/* <div className="col-lg-9">
                                <div className="row">
                                    {starndardService.map((value , index) => (
                                        <div className="col-lg-4 col-md-4 mt--30" key={index}>
                                            <div className="standard-service">
                                                <div className="thumbnai">
                                                    <img src={`/assets/images/featured/corporate-${value.image}.jpg`} alt="Corporate Images"/>
                                                </div>
                                                <div className="content">
                                                    <h3><a href="/service-details">{value.title}</a></h3>
                                                    <p>{value.description}</p>
                                                    <a className="btn-transparent rn-btn-dark" href="/service-details"><span className="text">Read More</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div> */}
                            {/* End Single Service  */}

                        {/* </div>
                    </div>                
                </div> */}
                {/* End Featured Service Area  */}

                {/* Start Counterup Area */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--3  theme-text-white" data-black-overlay="7">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12 m-5">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500 text-light">Quick Overview</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-51.jpg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-inner inner">
                                    <div className="section-title text-justify">
                                        <h3 className="title">A Decade of Excellence</h3>
                                        <p className="description">The team behind Asia Tech & Trading Limited takes immense pride in its 10+ years of industry experience. Our journey over this past decade has been marked by consistent success, unwavering expertise, and a resolute commitment to providing unparalleled wholesale technological solutions. Having navigated and thrived in the ever-evolving tech landscape, we stand as a beacon of stability and innovation in the market. Our track record speaks volumes about our resilience, adaptability, and dedication to serving our clients with the utmost excellence.</p>
                                    </div>
                                    {/* <div className="accordion-wrapper mt--30">
                                        <Accordion01 />
                                    </div> */}
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="/about">See More About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row row--35">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">New Products</h2>
                                    {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-3 col-md-6 col-sm-6 col-12 mt--30" teamStyle="" item="4" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                <div className="rn-about-area ptb--120 bg_color--1">
                {/* <div className="rn-about-wrapper"> */}
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title counterup_style--1">
                                        <h2 className="title text-justify">What do we do?</h2>
                                        <p className="description text-justify">Asia Tech & Trading Limited is a leader in the technology wholesale industry. During our time, the company has maintained a consistent track record of success, demonstrating its expertise and commitment to providing unparalleled technological products and solutions. The company's dedication to excellence has earned it a reputation as a trusted partner for businesses worldwide.</p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Our Working Process.</h3>
                                                <div className="rn-progress-bar progress-bar--3">
                                                    <div className="single-progress custom-color--1">
                                                        <h6 className="title">Consumer Electronics</h6>
                                                        <ProgressBar now={81} />
                                                        <span className="label">81%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--2">
                                                        <h6 className="title">IT Products & Services</h6>
                                                        <ProgressBar now={72} />
                                                        <span className="label">72%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--3">
                                                        <h6 className="title">Software Solutions</h6>
                                                        <ProgressBar now={89} />
                                                        <span className="label">89%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--4">
                                                        <h6 className="title">Wholesale & Exports</h6>
                                                        <ProgressBar now={57} />
                                                        <span className="label">57%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 mt_md--40 mt_sm--40">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="about-inner inner">
                                    <div className="counterup_style--1 section-title">
                                        <h2 className="title text-justify">About</h2>
                                        <p className="description text-justify">Welcome to Asia Tech & Trading Limited - Your Premier Wholesale Partner for Technological Solutions.At Asia Tech, located in the vibrant hub of Hong Kong, we take immense pride in being a dominant force in the world of wholesale distribution and trade. We stand as a stalwart figure in the industry, specializing in an extensive array of computer products, components, and cutting-edge tech marvels. With an unwavering focus on superior quality and unbeatable prices, we have firmly established ourselves as a prominent player in the global wholesale arena.</p>
                                    </div>
                                    {/* <div className="mt--30">
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="mt--30">
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <ul className="list-style--1">
                                            {namesItemTwo.map((name, index) => {
                                                return <li key={ index }><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-3.png" alt="About Images"/>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cUN3NOR-iPA' onClose={() => this.setState({isOpen: false})} />
                                    
                                    <button className="video-popup position-top-center theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Brand Area  */}
                <div className="rn-brand-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                 {/* Start Pricing Tbale Area  */}
                 {/* <div className="rn-pricing-table-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                    <h2 className="title">Pricing Plan</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row"> */}
                            {/* Start PRicing Table Area  */}
                            {/* <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Free</h4>
                                            <div className="pricing">
                                                <span className="price">29</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            {/* <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing active">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Business</h4>
                                            <div className="pricing">
                                                <span className="price">29</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            {/* <div className="col-lg-4 col-md-6 col-12 mt--30">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Advanced</h4>
                                            <div className="pricing">
                                                <span className="price">29</span>
                                                <span className="subtitle">USD Per Month</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> 5 PPC Campaigns</li>
                                                <li><FiCheck /> Digital Marketing</li>
                                                <li><FiCheck /> Marketing Agency</li>
                                                <li><FiCheck /> Seo Friendly</li>
                                                <li><FiCheck /> UI/UX designs</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href="#pricing">Purchase Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                        {/* </div>
                    </div>
                </div> */} 
                {/* End Pricing Tbale Area  */}

                {/* Start Blog Area */}
                {/* <div className="rn-blog-area pt--120 pb--80 bg_color--1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center">
                                    <h2 className="title">Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div> */}
                {/* End Blog Area */}

                {/* Start call To Action  */}
                {/* <CallAction /> */}
                {/* End call To Action  */}

                {/* Start Footer Style  */}
                <Footer/>
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default CorporateBusiness;