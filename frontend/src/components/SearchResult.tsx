import { Col, Container, Row} from "react-bootstrap"
import { LinkContainer }  from "react-router-bootstrap"
import fetchData from "./DataFetcher";
import { useEffect, useState } from "react";

interface SearchResultProps {
  name: string;
  descriptor: string;
  someProfile: string;
}
interface Data {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}


const SearchResult: React.FC<SearchResultProps> = ({ name, descriptor, someProfile}) => {
  const [response, setResponse] = useState<Data[] | undefined>();

useEffect(() => {
  const grab = async () => {
    const patientData = fetchData()
    patientData.then((response: Data[]) => { console.log(response)
      setResponse(response)}).catch((response: Data[]) => {console.log(response)})
  }
  grab()
  },[])


  return(
    <Container fluid className="d-flex flex box mt-3">
    <LinkContainer to={someProfile} >
      <Row>
        <Col>
          {response ?(
            response.map((obj) => <h3>{obj.first_name}</h3>)
          ) : (
            <p>Loading...</p>
          )}        


        </Col>
        <Col xs={6}>
        <h3>{descriptor}</h3>
        </Col>
      </Row>
    </LinkContainer>
    </Container>
  );
};

export default SearchResult