import React, { useState, useEffect} from "react";



const DataFetcher: Function = () => {
  interface Data {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
  }

  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const fetchData = async (): Promise<Data[]> => {
    
    const response = await fetch('http://127.0.0.1:8000/patients');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data: Data[] = await response.json();
    return data;
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
    
      const data = await fetchData();
      setData(data);


    }
    loadData()
  }, []);
  console.log(data)
};


export default DataFetcher;