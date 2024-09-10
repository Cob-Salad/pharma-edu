import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import AddressInput from "../AddressInput"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Accordion, Container } from "react-bootstrap"
import { useEffect, useState } from "react";
import { fetchData } from "./PatientCalls"
import { useParams } from "react-router-dom"
import SearchPage from "../../components/SearchPage"


export interface PatientData {
  id: number;
  first_name: string;
  last_name: string;
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
}



const PatientProfile: React.FC = () => {
  let {id} = useParams()

  const [response, setResponse] = useState<PatientData | undefined>();

    useEffect(() => {
      const grab = async () => {
        const patientData = await fetchData(Number(id));
        setResponse(patientData);
      }
      grab()
    },[])
  

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

                <AddressInput street={response?.street} state={response?.state} city={response?.city} zipcode={response?.zipcode} handle={null} />

                <InputGroup className="my-2">
                  <InputGroup.Text>Primary Doctor</InputGroup.Text>
                  <FormControl aria-label="Doctor Profile" placeholder="Doctor Profile"/>
                </InputGroup>

                <InputGroup className="my-2">
                  <FloatingLabel 
                    controlId="floatingTextarea"
                    label={"Allergies"}
                    defaultValue={response?.allergies}
                    className="mb-3">
                      <FormControl as="textarea" aria-label="Allergies" value={response?.allergies} placeholder="Leave a Comment here" style={{height: '100px'}}/>
                  </FloatingLabel>
                </InputGroup>
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