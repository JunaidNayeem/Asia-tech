import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-center mb--50 ">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description text-justify text-center">Unlocking Tomorrow's Tech Today <hr />
                                Join Hands with Asia Tech & Trading
                                Limited!</p>
                            </div>
                            <div className="form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 order-1 order-lg-2 p-5 pl-5 mt-5">
                            <div className="thumbnail mb_md--30 mb_sm--30 ">
                                <img src="/assets/images/about/about-50.jpg"alt="asistech" height={"53%"} width={"600px"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;