import { Form, InputGroup, FormControl, FloatingLabel } from "react-bootstrap"
import AddressInput from "./AddressInput"


const DoctorProfile: React.FC = () => {

  return (
    <div>
              <Form className="section pt-3 px-5">
                <h2>Patient Information</h2>
                <InputGroup className="my-2" >
                  <InputGroup.Text>Last, First Name</InputGroup.Text>
                  <FormControl aria-label="Last Name"  placeholder="Last Name"/>
                  <FormControl aria-label="First Name" placeholder="First Name"/>
                </InputGroup>
                
                <InputGroup className="my-2">
                  <InputGroup.Text>Date of Birth</InputGroup.Text>
                  <FormControl aria-label="date" type="date" />
                </InputGroup>

                <AddressInput />

                <InputGroup className="my-2">
                  <InputGroup.Text>Primary Doctor</InputGroup.Text>
                  <FormControl aria-label="Doctor Profile" placeholder="Doctor Profile"/>
                </InputGroup>

                <InputGroup className="my-2">
                  <FloatingLabel 
                    controlId="floatingTextarea"
                    label={"Allergies"}
                    className="mb-3">
                      <FormControl as="textarea" aria-label="Allergies" placeholder="Leave a Comment here" style={{height: '100px'}}/>
                  </FloatingLabel>
                </InputGroup>
              </Form>
          
    </div>
  )
}


export default DoctorProfile