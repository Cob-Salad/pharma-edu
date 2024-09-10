
import PatientProfile from "./pages/PatientPages/PatientProfile";
import DoctorProfile from "./pages/DoctorProfile";
import NewPatientProfile from "./pages/NewPatientProfile";


interface NavBarLinks {
    link: string;
    path: string;
    component: React.FC;
}

const routes: NavBarLinks[]= [ 
    {link:"Patient Profile", path:`/patients/:id`, component: PatientProfile },
    {link:"New Patient Profile", path:"/new_patient", component: NewPatientProfile},
    {link:"Doctor Profile", path:"/doctor_profile", component: DoctorProfile}
]



export default routes;