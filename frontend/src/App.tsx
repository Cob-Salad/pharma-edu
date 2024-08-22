import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import TempNavigation from './components/TempNavbar';
import { Container } from 'react-bootstrap';


{/* credit for art to be used
   <a href="https://www.flaticon.com/free-icons/pharmacy" title="pharmacy icons">Pharmacy icons created by Freepik - Flaticon</a> */}
function App() {

  return (
    <div >
      <Container>
        <TempNavigation />
      </Container>
      <Routes>
        {routes.map((obj)=> <Route key={obj.link} path={obj.path} element={<obj.component />} />)}
      </Routes>
      
    </div>
  );
};

export default App
