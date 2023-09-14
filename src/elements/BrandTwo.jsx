import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="brand-style-2">
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
                    <li>
                        <a href="https://www.microsoft.com/"><img src="/assets/images/brand/brand-07.png" alt="Logo Images"/></a>
                        
                    </li>
                    {/* <li>
                        <img src="/assets/images/brand/brand-08.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/brand-09.png" alt="Logo Images"/>
                    </li> */}
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;