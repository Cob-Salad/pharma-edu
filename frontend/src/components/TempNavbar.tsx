import NavItem from "./NavItem"
import links from "../NavRoutes";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav"


function TempNavigation(){

    return (
        <Navbar fixed="top" expand="lg" style={{color: "white", fontFamily: 'Hind Siliguri', fontWeight: "bold", backgroundColor: "#2e3f59"}}> 
          <Nav fill variant="underline" defaultActiveKey="/home">
          <Image src="src/assets/Dixietech_Logo.png" style={{height: "75px"}} /> 
            <Nav.Item>
              <Nav.Link href="/home" style={{display: "flex", height: "75px",  justifyContent: "center" , alignItems: "center"}} className="navItem link-light">
              <h3>Home</h3>
              </Nav.Link>
            </Nav.Item>

            {links.map((obj, index) => <NavItem key={index} dirName={obj.link} path={obj.path}/>)}
          </Nav>
        </Navbar>
    )
}

export default TempNavigation