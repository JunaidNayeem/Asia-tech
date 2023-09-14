// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import CorporateBusiness from './home/CorporateBusiness';

// Element Layout

import About from "./elements/About";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";


// Blocks Layout
import Portfolio from "./blocks/Portfolio";
import PortfolioDetails from './elements/PortfolioDetails';
import PortfolioDetails1 from './elements/PortfolioDetails1';
import PortfolioDetails2 from './elements/PortfolioDetails2';
import PortfolioDetails3 from './elements/PortfolioDetails3';
import PortfolioDetails4 from './elements/PortfolioDetails4';
import PortfolioDetails5 from './elements/PortfolioDetails5';
import PortfolioDetails6 from './elements/PortfolioDetails6';
import PortfolioDetails7 from './elements/PortfolioDetails7';
import PortfolioDetails8 from './elements/PortfolioDetails8';
import PortfolioDetails9 from './elements/PortfolioDetails9';
import PortfolioDetails10 from './elements/PortfolioDetails10';
import PortfolioDetails11 from './elements/PortfolioDetails11';
import PortfolioDetails12 from './elements/PortfolioDetails12';
import PortfolioDetails13 from './elements/PortfolioDetails13';
import PortfolioDetails14 from './elements/PortfolioDetails14';
import PortfolioDetails15 from './elements/PortfolioDetails15';
import PortfolioDetails16 from './elements/PortfolioDetails16';
import PortfolioDetails17 from './elements/PortfolioDetails17';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        
                        
                         <Route exact path={`${process.env.PUBLIC_URL}/`} component={CorporateBusiness}/>
                        
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product`} component={Portfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details`} component={PortfolioDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details1`} component={PortfolioDetails1}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details2`} component={PortfolioDetails2}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details3`} component={PortfolioDetails3}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details4`} component={PortfolioDetails4}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details5`} component={PortfolioDetails5}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details6`} component={PortfolioDetails6}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details7`} component={PortfolioDetails7}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details8`} component={PortfolioDetails8}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details9`} component={PortfolioDetails9}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details10`} component={PortfolioDetails10}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details11`} component={PortfolioDetails11}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details12`} component={PortfolioDetails12}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details13`} component={PortfolioDetails13}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details14`} component={PortfolioDetails14}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details15`} component={PortfolioDetails15}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details16`} component={PortfolioDetails16}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/product-details17`} component={PortfolioDetails17}/>
                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();