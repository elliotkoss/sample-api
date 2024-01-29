import React from "react";

import { useState, useEffect } from 'react';
import axios from 'axios';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StaticAPI_desktop = () => {

    const url = '/api/get/static-user';

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url, {
                validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                }
            });
            setData(response.data[0]);
        }
        fetchData();
    }, [])
    
    return (
        <>
            <Row style={{ paddingTop: "20px", overflow:"hidden" }}>
                <Col md={1}></Col>
                <Col sm={12} md={11} >       
                        
                    <Row style={{ paddingTop: "20px", fontSize:"1.5em", lineHeight: "1em" }}>
                        <Col>Static API</Col>
                    </Row>
                    <Row>                        
                        <Row style={{ paddingTop: "20px", fontSize:"1em" }}>
                            <Col>This is an API where the data is hardcoded.</Col>
                        </Row>   
                        <Row style={{ paddingTop: "20px", fontSize:"1em" }}>
                            <Col sm={6}>Endpoint</Col>
                            <Col sm={6}>{url}</Col>
                        </Row>   
                        <Row style={{ fontSize:"1em" }}>
                            <Col sm={6}>ID</Col>
                            <Col sm={6}>{data.id}</Col>
                        </Row>    
                        <Row style={{ fontSize:"1em" }}>
                            <Col sm={6}>First Name</Col>
                            <Col sm={6}>{data.firstName}</Col>
                        </Row> 
                        <Row style={{ fontSize:"1em" }}>
                            <Col sm={6}>Last Name</Col>
                            <Col sm={6}>{data.lastName}</Col>
                        </Row>         
                    </Row>
                </Col>                            
            </Row>
        </>
    );
}

export default StaticAPI_desktop;