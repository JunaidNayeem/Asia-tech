import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Retail Chain',
        description: 'Elevate your offerings with our diverse range of tech products.'
    },
    {
        icon: <FiLayers />,
        title: 'E-Commerce Platforms',
        description: 'Fuel your online sales with our exceptional inventory.'
    },
    {
        icon: <FiUsers />,
        title: 'Repair Centers',
        description: 'Access genuine parts to ensure impeccable repairs and maintenance.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Local Distributors',
        description: 'Partner with us for a consistent supply of top-tier tech merchandise.'
    },
    {
        icon: <FiUsers />,
        title: 'System Integrators',
        description: 'Leverage our components for seamless system integration.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Corporate Procurement',
        description: 'Streamline your procurement processes with our efficiency and reliability.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a >
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p  className={"text-justify"}>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
