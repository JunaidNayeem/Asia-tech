import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    <li>
                       <a href="https://www.apple.com/"><img src="/assets/images/brand/brand-01.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://www.ibm.com/"><img src="/assets/images/brand/brand-02.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://www.dell.com/"><img src="/assets/images/brand/brand-03.png" alt="Logo Images"/></a>
                        
                    </li>
                    <li>
                        <a href="https://www.sony.co.in/"><img src="/assets/images/brand/brand-04.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://www.asus.com/"><img src="/assets/images/brand/brand-05.png" alt="Logo Images"/></a>
                    </li>
                    <li>
                        <a href="https://www.samsung.com/"><img src="/assets/images/brand/brand-06.png" alt="Logo Images"/></a>
                    </li>
                    
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;