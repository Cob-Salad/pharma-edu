import inputs from "../Inputs"
import Form from "react-bootstrap/Form"
import FormInput from "../components/FormInput"
import { InputGroup, Row, Col, FormControl, FloatingLabel, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const NewPrescription: React.FC = () => {

    return(

    
        <div className="content-wrapper"> 
        
            <Form className="section px-5">
                <h2>New Prescription</h2>
                {inputs.map((obj) => <FormInput key={obj.id} label={obj.label} directory={obj.directory} type={obj.type} placeholder={obj.placeholder} />
            )}
                <InputGroup >
                    <h4>Quantity:</h4>
                    <Row>
                        <Col className="ps-0">
                        <FloatingLabel 
                            controlId="floatingTextarea"
                            label={"Written"}
                            className="mb-3">
                            <FormControl aria-label="written_amount" placeholder="Leave a Comment here" style={{height: '25px'}}/>
                        </FloatingLabel>
                        </Col>
                        <Col className="px-5">
                        <FloatingLabel 
                            controlId="floatingTextarea"
                            label={"Dispensed"}
                            className="mb-3">
                            <FormControl aria-label="written_amount" placeholder="Leave a Comment here" style={{height: '25px'}}/>
                        </FloatingLabel>
                        </Col>
                        <Col>
                        <FloatingLabel 
                        controlId="floatingTextarea"
                        label={"Refills"}
                        className="mb-3">
                            <FormControl aria-label="written_amount" placeholder="Leave a Comment here" style={{height: '25px'}}/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                </InputGroup>
                <InputGroup>
                    <FloatingLabel 
                    controlId="floatingTextarea"
                    label={"Instructions"}
                    className="mb-3">
                        <FormControl as="textarea" aria-label="Instructions" placeholder="Leave a Comment here" style={{height: '100px'}}/>
                    </FloatingLabel>
                </InputGroup>
                <div style={{display: "flex", flexDirection: "row"}}>
                <InputGroup>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label={"Tech Initials"}
                        className="mb-3">
                            <FormControl as="textarea" aria-label="initials" placeholder="Leave a Comment here" style={{width: '200px'}}/>
                        </FloatingLabel>

                </InputGroup>

                <Button style={{width: '200px'}} className="btn-primary">Print Label</Button>
                </div>
            </Form>
            <div className="line" />
            <div className="section px-5">
                <h2>Label</h2>
                <h3 style={{height: "600px", width: "675px", backgroundColor: "blue"}}>
                    Image </h3>

            <LinkContainer to="/patient_profile">
                <Button>Previous Prescriptions</Button>
            </LinkContainer>

                
            </div>
            
        </div>
    
    )
}

export default NewPrescription