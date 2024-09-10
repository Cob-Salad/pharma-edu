import { Col, Row} from "react-bootstrap"
import { LinkContainer }  from "react-router-bootstrap"


interface SearchResultProps {
  directory: string
  fieldOne: string;
  fieldTwo: string;
  descriptor: string;
  id: number;
}


const SearchResult: React.FC<SearchResultProps> = ({ directory, fieldOne, fieldTwo, descriptor, id}) => {

  return(
    <LinkContainer to={`/${directory}/${id}`} className="d-flex flex box mt-3 p-2" style={{width: '100vw'}}>
      <Row fluid style={{width: "50vw"}}>
        <Col>
          <h3 key={id}>{fieldOne}, {fieldTwo}</h3>    
        </Col>
        <Col>
        <h3>{descriptor}</h3>
        </Col>
      </Row>
    </LinkContainer>
  );
};

export default SearchResult