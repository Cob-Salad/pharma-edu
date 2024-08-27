import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import AddressInput from "./AddressInput"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Accordion } from "react-bootstrap"
import SearchPage from "../components/SearchPage"
import { Container } from "react-bootstrap"
import SearchResult from "../components/SearchResult"
import DataFetcher from "../components/DataFetcher"


const PatientProfile: React.FC = () => {



  const SearchResultObj = [
    {
    name: "Example name",
    descriptor: "Dob, Doc type, Med Type",
    someProfile: "this will be a connection to a profile"
    }
  ]


    return(
        <div>
            
            <div className="body pt-5"> 
              
              <Form className="section pt-3 px-5">
                <h2>Patient Information</h2>
                <InputGroup className="my-2" >
                  <InputGroup.Text>Last, First Name</InputGroup.Text>
                  <FormControl aria-label="Last Name" placeholder="Last Name"/>
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
          
            <div className="line"/>
            <div className="section pt-3">
            <Accordion style={{width: "48vw"}} className=" mx-4" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><h3>Insurance Information</h3></Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <InputGroup className="my-2">
                      <InputGroup.Text>BIN</InputGroup.Text>
                      <FormControl aria-label="BIN" placeholder="BIN" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>PCN</InputGroup.Text>
                      <FormControl aria-label="PCN" placeholder="PCN" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>Person Code</InputGroup.Text>
                      <FormControl aria-label="Person Code" placeholder="Person Code" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>ID #</InputGroup.Text>
                      <FormControl aria-label="ID #" placeholder="ID #" />
                    </InputGroup>
                    <InputGroup className="my-2">
                      <InputGroup.Text>Group #</InputGroup.Text>
                      <FormControl aria-label="Group #" placeholder="Group #" />
                    </InputGroup>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h3>Prescriptions</h3></Accordion.Header>
                <Accordion.Body style={{maxWidth: "48vw"}}>
                <Container fluid style={{width: "48vw", height: "100vh", marginTop: "200px"}} className="d-flex flex-column align-items-start ps-0 pt-5 mt-5">
                  <Form className="body p-3">
                    <h2 className="me-2">Search</h2>
                    <FormControl
                      type="search"
                      placeholder="Last Name"
                      className="mx-1 w-100"
                      aria-label="Search" />
                    <FormControl
                      type="search"
                      placeholder="First Name"
                      className="me-1 w-100"
                      aria-label="Search" /> 
                    <FormControl
                      type="search"
                      placeholder="Dob, Doc type, Med type"
                      className="me-1 w-100"
                      aria-label="Search" />
                  </Form>
                  {SearchResultObj.map((obj, index) => <SearchResult key={index} name={obj.name} descriptor={obj.descriptor} someProfile={obj.someProfile} />)}

                  <h1>this page will be repeated over the other search pages</h1>
              </Container>                
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
            </div>
        </div>
    )
}

export default PatientProfile