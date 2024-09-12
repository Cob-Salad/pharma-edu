import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";
import { LinkContainer } from "react-router-bootstrap";


interface FormInputProps {
  label: string;
  type: string;
  directory: string;
  placeholder: string;
  value: string
}

const FormInput: React.FC<FormInputProps> = ({ label, type, value, directory, placeholder}) => {

  return(
    <InputGroup className="my-1">
      <InputGroup.Text><h5 className="m-0">{label}</h5></InputGroup.Text>
      <LinkContainer to={`/${directory}`}>
      <Form.Control type={type} value={value} placeholder={placeholder} />
      </LinkContainer>
    </InputGroup>
  )

}

export default FormInput