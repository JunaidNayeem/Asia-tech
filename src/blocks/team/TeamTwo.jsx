import React from 'react'
import data from "./data";
import { NavLink } from 'react-router-dom';
const TeamTwo = (props) => {
    const itemSlice = data.slice(0 , props.item)
    return (
        <div className="row">
            {itemSlice.map((value , i ) => (
                <div className={`${props.column}`} key={i}>
                    <div className={`team-static ${props.teamStyle}`}>
                        <div className="thumbnail">
                            <NavLink to={'/product'}><img src={`/assets/images/team/team-${value.images}.jpg`} width={"100%"} height={"250px"} alt="Product Images"/></NavLink>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TeamTwo
