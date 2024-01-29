import React from 'react';

import Section1_mobile from "./Section1_mobile.js";

import Section1_desktop from "./Section1_desktop.js";
import StaticAPI_desktop from "./StaticAPI_desktop.js";
import SQLAPI_desktop from "./SQLAPI_desktop.js";
import VariableAPI_desktop from "./VariableAPI_desktop.js";

const Home = () => {

    return ( 
        <>
            {/*MOBILE*/}
            <div className="d-block d-lg-none">                
                <Section1_mobile />                
            </div>

            {/*DESKTOP*/}
            <div className="d-lg-block d-none">                
                <Section1_desktop />
                <StaticAPI_desktop />
                <SQLAPI_desktop />
                <VariableAPI_desktop />
            </div>
            
            
        </>
    );
};

export default Home;
