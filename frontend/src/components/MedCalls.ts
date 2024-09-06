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


const fetchMedicine = async (): Promise<Data[]> => {
  
  const response = await fetch(`http://127.0.0.1:8000/rx-items`);
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data: Data[] = await response.json();

  return data;
};

export default fetchMedicine;