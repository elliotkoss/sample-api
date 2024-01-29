import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section1_mobile = () => {
    return (
        <>
            <Row style={{ paddingBottom: "50px", overflow:"hidden" }}>
                <Col md={1}></Col>
                <Col sm={12} md={6} >       
                        
                    <Row style={{ paddingTop: "20px", fontSize:"3em", lineHeight: "1em" }}>
                        <Col>Sample API</Col>
                    </Row>
                    <Row style={{ paddingTop: "20px" }}>
                        <Row style={{ paddingTop: "20px", fontSize:"1.5em" }}>
                            <Col>Node + React (Bootstrap) + Postgresql</Col>
                        </Row>
                        <Row style={{ paddingTop: "20px", fontSize:"1em" }}>
                            <Col>
                                This was built for desktop only. Please switch to desktop to see all the functionality in this front-end experience.
                            </Col>
                        </Row>                        
                    </Row>
                </Col>                            
            </Row>
        </>
    );
}

export default Section1_mobile;