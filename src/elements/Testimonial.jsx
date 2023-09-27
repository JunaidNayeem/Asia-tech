import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>As a Hong Kong-based tech solutions provider, we trust Asia Tech & Trading for our sourcing needs. Their competitive prices and extensive inventory make them an invaluable partner.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Raymond </span> - Director of TechSolutions HK.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Asia Tech's products have boosted our retail offerings. Their partnership has been instrumental in our success as an electronics retailer in Hong Kong.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Jerrick </span>- Retail Manager at HK Electronicx Hub.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>We collaborate with Asia Tech for our IT procurement. Their exceptional customer support and cost-effective solutions have streamlined our operations.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Alex </span> - IT Director at NewTech Enterprises, USA.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Asia Tech & Trading's reach and competitive pricing have made them a preferred partner for our technology needs. Their reliability is unmatched.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Li Wei </span> - CEO of Shanghai InnovateTech, China.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Asia Tech is my go-to wholesale supplier. Their commitment to quality and affordability helps my business thrive in the competitive tech market.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Sarah </span>  - Owner of TechTreasures, USA.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>BB Gizmo Store's growth is indebted to Asia Tech & Trading. Their international reach ensures we always have access to the latest tech.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Neha </span> - Founder of BB Gizmo Store, India.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>SingaporeTech Solutions relies on Asia Tech & Trading for sourcing cutting-edge tech products. Their service excellence transcends borders."</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Lee K. </span>- Managing Director at DMG Solutions, Singapore</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Our company's tech innovation relies on Asia Tech's sourcing. Their top-tier products and dedication to advancement are commendable.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Johann </span> - CTO at Technova GmbH, Germany</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>For our corporate IT needs, we trust Asia Tech's reliability. Their competitive pricing makes them an indispensable partner for us.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Rajesh </span>  - Purchase Manager at LeadCorp India</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Raymond.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Jerrick.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Alex.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/LI Wei.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Sarah.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Neha.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            
                                            <img src="/assets/images/client/Lee.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Johann.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/Rajesh.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;