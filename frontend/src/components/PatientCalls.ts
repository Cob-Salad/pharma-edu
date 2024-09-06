
interface Data {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}
interface PatientData {
  id: number,
  first_name: string,
  last_name: string,
  date_of_birth: string,
  phone_number: string,
  street: string,
  city: string,
  state: string,
  zipcode: string,
  allergies: string,
  insurance_name: string,
  insurance_member_id: string,
  insurance_group_number: string,
  insurance_rx_bin: string,
  insurance_rx_pcn: string,
  insurance_person_code: string
}


const fetchList = async (): Promise<Data[]> => {
  
  const response = await fetch("http://127.0.0.1:8000/patients");
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data: Data[] = await response.json();

  return data;
};

export const fetchData = async (id: number): Promise<PatientData> => {
  const response = await fetch(`http://127.0.0.1:8000/patients/${id}`)
  if (!response.ok) {
    throw new Error('Network response not ok.');
  }
  const data: PatientData = await response.json();

  return data
}

export const postPatient = async (data: ) => {
  const response = await fetch("http://127.0.0.1:8000/patients", {
    method: "Post",
  })
  if (!response.ok) {
    throw new Error;
  }
  const result = await response.json();
  return result
}

export const patchPatient = async (data: ) => {
  const response = await fetch("http://127.0.0.1:8000/patients", {
    method: "Post",
  })
  if (!response.ok) {
    throw new Error;
  }
  const result = await response.json();
  return result
}

export const deletePatient = async (id: number) => {
  const response = await fetch("http://127.0.0.1:8000/patients", {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error;
  }
}

export default fetchList;