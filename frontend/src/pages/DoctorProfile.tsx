import { Form, InputGroup, FormControl, FloatingLabel } from "react-bootstrap"
import AddressInput from "./AddressInput"
import { useState, useEffect} from "react"
import { useAppContext } from "../components/Context"
import { useParams } from "react-router-dom"
import {fetchDoctor} from "../components/DoctorCalls"
import { deletePrescriber } from "../components/DoctorCalls"

interface Data {
  prescriber_type: string,
  state: string,
  contact_number: string,
  npi: string,
  street: string,
  id: number,
  last_name: string,
  first_name: string,
  city: string,
  zipcode: string,
  dea: string
  }


const DoctorProfile: React.FC = () => {
  const [editButton, setEditButton] = useState<string>("Edit")
  const { setDoctor } = useAppContext();

  let {id} = useParams()

  const [response, setResponse] = useState<Data | undefined>();

    useEffect(() => {
      const grab = async () => {
        const doctorData = await fetchDoctor(Number(id));
        setResponse(doctorData);
      }
      grab()
    },[])
    
  const handleDelete = async (id: number) => {
    await deletePrescriber(id)
  }

  const changeEdit = () => {
    if (editButton == "DELETE") {
      handleDelete(Number(id))
    }
    setEditButton("DELETE")
  }
  const changeDelete = () => {
    setEditButton("Edit")
  }
  return (
    <div>
              <Form className="section pt-3 px-5">
                <h2>Doctor Information</h2>
                <InputGroup className="my-2" >
                  <InputGroup.Text>Last, First Name</InputGroup.Text>
                  <FormControl aria-label="Last Name" value={response?.last_name} placeholder="Last Name"/>
                  <FormControl aria-label="First Name" value={response?.first_name} placeholder="First Name"/>
                </InputGroup>
      
                <AddressInput street={response?.street} city={response?.city} state={response?.state} zipcode={response?.zipcode} handle={undefined} />

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