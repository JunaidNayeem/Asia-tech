import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class HeaderFive extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        const { logo, color , headerPosition } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/ATT Logo.png" width={145} alt="AsiaTech" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/ATT Logo.png" width={145} alt="AsiaTech" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/ATT Star Icon.png" width={145} alt="AsiaTech" />;
        }else if(logo === 'all-dark'){
            logoUrl = <img src="/assets/images/logo/ATT-Logo-_JPEG1.svg" width={145} alt="AsiaTech" />;
        } else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/ATT Star Icon.png" width={145} alt="AsiaTech" />;
        }else{
            logoUrl = <img src="/assets/images/logo/ATT Logo.png" width={145} alt="AsiaTech" />;
        }
        
        return(
            <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="header-left">
                                    <div className="logo">
                                        <a href="/">
                                            {logoUrl}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-6">
                                <div className="header-right justify-content-end">
                                    <nav className="mainmenunav d-lg-block">
                                        <ul className="mainmenu">
                                            <li className="has-droupdown"><Link to="/">Home</Link>
                                              
                                            </li>
                                            
                                            <li><Link to="/about" >About</Link></li>

                                            <li className="has-droupdown"><Link to="/product" >Products</Link>
                                            </li>
                                            
                                            <li><Link to="/contact" >Contact</Link></li>
                                        </ul>
                                    </nav>
                                    {/* <div className="header-btn">
                                        <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                            <span>buy now</span>
                                        </a>
                                    </div> */}
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderFive;