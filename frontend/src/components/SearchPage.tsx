import { Container, Form, FormControl, Button, Row, Col } from "react-bootstrap";
import SearchResult from "./SearchResult";
import { LinkContainer } from "react-router-bootstrap";


export interface SearchResults {
  id: number;
  fieldOne: string;
  fieldTwo: string;
  descriptor: string;
}
export interface placeholder {
  searchOne: string,
  searchTwo: string,
  searchThree: string
}
interface SearchProp{
  directory: string
  new_addition: string
  new_directory: string
  filters: placeholder
  response: SearchResults[]
}

const SearchPage: React.FC<SearchProp> = ({ directory, filters, response, new_addition, new_directory }) => {
  


  return(
    <Container fluid style={{width: "100vw", height: "100vh", marginTop: "200px"}} className="d-flex flex-column align-items-start ps-0 pt-5 mt-5">
      <Form className="body p-3" style={{backgroundColor: '#4D79A9'}}>
        <h2 className="me-2">Search</h2>
        <FormControl
          type="search"
          placeholder={filters.searchOne}
          className="mx-1 w-100"
          aria-label="Search" />
        <FormControl
          type="search"
          placeholder={filters.searchTwo}
          className="me-1 w-100"
          aria-label="Search" /> 
        <FormControl
          type="search"
          placeholder={filters.searchThree}
          className="me-1 w-100"
          aria-label="Search" />
        <LinkContainer to={`/${new_directory}`}>
        <Button>New {new_addition}</Button>
        </LinkContainer>
      </Form>
      <Container fluid>
        <Row>
          <Col><h3>{filters.searchOne}, {filters.searchTwo}</h3></Col>
          <Col><h3>{filters.searchThree}</h3></Col>
        </Row>
      </Container>
      
      {response ?(
        response.map((obj, index) => 
          <SearchResult directory={directory} key={index} fieldOne={obj.fieldOne} fieldTwo={obj.fieldTwo}  descriptor={obj.descriptor} id={obj.id} />)
        ) : (
          <p>Loading...</p>
      )}   
    </Container>
  );
};

export default SearchPage