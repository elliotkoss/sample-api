import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section1_desktop = () => {
    return (
        <>
            <Row style={{ paddingTop: "20px", overflow:"hidden" }}>
                <Col md={1}></Col>
                <Col sm={12} md={11} >       
                        
                    <Row style={{ paddingTop: "20px", fontSize:"3em", lineHeight: "1em" }}>
                        <Col>Sample API</Col>
                    </Row>
                    <Row style={{ paddingTop: "20px" }}>
                        <Row style={{ paddingTop: "20px", fontSize:"1.5em" }}>
                            <Col>Node + React (Bootstrap) + Postgresql</Col>
                        </Row>
                        <Row style={{ paddingTop: "20px", fontSize:"1em" }}>
                            <Col>
                                This is a sample codebase to build an API. To test an API endpoint in Postman, be sure to use the full domain including localhost and the port. For instance, http://localhost:3000/api/get/static-user is the full url to use in Postman (assuming you didn't change the port.)
                            </Col>
                        </Row>         
                    </Row>
                </Col>                            
            </Row>
        </>
    );
}

export default Section1_desktop;