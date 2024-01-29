import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';

class App extends Component {

    componentDidMount() {
        
    }

    componentDidUpdate() {
        
    }

    renderAnalytics() {
        
              
    }

    render() {        
        
        
        return (
            <>
                <BrowserRouter>                    
                    {/* <!-- Google Tag Manager (noscript) --> */}   
                    {/* <!-- End Google Tag Manager (noscript) --> */}
                                   
                    <div className="min-vh-100 container-fluid" style={{ backgroundColor: "#ffffff", color:"rgba(0,0,0,0.8)", paddingBottom:"20px"}}>

                            <Route exact path="/" component={Home} />
                            
                    </div>
                    
                </BrowserRouter>
            </>
        );
    }
};



export default App;
