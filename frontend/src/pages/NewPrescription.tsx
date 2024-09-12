import Form from "react-bootstrap/Form"
import FormInput from "../components/FormInput"
import { InputGroup, Row, Col, FormControl, FloatingLabel, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useAppContext } from "../components/Context"
import { useState } from "react"

interface Inputs{
    label: string;
    directory: string
    id: string;
    type: string;
    placeholder: string;
    value: string;
}


const NewPrescription: React.FC = () => {
    const { patient, setPatient } = useAppContext();
    const { doctor, setDoctor } = useAppContext();
    const { rxItem, setRxItem } = useAppContext();
    const [patientState, setPatientState] = useState<string>('')
    const [doctorState, setDoctorState] = useState<string>('')
    const [rxItemState, setRxItemState] = useState<string>('')

    
    
    const resetContext = () => {
        setPatientState(patient)
        setDoctorState(doctor)
        setRxItemState(rxItem)
    }
    const inputs: Inputs[] = [
        {
        label:"Patient", 
        directory: "patient_search",
        id:"formPatientProfile", 
        type: "patient", 
        placeholder: "Patient Profile",
        value: patientState
        },
        {
        label: "Doctor", 
        directory: "doctor_search",
        id: "formDoctorProfile",
        type: "doctor",
        placeholder: "Doctor Profile",
        value: doctorState
        },
        {
        label: "Date of Prescription",
        directory: "new_prescription",
        id: "formDateOfPrescription",
        type: "date",
        placeholder: "Date Prescribed",
        value: ""
        },
        {
        label: "Medication",
        directory: "medication_search",
        id: "formMedicationProfile",
        type: "medication",
        placeholder: "Medication Profile",
        value: rxItemState
        }
    ] 

    return(
        <div className="content-wrapper"> 
            <Form className="section px-5">
                <h2>New Prescription</h2>
                {inputs.map((obj) => <FormInput key={obj.id} value={obj.value} label={obj.label} directory={obj.directory} type={obj.type} placeholder={obj.placeholder} />
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

                <Button onClick={resetContext} style={{width: '200px'}} className="btn-primary">
                    Print Label
                </Button>
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