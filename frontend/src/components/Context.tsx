import React, {createContext, useContext, useState} from "react";


interface profileContexts {
  patient: string;
  setPatient: (patient: string) => void;
  doctor: string;
  setDoctor: (doctor: string) => void;
  rxItem: string;
  setRxItem: (rxItem: string) => void
}


const AppContext = createContext<profileContexts | undefined> (undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [rxItem, setRxItem] = useState('');

  return(
    <AppContext.Provider value={{ patient, setPatient, doctor, setDoctor, rxItem, setRxItem}}>
      {children}
    </AppContext.Provider>
  )
}   

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}