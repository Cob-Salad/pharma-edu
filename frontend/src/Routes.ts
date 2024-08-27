
import PatientProfile from "./pages/PatientProfile";
import DoctorProfile from "./pages/DoctorProfile";

interface NavBarLinks {
    link: string;
    path: string;
    component: React.FC;
}

const routes: NavBarLinks[]= [ 
    {link:"Patient Profile", path:"/patient_profile", component: PatientProfile },
    {link:"Doctor Profile", path:"/doctor_profile", component: DoctorProfile}
]



export default routes;