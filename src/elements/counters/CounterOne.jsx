import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';




class CounterOne extends Component{
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        let Data = [
            {
                countNum : 800 ,
                countName:'Products',
                countTitle: 'Explore Asia Tech extensive catalog featuring over 1000 high-quality products, including computer components, mobile parts, television innovations, and much more. We continuously expand our offerings to meet your evolving technological needs.',
            },
            {
                countNum : 350,
                countName:'Clients',
                countTitle: 'Join our ever-growing family of satisfied clients. With over 500 trusted partners worldwide, Asia Tech has established itself as a reliable choice for businesses seeking top-tier technology solutions. Our commitment to client satisfaction is unwavering.',
            },
            {
                countNum : 100,
                countName:'Brands',
                countTitle: 'Asia Tech & Trading Limited proudly collaborates with a diverse array of over 100 renowned brands. From industry giants to niche innovators, our extensive brand portfolio ensures that you have access to a wide range of cutting-edge technology solutions. Whether you are seeking products from household names or exploring emerging tech pioneers, we have got you covered.',
            },
        ];

        return(
            <Fragment>
                <div className="row">
                    {Data.map( (value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter text-danger">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0}/>
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countName}</p>
                            <p className="description text-justify">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;