
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

const fetchPrescribers = async (): Promise<Data[]> => {
  
  const response = await fetch(`http://127.0.0.1:8000/prescribers`);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data: Data[] = await response.json();

  return data;
};


export default fetchPrescribers;