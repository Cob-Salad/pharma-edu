import { useAppContext } from "./components/Context";



interface Inputs{
  label: string;
  directory: string
  id: string;
  type: string;
  placeholder: string;
  value: string;
}

const inputs: Inputs[] = [
  {label:"Patient", 
    directory: "patient_search",
    id:"formPatientProfile", 
    type: "patient", 
    placeholder: "Patient Profile",
    value: ""
  },
  {
    label: "Doctor", 
    directory: "doctor_search",
    id: "formDoctorProfile",
    type: "doctor",
    placeholder: "Doctor Profile",
    value: ""
  },
  {
    label: "Date of Prescription",
    directory: "new_prescription",
    id: "formDateOfPrescription",
    type: "date",
    placeholder: "Date Prescribed",
    value: ""
  },
  {
    label: "Medication",
    directory: "medication_search",
    id: "formMedicationProfile",
    type: "medication",
    placeholder: "Medication Profile",
    value: ""
  },

]


export default inputs