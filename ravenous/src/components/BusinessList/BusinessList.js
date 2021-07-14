<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> df8376e90d63e21778e24dcf570c3f62c87aad0c
import "./BusinessList.css";
import Business from "../Business/Business";


class BusinessList extends React.Component{
    render(){
        return(
            <div className="BusinessList">

                <Business /> 

                <Business /> 

                <Business /> 

                <Business /> 

                <Business /> 

                <Business /> 
            </div>
        )
    }
};

export default BusinessList;