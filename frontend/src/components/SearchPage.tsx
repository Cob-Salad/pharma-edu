import { Container, Form, FormControl, Button } from "react-bootstrap";
import SearchResult from "./SearchResult";





const SearchPage: React.FC = () => {
  const SearchResultObj = [
    {
    name: "Example name",
    descriptor: "Dob, Doc type, Med Type",
    someProfile: "this will be a connection to a profile"
    }
  ]

  return(
    <Container fluid style={{width: "100vw", height: "100vh", marginTop: "200px"}} className="d-flex flex-column align-items-start ps-0 pt-5 mt-5">
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
      {SearchResultObj.map((obj, index) => <SearchResult name={obj.name} descriptor={obj.descriptor} someProfile={obj.someProfile} />)}

      <h1>this page will be repeated over the other search pages</h1>
    </Container>
  );

};

export default SearchPage