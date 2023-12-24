import { createContext, useContext, useState } from 'react';

export const HospitalEmailContext = createContext();

export const HospitalEmailProvider = ({ children }) => {
  const [hospitalEmail, setHospitalEmail] = useState(localStorage.getItem('hospitalEmail'));

  return (
    <HospitalEmailContext.Provider value={{ hospitalEmail, setHospitalEmail }}>
      {children}
    </HospitalEmailContext.Provider>
  );
};

export const useHospitalEmail = () => useContext(HospitalEmailContext);
