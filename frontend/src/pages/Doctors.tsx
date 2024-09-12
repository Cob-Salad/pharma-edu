import { useState, useEffect } from "react"
import SearchPage, { SearchResults, placeholder } from "../components/SearchPage"
import fetchPrescribers from "../components/DoctorCalls";

interface Data {
    prescriber_type: string,
    state: string,
    contact_number: string,
    npi: string,
    street: string,
    id: number,
    last_name: string,
    first_name: string,
    city: string,
    zipcode: string,
    dea: string
    }


const Doctors: React.FC = () => {
    const [response, setResponse] = useState<Data[]>();

    useEffect(() => {
        const grab = async () => {
            const doctorData = await fetchPrescribers();
            await setResponse(doctorData);
        }
        grab();
    },[])

        const doctorArray: SearchResults[] = response?.map(doctor => ({
            id: doctor.id,
            fieldOne: doctor.last_name,
            fieldTwo: doctor.first_name,
            descriptor: doctor.prescriber_type
        })) || [];
        const docPlaceholders: placeholder = {
            searchOne: "Last Name",
            searchTwo: "First Name",
            searchThree: "Doctor Type"
        }

    return(
        <SearchPage directory="prescribers" filters={docPlaceholders} response={doctorArray} new_addition="Doctor" new_directory="new_doctor"/>
    )
}

export default Doctors