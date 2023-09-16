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
                countTitle: 'Explore Asia Tech extensive catalog featuring over 800 high-quality products.',
            },
            {
                countNum : 350,
                countName:'Clients',
                countTitle: 'Join our ever-growing family of satisfied clients with over 350+ trusted partners worldwide.',
            },
            {
                countNum : 100,
                countName:'Brands',
                countTitle: 'Asia Tech proudly collaborates with a diverse array of over 200 renowned brands. From industry giants to niche innovators.',
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