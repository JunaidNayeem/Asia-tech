import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Products',
        title: 'Computer Components',
        link:'/product-details'
    },
    {
        image: 'image-2',
        category: 'Products',
        title: 'Mobile Parts and Accessories',
        link:'/product-details1'
    },
    {
        image: 'image-3',
        category: 'Products',
        title: 'Television Innovations',
        link:'/product-details2'
    },
    {
        image: 'image-4',
        category: 'Products',
        title: 'Audio Equipments',
        link:'/product-details3'
    },
    {
        image: 'image-3',
        category: 'Products',
        title: 'Networking Devices',
        link:'/product-details4'
    },
    {
        image: 'image-4',
        category: 'Products',
        title: 'Home Automation',
        link:'/product-details5'
    },
    {
        image: 'image-1',
        category: 'Products',
        title: 'Office Equipments',
        link:'/product-details6'
    },
    {
        image: 'image-2',
        category: 'Products',
        title: 'Health and Fitness Tech',
        link:'/product-details7'
    },
    {
        image: 'image-3',
        category: 'Products',
        title: 'Outdoor Tech',
        link:'/product-details8'
    },
    {
        image: 'image-4',
        category: 'Products',
        title: 'Home Entertainment Accessories',
        link:'/product-details9'
    },
    {
        image: 'image-3',
        category: 'Products',
        title: 'Smart Home Devices',
        link:'/product-details10'
    },
    {
        image: 'image-4',
        category: 'Products',
        title: 'Audio and Music Equipment',
        link:'/product-details11'
    },
    {
        image: 'image-1',
        category: 'Products',
        title: 'Smart Wearables',
        link:'/product-details12'
    },
    {
        image: 'image-2',
        category: 'Products',
        title: 'Gaming Accessories',
        link:'/product-details13'
    },
    {
        image: 'image-3',
        category: 'Products',
        title: 'Other Tech Marvels',
        link:'/product-details14'
    },
    {
        image: 'image-4',
        category: 'Products',
        title: 'Photography and Videography Gear',
        link:'/product-details15'
    },
    {
        image: 'image-3',
        category: 'Products',
        title: 'Virtual and Augmented Reality',
        link:'/product-details16'
    },
    {
        image: 'image-4',
        category: 'Products',
        title: 'Electronic Components',
        link:'/product-details17'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={value.link} >Product Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay" to="/portfolio-details"></Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;