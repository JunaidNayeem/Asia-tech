import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import { FiCast , FiLayers , FiUsers , FiCheck } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { NavLink } from "react-router-dom";

const ServiceListOne = [
    {
        icon: <FiCast />,
        title: 'Vast Product Range',
        description: 'We serve as a comprehensive destination for all your technological needs. From intricate computer components to mobile parts and television innovations, our extensive range has you covered.'
    },
    {
        icon: <FiLayers />,
        title: 'Unrivaled Brands',
        description: 'We have cultivated partnerships with a plethora of renowned brands, including industry giants such as: Intel, Nvidia, Logitech, Samsung, Huawei, Lenovo, Dell, Sony, AMD, Microsoft, LG, Sandisk,  Toshiba, Kingston,  ASUS, Xiaomi, HP and numerous others.'
    },
    {
        icon: <FiUsers />,
        title: 'Wholesale Supremacy',
        description: 'With our penchant for large-scale bulk transactions, we provide an avenue for businesses to access the latest tech at the most competitive prices in the market.'
    },
]

class About extends Component{
    render(){
        let title = 'About',
        description = 'Welcome to Asia Tech & Trading Limited - Your Premier Wholesale Partner for Technological Solutions.At Asia Tech, located in the vibrant hub of Hong Kong, we take immense pride in being a dominant force in the world of wholesale distribution and trade. We stand as a stalwart figure in the industry, specializing in an extensive array of computer products, components, and cutting-edge tech marvels. With an unwavering focus on superior quality and unbeatable prices, we have firmly established ourselves as a prominent player in the global wholesale arena.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="ATT-Logo-_JPEG_.svg" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 text-justify">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Our Core Mission</h3>
                                                    <p>Our core mission at Asia Tech is to redefine the wholesale experience by offering an unparalleled range of technology solutions, bolstered by our unwavering commitment to top - notch service, remarkable quality, and affordability
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">What Sets Us Apart:</h3>
                                                    <p> Vast Product Range 
                                                        <hr />
                                                    Unrivaled Brands 
                                                    <hr />
                                                    Wholesale Supremacy</p>
                                                </div>
                                            </div> */}
                                        </div> 
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}
                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 bg_color--1">
                 <div className="counterup-area pb--80 pt--40 bg_image bg_image--24  theme-text-white" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 m-5">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500 text-light">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                        </div>
                        
                    </div>
                </div>
                {/* End CounterUp Area */}
                <div className="service-area ptb--30 bg_color--1">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-justify" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content text-justify">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr /><hr /><hr /><hr />
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-5 ">
                                        <div className="about-inner inner">
                                        <div className="section-title">
                                            <h3 className="title">
                                                What Sets Us Apart</h3>
                                                <hr />
                                            <ol>
                                                <h5><li>Vast Product Range</li></h5>
                                                
                                                <p>We serve as a comprehensive destination for all your technological needs.
                                                From intricate computer components to mobile par
                                                ts and television
                                                innovations, our extensive range has you covered</p>

                                                <h5><li>Unrivaled Brand</li></h5>
                                                
                                                <p>We have cultivated partnerships with a plethora of renowned brands,
                                                including industry giants such as: Intel, Nvidia, Logitech, Samsung,
                                                Huawei, Lenovo, Dell, Sony, A
                                                MD, Microsoft, LG, Sandisk, Toshiba,
                                                Kingston, ASUS, Xiaomi, HP and numerous others</p>

                                                <h5><li>Wholesale Supremacy</li></h5>
                                                
                                                <p>With our penchant for large
                                                    -
                                                    scale bulk transactions, we provide an
                                                    avenue for businesses to access the latest tech at the most competitive
                                                    prices in the market.</p>
                                            </ol>
                                        </div>
                                        
                                    </div>
                        </div> */}
                         <div className="col-md-6 col-lg-6 text-justify">
                            <div className="about-inner inner">
                            <div className="section-title ">
                            <h3>

                                Why Choose Asia Tech
                            </h3>
                            <hr />
                            <ul>
                                <p><li><b>Unbeatable Wholesale Prices:</b> Our strong relationships with
                                manufacturers and brands allow us to offer you the most competitive
                                prices in the market. When you partner with
                                us, you're guaranteed cost
                                -
                                effective solutions</li></p>
                                <p><li><b>Global Reach:</b> Our influence extends beyond Hong Kong, catering to
                                international clients with the same level of dedication</li></p>
                                <p><li><b>Best Customer Support:</b> Our devoted support team is here to assist you
                                at every
                                step of the way</li></p>
                                <p><li><b>Reliability and Trust:</b> With our extensive industry experience, we have
                                built a reputation for reliability and quality that you can depend on.</li></p>
                                <p><li><b>Pioneering Excellence:</b> As a trailblazer in wholesale tech distribution,
                                we're committed to
                                advancing the industry through innovation and
                                exceptional service</li></p>
                            </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="col-lg-12">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-6.jpg"  height={'550px'} alt="About Images"/>
                                    </div>
                                </div>
                        </div>

                                       
                                        
                    </div>
                </div><hr /><hr /><hr /><hr />

                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-12 m-3">
                            <h2>

Why Choose Asia Tech
                            </h2>
                            <ul>
                                <p><li><b>Unbeatable Wholesale Prices:</b> Our strong relationships with
                                manufacturers and brands allow us to offer you the most competitive
                                prices in the market. When you partner with
                                us, you're guaranteed cost
                                -
                                effective solutions</li></p>
                                <p><li><b>Global Reach:</b> Our influence extends beyond Hong Kong, catering to
                                international clients with the same level of dedication</li></p>
                                <p><li><b>Best Customer Support:</b> Our devoted support team is here to assist you
                                at every
                                step of the way</li></p>
                                <p><li><b>Reliability and Trust:</b> With our extensive industry experience, we have
                                built a reputation for reliability and quality that you can depend on.</li></p>
                                <p><li><b>Pioneering Excellence:</b> As a trailblazer in wholesale tech distribution,
                                we're committed to
                                advancing the industry through innovation and
                                exceptional service</li></p>
                            </ul>
                        </div>
                    </div>
                </div> */}

                

                {/* Start Finding Us Area  */}
                <div className=" rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Find Your Product Now</h4>
                                <p>Explore Asia Tech's extensive catalog featuring over 1000 high-quality products, including computer components, mobile parts, television innovations, and much more. We continuously expand our offerings to meet your evolving technological needs.</p>
                                <a className="rn-btn btn-white" href="/about">Get Started</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/finding-us-01.png"  alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div><hr /><hr /><hr />
                {/* End Finding Us Area  */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-4.jpg"  height={'550px'} alt="About Images"/>
                                    </div>
                                
                        </div>
                        
                        <div className="col-lg-6 text-justify ">
                                            <div className="about-inner inner">
                                                <div className="section-title ">
                                                    <h3 >
                                                    Industries We Cater To</h3>
                                                    <hr />
                                                    <ul>
                                                    <p><li><b>Retail Chain:</b> Elevate your offerings with our diverse range of tech
                                                        products.</li></p>
                                                        <p><li><b>E
                                                                    -
                                                                    Commerce Platforms:</b> Fuel your online sales with our exceptional
                                                        inventory.</li></p>
                                                        <p><li><b>Repair Centers:</b> Access genuine parts to en
                                                        sure impeccable repairs and
                                                        maintenance.</li></p>
                                                        <p><li><b>Local Distributors:</b> Partner with us for a consistent supply of top
                                                            -
                                                            tier tech
                                                            merchandise.</li></p>
                                                        <p><li><b>System Integrators:</b> Leverage our components for seamless system
                                                            integration.</li></p>
                                                        <p><li><b>Corporate Procurement:</b> Streamline your
                                                            procurement processes with
                                                            our efficiency and reliability.</li></p>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                     
                    </div>
                </div>
                

                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25 text-justify">
                                    <h2 className="title">New Products</h2>
                                    <p className="text-justify">Explore Asia Tech's extensive catalog featuring over 1000 high-quality products, including computer components, mobile parts, television innovations, and much more. We continuously expand our offerings to meet your evolving technological needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                <NavLink to={'/product'}>
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images"/>
                                    </div></NavLink>
                                    {/* <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                <NavLink to={'/product'}>
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images"/>
                                    </div></NavLink>
                                    {/* <div className="content">
                                        <h4 className="title">BM. Alamin</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                <NavLink to={'/product'}>
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div></NavLink>
                                    {/* <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                            {/* End Single Team  */}

                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

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
export default About