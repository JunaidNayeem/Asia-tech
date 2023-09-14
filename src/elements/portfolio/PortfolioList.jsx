import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
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

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.link} >View Details</a>
                                    </div>
                                </div>
                            </div>
                            {/* <Link className="link-overlay" to="/product-details"></Link> */}
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;