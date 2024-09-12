import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import AddressInput from "../AddressInput"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Accordion, Button, Container } from "react-bootstrap"
import { useEffect, useState } from "react";
import { deletePatient, fetchData } from "./PatientCalls"
import { useParams } from "react-router-dom"
import SearchPage from "../../components/SearchPage"
import { LinkContainer } from "react-router-bootstrap"
import { useAppContext } from "../../components/Context"

export interface PatientData {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  allergies: string;
  insurance_member_id: string;
  insurance_rx_bin: string;
  insurance_name: string;
  insurance_group_number: string;
  insurance_rx_pcn: string;
  insurance_person_code: string;
}



const PatientProfile: React.FC = () => {
  const [response, setResponse] = useState<PatientData | undefined>();

  useEffect(() => {
    const grab = async () => {
      const patientData = await fetchData(Number(id));
      setResponse(patientData);
    }
    grab()
  },[])

  const [formData, setFormData] = useState({
    first_name: response?.first_name,
    last_name: response?.last_name,
    phone_number: response?.phone_number,
    date_of_birth: response?.date_of_birth,
    street: response?.street,
    city: response?.city,
    state: response?.state,
    zipcode: response?.zipcode,
    allergies: response?.allergies,
    insurance_member_id: response?.insurance_member_id,
    insurance_rx_bin: response?.insurance_rx_bin,
    insurance_name: response?.insurance_name,
    insurance_group_number: response?.insurance_group_number,
    insurance_rx_pcn: response?.insurance_rx_pcn,
    insurance_person_code: response?.insurance_person_code,
  })

  const [editButton, setEditButton] = useState<string>("Edit")
  const { setPatient } = useAppContext();

  let {id} = useParams()


    
  const handleDelete = async (id: number) => {
    await deletePatient(id)
  }

  const changeEdit = () => {
    if (editButton == "DELETE") {
      handleDelete(Number(id))
    }
    change()
    setEditButton("DELETE")
  }
  const handlePatch = () => {
    setEditButton("Edit")
  }
  let edit = false;
  const change = () => {
    edit = !edit
  }
  return(
        <div className="body pt-5">
            <Form style={{display: "flex", flexDirection: "row"}}>
              <div className="section pt-3 px-5">
                <h2>Patient Information</h2>
                <InputGroup className="my-2" >
                  <InputGroup.Text>Last, First Name</InputGroup.Text>
                  <FormControl aria-label="Last Name" value={response?.last_name} placeholder="Last Name"/>
                  <FormControl aria-label="First Name" value={response?.first_name} placeholder="First Name"/>
                </InputGroup>
                
                <InputGroup className="my-2">
                  <InputGroup.Text>Date of Birth</InputGroup.Text>
                  <FormControl aria-label="date" value={response?.date_of_birth} type="date" />
                </InputGroup>
                <InputGroup className="my-2">
                  <InputGroup.Text>Phone Number</InputGroup.Text>
                  <FormControl aria-label="number" value={response?.phone_number} type="number" />
                </InputGroup>

                <AddressInput street={response?.street} state={response?.state} city={response?.city} zipcode={response?.zipcode} handle={null} />

                <InputGroup className="my-2">
                  <InputGroup.Text>Primary Doctor</InputGroup.Text>
                  <FormControl aria-label="Doctor Profile" placeholder="Doctor Profile"/>
                </InputGroup>

                <InputGroup className="my-2">
                  <FloatingLabel 
                    controlId="floatingTextarea"
                    label={"Allergies"}
                    className="mb-3">
                      <FormControl as="textarea" aria-label="Allergies" value={response?.allergies} placeholder="Leave a Comment here" style={{height: '100px'}}/>
                  </FloatingLabel>
                </InputGroup>
                <Container fluid style={{display: "flex", justifyContent: "space-between"}}>
                <Button onClick={changeEdit}>
                  {editButton} Profile
                </Button>
                <Button onClick={handlePatch}>
                  Save Profile
                </Button>
                <LinkContainer to="/new_prescription">
                <Button onClick={() => setPatient(`${response?.first_name}, ${response?.last_name}`)}>
                  Add to Prescription
                </Button>
                </LinkContainer>
                </Container>
              </div>
          
            <div className="line"/>
            <div className="section ps-5 pt-3">
            
                  <h2>Insurance Information</h2>
                    <InputGroup className="my-2">
                      <InputGroup.Text>Insurance Name</InputGroup.Text>
                      <FormControl aria-label="name" value={response?.insurance_name} placeholder="Insurance" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>BIN</InputGroup.Text>
                      <FormControl aria-label="BIN" value={response?.insurance_rx_bin} placeholder="BIN" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>PCN</InputGroup.Text>
                      <FormControl aria-label="PCN" value={response?.insurance_rx_pcn} placeholder="PCN" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>Person Code</InputGroup.Text>
                      <FormControl aria-label="Person Code" value={response?.insurance_member_id} placeholder="Person Code" />
                    </InputGroup>
                    
                    <InputGroup className="my-2">
                      <InputGroup.Text>Group #</InputGroup.Text>
                      <FormControl aria-label="Group #" value={response?.insurance_group_number} placeholder="Group #" />
                    </InputGroup>
                  

            </div>
          </Form>
        </div>
    )}
export default PatientProfile