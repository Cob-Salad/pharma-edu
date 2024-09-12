import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import AddressInput from "./AddressInput"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Button } from "react-bootstrap"
import React, { useState } from "react"
import { postPatient } from "./PatientPages/PatientCalls"
import { PatientData } from "./PatientPages/PatientProfile"


export interface PatientProps {
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




const NewPatientProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    date_of_birth: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    allergies: "",
    insurance_member_id: "",
    insurance_rx_bin: "",
    insurance_name: "",
    insurance_group_number: "",
    insurance_rx_pcn: "",
    insurance_person_code: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target;
    if (edit) {
      setFormData({
        ...formData,
        [name]: value,
    })
  }};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data: ", formData)
    postPatient(formData)
  }

  let edit: boolean = true

  const change = () => {
    edit = !edit
  }
    return(
      <div>    
        <div className="body pt-5"> 
          <Form onSubmit={handleSubmit} className=" pt-3 px-5"style={{display: "flex", flexDirection: "row"}}>
            <div className="section px-5">
            <h2>Patient Information</h2>
              <InputGroup className="my-2" >
                <InputGroup.Text>Last, First Name</InputGroup.Text>
                <FormControl type="text" aria-label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name"/>
                <FormControl aria-label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name"/>
              </InputGroup>
              
              <InputGroup className="my-2">
                <InputGroup.Text>Date of Birth</InputGroup.Text>
                <FormControl aria-label="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} type="date" />
              </InputGroup>

              <InputGroup className="my-2">
                  <InputGroup.Text>Phone Number</InputGroup.Text>
                  <FormControl aria-label="number" value={formData.phone_number} type="number" />
                </InputGroup>

              <AddressInput street={formData.street} city={formData.city} state={formData.state} zipcode={formData.zipcode} handle={handleChange} />

              <InputGroup className="my-2">
                <FloatingLabel 
                  controlId="floatingTextarea"
                  label={"Allergies"} 
                  className="mb-3">
                    <FormControl as="textarea" aria-label="Allergies" name="allergies" value={formData.allergies} placeholder="Leave a Comment here" onChange={handleChange}  style={{height: '100px'}}/>
                </FloatingLabel>
              </InputGroup>
              <Button onClick={handleSubmit}>
                Submit
              </Button>
            </div>

          
            <div className="line"/>
            <div className="section pt-3 px-5">
            <h2>Insurance Information</h2>
              <InputGroup className="my-2">
                <InputGroup.Text>ID #</InputGroup.Text>
                <FormControl aria-label="ID #" name="insurance_name" value={formData.insurance_name} onChange={handleChange}  placeholder="ID #" />
              </InputGroup>
              <InputGroup className="my-2">
                <InputGroup.Text>BIN</InputGroup.Text>
                <FormControl aria-label="BIN" name="insurance_rx_bin" value={formData.insurance_rx_bin} onChange={handleChange}  placeholder="BIN" />
              </InputGroup>
              <InputGroup className="my-2">
                <InputGroup.Text>PCN</InputGroup.Text>
                <FormControl aria-label="PCN" name="insurance_rx_pcn" value={formData.insurance_rx_pcn} onChange={handleChange}  placeholder="PCN" />
              </InputGroup>
              <InputGroup className="my-2">
                <InputGroup.Text>Person Code</InputGroup.Text>
                <FormControl aria-label="Member ID" name="insurance_member_id" value={formData.insurance_member_id} onChange={handleChange}  placeholder="Member ID" />
              </InputGroup>
              <InputGroup className="my-2">
                <InputGroup.Text>Group #</InputGroup.Text>
                <FormControl aria-label="Group #" name="insurance_group_number" value={formData.insurance_group_number} onChange={handleChange}  placeholder="Group #" />
              </InputGroup>
            </div>
          </Form>
        </div>
      </div>
    )
}

export default NewPatientProfile