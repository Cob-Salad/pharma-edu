import NavItem from "./NavItem"
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import navlinks from "../NavRoutes"


function Navigation(){

    return ( 
        <Navbar fixed="top" variant="underline" className="nav nav-tabs nav-justified" style={{color: "white", fontFamily: 'Hind Siliguri', fontWeight: "bold", backgroundColor: "#2e3f59"}}> 
            {navlinks.map((obj, index) => <NavItem key={index} dirName={obj.link} path={obj.path}/>)}
            
            <Image src="src/assets/Dixietech_Logo.png" style={{height: "75px"}} />
        </Navbar>
    )
}

export default Navigation