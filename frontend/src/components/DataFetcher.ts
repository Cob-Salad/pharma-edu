

interface Data {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

const fetchData = async (): Promise<Data[]> => {
  
  const response = await fetch('http://127.0.0.1:8000/patients');
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  const data: Data[] = await response.json();

  return data;
};



export default fetchData;