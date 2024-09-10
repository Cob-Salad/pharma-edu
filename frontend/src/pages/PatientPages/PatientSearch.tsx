import SearchPage, { SearchResults, placeholder } from "../../components/SearchPage"
import { useEffect, useState } from "react";
import fetchPatients from "./PatientCalls";
interface Data {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    }

const PatientSearch: React.FC = () => {
    const [response, setResponse] = useState<Data[]>();

    useEffect(() => {
    const grab = async () => {
        const patientData = await fetchPatients();
        await setResponse(patientData);
    }
    grab()
    },[])
        const patientArray: SearchResults[] = response?.map(patient => ({
            id: patient.id,
            fieldOne: patient.last_name,
            fieldTwo: patient.first_name,
            descriptor: patient.date_of_birth
        })) || [];
        const patientPlaceholder: placeholder = {
            searchOne: "Last Name",
            searchTwo: "First Name", 
            searchThree: "Date of Birth"
        }

    return(
        <SearchPage directory="patients" filters={patientPlaceholder} response={patientArray} new_addition="Patient" new_directory="new_patient" />
    )
}

export default PatientSearch