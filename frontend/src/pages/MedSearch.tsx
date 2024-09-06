import SearchPage, { SearchResults, placeholder } from "../components/SearchPage"
import { useState, useEffect } from "react";
import fetchMedicine from "../components/MedCalls";

interface Data {
    ndc: string,
    strength: string,
    lot_number: string,
    dea_schedule: string,
    name: string,
    id: number,
    expiration: string,
    dosage_form: string
}

const MedSearch: React.FC = () => {
    const [response, setResponse] = useState<Data[]>();

    useEffect(() => {
        const grab = async () => {
            const patientData = await fetchMedicine();
            await setResponse(patientData);
        }
        grab()
        },[])
            const medicineArray: SearchResults[] = response?.map(medicine => ({
                id: medicine.id,
                fieldOne: medicine.name,
                fieldTwo: medicine.strength,
                descriptor: medicine.ndc
            })) || [];
            const rxPlaceHolder: placeholder = {
                searchOne: "Name",
                searchTwo: "Strength",
                searchThree: "NDC"
            }
    return(
        <SearchPage directory="rx-items" filters={rxPlaceHolder} response={medicineArray}/>
    )
}

export default MedSearch